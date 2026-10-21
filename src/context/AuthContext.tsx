import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { currentUser, demoAccount } from '../data/users';
import type { User } from '../types/models';

type AuthContextValue = {
  user: User | null;
  demoAccount: { username: string; password: string };
  login: (username: string, password: string) => string | null;
  logout: () => void;
  setOnline: (isOnline: boolean) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((username: string, password: string) => {
    if (
      username.trim() !== demoAccount.username ||
      password !== demoAccount.password
    ) {
      return 'Sai tài khoản hoặc mật khẩu';
    }
    setUser({ ...currentUser });
    return null;
  }, []);

  const logout = useCallback(() => setUser(null), []);

  const setOnline = useCallback((isOnline: boolean) => {
    setUser(prev => (prev ? { ...prev, isOnline } : prev));
  }, []);

  const value = useMemo(
    () => ({ user, demoAccount, login, logout, setOnline }),
    [user, login, logout, setOnline],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return value;
}
