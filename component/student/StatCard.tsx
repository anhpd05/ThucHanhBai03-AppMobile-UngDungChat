import { StyleSheet, Text, View } from 'react-native';
import type { IconName } from './Icon';
import { Icon } from './Icon';
import { radius, shadowCard, spacing, typography } from './theme';

type StatCardProps = {
  icon: IconName;
  value: string;
  title: string;
  tint: string;
  tintSoft: string;
};

export function StatCard({ icon, value, title, tint, tintSoft }: StatCardProps) {
  return (
    <View style={styles.card}>
      <View style={[styles.iconCircle, { backgroundColor: tintSoft }]}>
        <Icon name={icon} size={18} color={tint} />
      </View>
      <Text style={[styles.value, { color: tint }]}>{value}</Text>
      <Text style={typography.caption} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: radius.md,
    padding: spacing.md,
    ...shadowCard,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: spacing.sm,
  },
});
