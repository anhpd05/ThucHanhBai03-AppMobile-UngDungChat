import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Course } from './data';
import { Icon } from './Icon';
import { ProgressBar } from './ProgressBar';
import { colors, radius, shadowCard, spacing, typography } from './theme';

type CourseItemProps = {
  course: Course;
  onPress?: (course: Course) => void;
};

export function CourseItem({ course, onPress }: CourseItemProps) {
  const isDone = course.progress >= 100;

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      android_ripple={{ color: course.tintSoft }}
      onPress={() => onPress?.(course)}
    >
      <View style={styles.row1}>
        <View style={[styles.iconBox, { backgroundColor: course.tintSoft }]}>
          <Icon name={course.icon} size={22} color={course.tint} />
        </View>
        <View style={styles.info}>
          <Text style={typography.courseName} numberOfLines={2}>
            {course.name}
          </Text>
          <Text style={typography.caption}>
            {course.completedLessons}/{course.lessons} bài học · {course.credits} tín chỉ
          </Text>
          <Text style={typography.caption} numberOfLines={1}>
            GV: {course.instructor}
          </Text>
        </View>
      </View>
      <View style={styles.row2}>
        <ProgressBar progress={course.progress} color={course.tint} />
      </View>
      <View style={styles.row3}>
        {isDone ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Đã hoàn thành</Text>
          </View>
        ) : (
          <View />
        )}
        <Text style={[typography.caption, { color: course.tint }]}>
          {course.progress}% hoàn thành
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadowCard,
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    marginLeft: spacing.md,
  },
  row2: {
    marginTop: spacing.md,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  badge: {
    backgroundColor: colors.successSoft,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill,
  },
  badgeText: {
    color: colors.success,
    fontSize: 11,
    fontWeight: '700',
  },
});
