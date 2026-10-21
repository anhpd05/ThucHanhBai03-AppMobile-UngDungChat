import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, type IconName } from '../components/Icon';
import { useChat } from '../context/ChatContext';
import { useNotifications } from '../context/NotificationContext';
import { HomeScreen } from '../features/chats/HomeScreen';
import { ContactsScreen } from '../features/contacts/ContactsScreen';
import { NotificationsScreen } from '../features/notifications/NotificationsScreen';
import { SettingsScreen } from '../features/settings/SettingsScreen';
import { colors } from '../theme';
import type { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

function renderTabIcon(name: IconName) {
  return ({ color, size }: { color: string; size: number }) => (
    <Icon name={name} color={color} size={size} />
  );
}

function badge(count: number) {
  return count > 0 ? count : undefined;
}

export function MainTabs() {
  const { totalUnread } = useChat();
  const { unreadCount, enabled } = useNotifications();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
        tabBarBadgeStyle: { backgroundColor: colors.danger, fontSize: 11 },
      }}
    >
      <Tab.Screen
        name="Chats"
        component={HomeScreen}
        options={{
          title: 'Tin nhắn',
          tabBarIcon: renderTabIcon('chat'),
          tabBarBadge: badge(totalUnread),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{ title: 'Danh bạ', tabBarIcon: renderTabIcon('users') }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: 'Thông báo',
          tabBarIcon: renderTabIcon('bell'),
          tabBarBadge: enabled ? badge(unreadCount) : undefined,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Cài đặt', tabBarIcon: renderTabIcon('settings') }}
      />
    </Tab.Navigator>
  );
}
