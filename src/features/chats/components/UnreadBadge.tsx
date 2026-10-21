import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme';

type UnreadBadgeProps = {
  count: number;
};

export function UnreadBadge({ count }: UnreadBadgeProps) {
  if (count <= 0) {
    return null;
  }
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{count > 99 ? '99+' : String(count)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    paddingHorizontal: 6,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
  },
});
