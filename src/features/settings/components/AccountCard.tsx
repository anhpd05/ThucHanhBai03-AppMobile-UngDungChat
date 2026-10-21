import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from '../../../components/Avatar';
import {
  colors,
  radius,
  shadowCard,
  spacing,
  typography,
} from '../../../theme';
import type { User } from '../../../types/models';

type AccountCardProps = {
  user: User;
};

export function AccountCard({ user }: AccountCardProps) {
  return (
    <View style={styles.card}>
      <Avatar source={user.avatar} size={80} online={user.isOnline} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={typography.bodyMuted}>{`@${user.username}`}</Text>
      <Text style={typography.bodyMuted}>{user.email}</Text>
      <View
        style={[
          styles.pill,
          {
            backgroundColor: user.isOnline
              ? colors.primarySoft
              : colors.background,
          },
        ]}
      >
        <Text
          style={[
            styles.pillText,
            { color: user.isOnline ? colors.online : colors.textMuted },
          ]}
        >
          {user.isOnline ? 'Đang hoạt động' : 'Đang ẩn trạng thái'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.xl,
    alignItems: 'center',
    marginHorizontal: spacing.lg,
    ...shadowCard,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginTop: spacing.md,
  },
  pill: {
    marginTop: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
    borderRadius: radius.pill,
  },
  pillText: {
    ...typography.caption,
  },
});
