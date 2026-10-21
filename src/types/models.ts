import type { ImageSourcePropType } from 'react-native';

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: ImageSourcePropType;
  isOnline: boolean;
  lastSeen: string;
};

export type Message = {
  id: string;
  conversationId: string;
  senderId: string;
  text: string;
  createdAt: string;
};

export type Conversation = {
  id: string;
  participantId: string;
  unread: number;
};

export type AppNotification = {
  id: string;
  type: 'message' | 'friend' | 'system';
  content: string;
  createdAt: string;
  read: boolean;
};
