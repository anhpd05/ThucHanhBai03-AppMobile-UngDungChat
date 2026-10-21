import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from '../../../components/Avatar';
import { colors, spacing, typography } from '../../../theme';
import type { Message, User } from '../../../types/models';
import { formatTime } from '../../../utils/formatTime';
import { UnreadBadge } from './UnreadBadge';

type ConversationItemProps = {
  user: User;
  lastMessage: Message;
  unread: number;
  isMine: boolean;
  onPress: () => void;
};

export function ConversationItem({
  user,
  lastMessage,
  unread,
  isMine,
  onPress,
}: ConversationItemProps) {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={onPress}>
      <Avatar source={user.avatar} size={52} online={user.isOnline} />
      <View style={styles.middle}>
        <Text
          style={[styles.name, unread > 0 && styles.nameUnread]}
          numberOfLines={1}
        >
          {user.name}
        </Text>
        <Text
          style={[styles.message, unread > 0 && styles.messageUnread]}
          numberOfLines={1}
        >
          {(isMine ? 'Bạn: ' : '') + lastMessage.text}
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={[styles.time, unread > 0 && styles.timeUnread]}>
          {formatTime(lastMessage.createdAt)}
        </Text>
        <UnreadBadge count={unread} />
      </View>
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
    backgroundColor: colors.card,
  },
  middle: {
    flex: 1,
  },
  name: {
    ...typography.name,
  },
  nameUnread: {
    fontWeight: '700',
  },
  message: {
    ...typography.bodyMuted,
    marginTop: 2,
  },
  messageUnread: {
    color: colors.text,
    fontWeight: '600',
  },
  right: {
    alignItems: 'flex-end',
    gap: 6,
  },
  time: {
    ...typography.caption,
  },
  timeUnread: {
    color: colors.primary,
  },
});
