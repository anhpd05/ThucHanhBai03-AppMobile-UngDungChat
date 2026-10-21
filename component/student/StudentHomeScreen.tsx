import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomNav, type NavKey } from './BottomNav';
import { CourseItem } from './CourseItem';
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { StatCard } from './StatCard';
import { courses, stats, student } from './data';
import { colors, spacing, typography } from './theme';

export function StudentHomeScreen() {
  const [keyword, setKeyword] = useState('');
  const [tab, setTab] = useState<NavKey>('home');

  const filteredCourses = useMemo(() => {
    const needle = keyword.trim().toLowerCase();
    if (!needle) {
      return courses;
    }
    return courses.filter(course =>
      course.name.toLowerCase().includes(needle),
    );
  }, [keyword]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={filteredCourses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CourseItem course={item} />}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View>
            <Header
              name={student.name}
              studentId={student.studentId}
              unreadNotifications={student.unreadNotifications}
            />
            <View style={styles.statsRow}>
              {stats.map(stat => (
                <StatCard
                  key={stat.id}
                  icon={stat.icon}
                  value={stat.value}
                  title={stat.title}
                  tint={stat.tint}
                  tintSoft={stat.tintSoft}
                />
              ))}
            </View>
            <View style={styles.searchWrap}>
              <SearchBar value={keyword} onChangeText={setKeyword} />
            </View>
            <View style={styles.sectionTitleRow}>
              <Text style={typography.sectionTitle}>Môn học của tôi</Text>
              <Text style={typography.caption}>
                {filteredCourses.length} môn
              </Text>
            </View>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Không tìm thấy môn học phù hợp.
          </Text>
        }
      />
      <BottomNav active={tab} onChange={setTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  searchWrap: {
    marginTop: spacing.lg,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
  emptyText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textMuted,
    textAlign: 'center',
    paddingVertical: spacing.xl,
  },
});
