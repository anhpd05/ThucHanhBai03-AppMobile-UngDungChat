import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '../../../theme';
import type { Message } from '../../../types/models';
import { formatClock } from '../../../utils/formatTime';

type MessageBubbleProps = {
  message: Message;
  isMine: boolean;
};

export function MessageBubble({ message, isMine }: MessageBubbleProps) {
  return (
    <View style={[styles.bubble, isMine ? styles.mine : styles.other]}>
      <Text style={[typography.body, isMine && styles.mineText]}>
        {message.text}
      </Text>
      <Text style={[styles.time, isMine && styles.mineMeta]}>
        {formatClock(message.createdAt)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    maxWidth: '78%',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.lg,
  },
  mine: {
    alignSelf: 'flex-end',
    backgroundColor: colors.bubbleMine,
    borderBottomRightRadius: radius.sm,
  },
  other: {
    alignSelf: 'flex-start',
    backgroundColor: colors.bubbleOther,
    borderWidth: 1,
    borderColor: colors.border,
    borderBottomLeftRadius: radius.sm,
  },
  mineText: {
    color: colors.bubbleMineText,
  },
  time: {
    fontSize: 11,
    alignSelf: 'flex-end',
    marginTop: 2,
    color: colors.textMuted,
  },
  mineMeta: {
    color: colors.bubbleMineMeta,
  },
});
