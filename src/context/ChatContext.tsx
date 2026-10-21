import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react';
import { initialConversations } from '../data/conversations';
import { initialMessages } from '../data/messages';
import { currentUser, users } from '../data/users';
import type { Conversation, Message, User } from '../types/models';

type ChatState = {
  conversations: Conversation[];
  messages: Record<string, Message[]>;
};

type ChatAction =
  | { type: 'markRead'; conversationId: string }
  | { type: 'send'; message: Message }
  | { type: 'create'; conversationId: string; participantId: string };

function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case 'markRead':
      return {
        ...state,
        conversations: state.conversations.map(c =>
          c.id === action.conversationId ? { ...c, unread: 0 } : c,
        ),
      };
    case 'send': {
      const { conversationId } = action.message;
      const list = state.messages[conversationId] ?? [];
      return {
        ...state,
        messages: {
          ...state.messages,
          [conversationId]: [...list, action.message],
        },
      };
    }
    case 'create':
      if (state.conversations.some(c => c.id === action.conversationId)) {
        return state;
      }
      return {
        conversations: [
          ...state.conversations,
          {
            id: action.conversationId,
            participantId: action.participantId,
            unread: 0,
          },
        ],
        messages: { ...state.messages, [action.conversationId]: [] },
      };
  }
}

type ChatContextValue = {
  users: User[];
  conversations: Conversation[];
  messages: Record<string, Message[]>;
  totalUnread: number;
  getUser: (userId: string) => User | undefined;
  markRead: (conversationId: string) => void;
  sendMessage: (conversationId: string, text: string) => void;
  openWith: (userId: string) => string;
};

const ChatContext = createContext<ChatContextValue | null>(null);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(chatReducer, {
    conversations: initialConversations,
    messages: initialMessages,
  });

  const getUser = useCallback(
    (userId: string) => users.find(u => u.id === userId),
    [],
  );

  const markRead = useCallback((conversationId: string) => {
    dispatch({ type: 'markRead', conversationId });
  }, []);

  const sendMessage = useCallback((conversationId: string, text: string) => {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }
    dispatch({
      type: 'send',
      message: {
        id: `m-${Date.now()}`,
        conversationId,
        senderId: currentUser.id,
        text: trimmed,
        createdAt: new Date().toISOString(),
      },
    });
  }, []);

  const openWith = useCallback(
    (userId: string) => {
      const existing = state.conversations.find(
        c => c.participantId === userId,
      );
      if (existing) {
        return existing.id;
      }
      const conversationId = `c-${userId}`;
      dispatch({ type: 'create', conversationId, participantId: userId });
      return conversationId;
    },
    [state.conversations],
  );

  const totalUnread = useMemo(
    () => state.conversations.reduce((sum, c) => sum + c.unread, 0),
    [state.conversations],
  );

  const value = useMemo(
    () => ({
      users,
      conversations: state.conversations,
      messages: state.messages,
      totalUnread,
      getUser,
      markRead,
      sendMessage,
      openWith,
    }),
    [state, totalUnread, getUser, markRead, sendMessage, openWith],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat(): ChatContextValue {
  const value = useContext(ChatContext);
  if (!value) {
    throw new Error('useChat must be used inside ChatProvider');
  }
  return value;
}
