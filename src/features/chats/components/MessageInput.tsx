import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from '../../../components/Icon';
import { colors, radius, spacing } from '../../../theme';

type MessageInputProps = {
  onSend: (text: string) => void;
};

export function MessageInput({ onSend }: MessageInputProps) {
  const [text, setText] = useState('');
  const canSend = text.trim().length > 0;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        multiline
        placeholder="Nhập tin nhắn..."
        placeholderTextColor={colors.textMuted}
        accessibilityLabel="Ô nhập tin nhắn"
      />
      <TouchableOpacity
        style={[
          styles.send,
          { backgroundColor: canSend ? colors.primary : colors.border },
        ]}
        disabled={!canSend}
        accessibilityLabel="Gửi"
        onPress={() => {
          onSend(text);
          setText('');
        }}
      >
        <Icon name="send" size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: colors.card,
    padding: spacing.sm,
    gap: spacing.sm,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  input: {
    flex: 1,
    maxHeight: 120,
    minHeight: 44,
    backgroundColor: colors.background,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    fontSize: 15,
    color: colors.text,
  },
  send: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
