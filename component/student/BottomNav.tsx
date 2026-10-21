import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { IconName } from './Icon';
import { Icon } from './Icon';
import { colors, radius, spacing, typography } from './theme';

export type NavKey = 'home' | 'courses' | 'assignments' | 'profile';

type NavItem = {
  key: NavKey;
  icon: IconName;
  label: string;
};

const items: NavItem[] = [
  { key: 'home', icon: 'home', label: 'Trang chủ' },
  { key: 'courses', icon: 'book', label: 'Môn học' },
  { key: 'assignments', icon: 'clipboard', label: 'Bài tập' },
  { key: 'profile', icon: 'user', label: 'Cá nhân' },
];

type BottomNavProps = {
  active: NavKey;
  onChange: (key: NavKey) => void;
};

export function BottomNav({ active, onChange }: BottomNavProps) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, spacing.sm) }]}>
      {items.map(item => {
        const isActive = item.key === active;
        return (
          <Pressable
            key={item.key}
            style={styles.item}
            onPress={() => onChange(item.key)}
          >
            <View style={isActive ? styles.iconPillActive : undefined}>
              <Icon
                name={item.icon}
                size={20}
                color={isActive ? colors.primary : colors.textMuted}
              />
            </View>
            <Text
              style={
                isActive
                  ? styles.labelActive
                  : typography.caption
              }
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: spacing.sm,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    gap: spacing.xs,
  },
  iconPillActive: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill,
    backgroundColor: colors.primarySoft,
  },
  labelActive: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },
});
