import type { IconName } from './Icon';
import { colors } from './theme';

export type Student = {
  name: string;
  studentId: string;
  unreadNotifications: number;
};

export type Stat = {
  id: string;
  icon: IconName;
  value: string;
  title: string;
  tint: string;
  tintSoft: string;
};

export type Course = {
  id: string;
  name: string;
  icon: IconName;
  instructor: string;
  credits: number;
  lessons: number;
  completedLessons: number;
  progress: number;
  tint: string;
  tintSoft: string;
};

export const student: Student = {
  name: 'Phạm Đức Anh',
  studentId: 'B23DCCC014',
  unreadNotifications: 3,
};

export const courses: Course[] = [
  {
    id: 'c1',
    name: 'Phát triển ứng dụng di động',
    icon: 'phone',
    instructor: 'ThS. Vũ Văn Thương',
    credits: 3,
    lessons: 24,
    completedLessons: 18,
    progress: 75,
    tint: colors.primary,
    tintSoft: colors.primarySoft,
  },
  {
    id: 'c2',
    name: 'Cơ sở dữ liệu',
    icon: 'database',
    instructor: 'TS. Phan Lý Huỳnh',
    credits: 3,
    lessons: 18,
    completedLessons: 18,
    progress: 100,
    tint: colors.success,
    tintSoft: colors.successSoft,
  },
  {
    id: 'c3',
    name: 'Lập trình Web',
    icon: 'globe',
    instructor: 'ThS. Trần Quang Đại',
    credits: 3,
    lessons: 20,
    completedLessons: 9,
    progress: 45,
    tint: colors.warning,
    tintSoft: colors.warningSoft,
  },
  {
    id: 'c4',
    name: 'Cấu trúc dữ liệu & Giải thuật',
    icon: 'code',
    instructor: 'TS. Phan Lý Huỳnh',
    credits: 4,
    lessons: 30,
    completedLessons: 18,
    progress: 60,
    tint: colors.primary,
    tintSoft: colors.primarySoft,
  },
  {
    id: 'c5',
    name: 'An toàn thông tin',
    icon: 'shield',
    instructor: 'ThS. Đỗ Quang Huy',
    credits: 2,
    lessons: 16,
    completedLessons: 0,
    progress: 0,
    tint: colors.warning,
    tintSoft: colors.warningSoft,
  },
];

export const stats: Stat[] = [
  {
    id: 'courses',
    icon: 'book',
    value: String(courses.length),
    title: 'Môn học',
    tint: colors.primary,
    tintSoft: colors.primarySoft,
  },
  {
    id: 'assignments',
    icon: 'clipboard',
    value: '12',
    title: 'Bài tập',
    tint: colors.warning,
    tintSoft: colors.warningSoft,
  },
  {
    id: 'done',
    icon: 'check',
    value: String(courses.filter(course => course.progress === 100).length),
    title: 'Đã hoàn thành',
    tint: colors.success,
    tintSoft: colors.successSoft,
  },
];
