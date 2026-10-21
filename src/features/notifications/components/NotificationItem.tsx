import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon, type IconName } from '../../../components/Icon';
import { colors, spacing, typography } from '../../../theme';
import type { AppNotification } from '../../../types/models';
import { formatTime } from '../../../utils/formatTime';

const TYPE_ICON: Record<AppNotification['type'], IconName> = {
  message: 'chat',
  friend: 'userPlus',
  system: 'info',
};

type NotificationItemProps = {
  notification: AppNotification;
  onPress: () => void;
};

export function NotificationItem({
  notification,
  onPress,
}: NotificationItemProps) {
  const { read } = notification;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.row,
        { backgroundColor: read ? colors.card : colors.primarySoft },
      ]}
      onPress={onPress}
    >
      <View
        style={[
          styles.iconCircle,
          { backgroundColor: read ? colors.background : colors.card },
        ]}
      >
        <Icon
          name={TYPE_ICON[notification.type]}
          size={20}
          color={colors.primary}
        />
      </View>
      <View style={styles.body}>
        <Text
          numberOfLines={2}
          style={read ? typography.bodyMuted : styles.contentUnread}
        >
          {notification.content}
        </Text>
        <Text style={styles.meta}>
          {`${formatTime(notification.createdAt)} · ${
            read ? 'Đã đọc' : 'Chưa đọc'
          }`}
        </Text>
      </View>
      {!read && <View style={styles.dot} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.md,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
  },
  contentUnread: {
    ...typography.body,
    fontWeight: '600',
  },
  meta: {
    ...typography.caption,
    marginTop: spacing.xs,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
});
