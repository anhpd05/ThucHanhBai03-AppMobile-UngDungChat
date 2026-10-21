export const colors = {
  background: '#F4F6FB',
  card: '#FFFFFF',
  primary: '#4C6FFF',
  primarySoft: '#E7EDFF',
  success: '#16A34A',
  successSoft: '#DCFCE7',
  warning: '#F59E0B',
  warningSoft: '#FEF3C7',
  text: '#10172A',
  textMuted: '#6B7280',
  border: '#E5E7EB',
  track: '#EEF1F6',
  overlay: 'rgba(16, 23, 42, 0.45)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
};

export const radius = {
  sm: 10,
  md: 16,
  lg: 20,
  pill: 999,
};

export const typography = {
  title: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700' as const,
    color: colors.text,
  },
  courseName: {
    fontSize: 15,
    fontWeight: '700' as const,
    color: colors.text,
  },
  body: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.text,
  },
  caption: {
    fontSize: 12,
    fontWeight: '500' as const,
    color: colors.textMuted,
  },
};

export const shadowCard = {
  shadowColor: '#0F172A',
  shadowOpacity: 0.06,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: 4 },
  elevation: 3,
};
