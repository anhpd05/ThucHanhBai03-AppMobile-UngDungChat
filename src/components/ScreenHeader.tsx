import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { spacing, typography } from '../theme';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  right?: ReactNode;
};

export function ScreenHeader({ title, subtitle, right }: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text style={typography.screenTitle}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
  },
  texts: {
    flex: 1,
  },
  subtitle: {
    ...typography.caption,
    marginTop: 2,
  },
});
