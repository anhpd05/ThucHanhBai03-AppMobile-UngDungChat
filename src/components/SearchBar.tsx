import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { colors, radius, spacing } from '../theme';
import { Icon } from './Icon';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
};

export function SearchBar({
  value,
  onChangeText,
  placeholder,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Icon name="search" size={18} color={colors.textMuted} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        returnKeyType="search"
        autoCorrect={false}
        accessibilityLabel="Ô tìm kiếm"
      />
      {value !== '' && (
        <TouchableOpacity
          accessibilityLabel="Xoá tìm kiếm"
          hitSlop={8}
          onPress={() => onChangeText('')}
        >
          <Icon name="close" size={18} color={colors.textMuted} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
    height: 46,
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
    padding: 0,
  },
});
