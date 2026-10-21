import type { Conversation } from '../types/models';

export const initialConversations: Conversation[] = [
  { id: 'c1', participantId: 'u1', unread: 2 },
  { id: 'c2', participantId: 'u2', unread: 0 },
  { id: 'c3', participantId: 'u3', unread: 1 },
  { id: 'c4', participantId: 'u4', unread: 0 },
  { id: 'c5', participantId: 'u5', unread: 3 },
  { id: 'c6', participantId: 'u7', unread: 0 },
  { id: 'c7', participantId: 'u9', unread: 0 },
];
