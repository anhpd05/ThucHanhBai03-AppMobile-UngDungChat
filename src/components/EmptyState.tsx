import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '../theme';
import { Icon, type IconName } from './Icon';

type EmptyStateProps = {
  icon: IconName;
  title: string;
  message: string;
};

export function EmptyState({ icon, title, message }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Icon name={icon} size={32} color={colors.primary} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxl,
    paddingHorizontal: spacing.xl,
  },
  circle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...typography.name,
    marginTop: spacing.lg,
  },
  message: {
    ...typography.bodyMuted,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
});
