import { StyleSheet, Switch, Text, View } from 'react-native';
import { Icon, type IconName } from '../../../components/Icon';
import { colors, spacing, typography } from '../../../theme';

type SettingSwitchRowProps = {
  icon: IconName;
  label: string;
  description: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export function SettingSwitchRow({
  icon,
  label,
  description,
  value,
  onValueChange,
}: SettingSwitchRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.iconCircle}>
        <Icon name={icon} size={18} color={colors.primary} />
      </View>
      <View style={styles.body}>
        <Text style={typography.name}>{label}</Text>
        <Text style={typography.caption}>{description}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: colors.border, true: colors.primary }}
        thumbColor={colors.white}
        accessibilityLabel={`Công tắc ${label}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
    gap: spacing.md,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
  },
});
