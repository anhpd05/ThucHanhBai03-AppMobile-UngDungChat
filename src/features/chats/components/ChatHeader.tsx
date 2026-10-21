import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from '../../../components/Avatar';
import { Icon } from '../../../components/Icon';
import { colors, spacing, typography } from '../../../theme';
import type { User } from '../../../types/models';
import { formatLastSeen } from '../../../utils/formatTime';

type ChatHeaderProps = {
  user: User;
  onBack: () => void;
};

export function ChatHeader({ user, onBack }: ChatHeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        accessibilityLabel="Quay lại"
        hitSlop={8}
        onPress={onBack}
      >
        <Icon name="back" size={24} />
      </TouchableOpacity>
      <Avatar source={user.avatar} size={40} online={user.isOnline} />
      <View style={styles.texts}>
        <Text style={typography.name} numberOfLines={1}>
          {user.name}
        </Text>
        {user.isOnline ? (
          <Text style={[typography.caption, styles.online]}>
            Đang hoạt động
          </Text>
        ) : (
          <Text style={typography.caption}>
            {formatLastSeen(user.lastSeen)}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    gap: spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  texts: {
    flex: 1,
  },
  online: {
    color: colors.online,
  },
});
