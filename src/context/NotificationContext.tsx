import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { initialNotifications } from '../data/notifications';
import type { AppNotification } from '../types/models';

type NotificationContextValue = {
  notifications: AppNotification[];
  unreadCount: number;
  enabled: boolean;
  markRead: (id: string) => void;
  markAllRead: () => void;
  setEnabled: (enabled: boolean) => void;
};

const NotificationContext = createContext<NotificationContextValue | null>(
  null,
);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [enabled, setEnabled] = useState(true);

  const markRead = useCallback((id: string) => {
    setNotifications(list =>
      list.map(n => (n.id === id ? { ...n, read: true } : n)),
    );
  }, []);

  const markAllRead = useCallback(() => {
    setNotifications(list => list.map(n => ({ ...n, read: true })));
  }, []);

  const unreadCount = useMemo(
    () => notifications.filter(n => !n.read).length,
    [notifications],
  );

  const value = useMemo(
    () => ({
      notifications,
      unreadCount,
      enabled,
      markRead,
      markAllRead,
      setEnabled,
    }),
    [notifications, unreadCount, enabled, markRead, markAllRead],
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications(): NotificationContextValue {
  const value = useContext(NotificationContext);
  if (!value) {
    throw new Error(
      'useNotifications must be used inside NotificationProvider',
    );
  }
  return value;
}
