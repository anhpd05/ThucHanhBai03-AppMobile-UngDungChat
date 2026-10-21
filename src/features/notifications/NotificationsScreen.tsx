import { useMemo } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EmptyState } from '../../components/EmptyState';
import { Icon } from '../../components/Icon';
import { ScreenHeader } from '../../components/ScreenHeader';
import { useNotifications } from '../../context/NotificationContext';
import { colors } from '../../theme';
import { NotificationItem } from './components/NotificationItem';

function Separator() {
  return <View style={styles.separator} />;
}

export function NotificationsScreen() {
  const { notifications, unreadCount, markRead, markAllRead } =
    useNotifications();

  const sorted = useMemo(
    () =>
      [...notifications].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    [notifications],
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader
        title="Thông báo"
        subtitle={
          unreadCount > 0
            ? `${unreadCount} thông báo chưa đọc`
            : 'Không có thông báo mới'
        }
        right={
          <TouchableOpacity
            disabled={unreadCount === 0}
            onPress={markAllRead}
            style={[styles.markAll, unreadCount === 0 && styles.disabled]}
          >
            <Icon name="check" size={18} color={colors.primary} />
            <Text style={styles.markAllText}>Đọc tất cả</Text>
          </TouchableOpacity>
        }
      />
      <FlatList
        data={sorted}
        keyExtractor={n => n.id}
        renderItem={({ item }) => (
          <NotificationItem
            notification={item}
            onPress={() => markRead(item.id)}
          />
        )}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={
          <EmptyState
            icon="bell"
            title="Chưa có thông báo"
            message="Thông báo mới sẽ xuất hiện ở đây."
          />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
  },
  markAll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  disabled: {
    opacity: 0.4,
  },
  markAllText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});
