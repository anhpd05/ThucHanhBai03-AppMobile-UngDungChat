import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from '../../../components/Avatar';
import { Icon } from '../../../components/Icon';
import { colors, spacing, typography } from '../../../theme';
import type { User } from '../../../types/models';
import { formatLastSeen } from '../../../utils/formatTime';

type ContactItemProps = {
  user: User;
  onPress: () => void;
};

export function ContactItem({ user, onPress }: ContactItemProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.row} onPress={onPress}>
      <Avatar source={user.avatar} size={48} online={user.isOnline} />
      <View style={styles.body}>
        <Text style={typography.name}>{user.name}</Text>
        <Text
          style={[styles.status, user.isOnline && { color: colors.online }]}
        >
          {user.isOnline ? 'Đang hoạt động' : formatLastSeen(user.lastSeen)}
        </Text>
      </View>
      <View style={styles.action}>
        <Icon name="chat" size={18} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.md,
  },
  body: {
    flex: 1,
  },
  status: {
    ...typography.caption,
    marginTop: 2,
  },
  action: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
