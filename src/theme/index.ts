export const colors = {
  primary: '#0B7A7C',
  primarySoft: '#E3F4F4',
  background: '#F6F4EF',
  card: '#FFFFFF',
  text: '#111827',
  textMuted: '#6B7280',
  border: '#E5E7EB',
  online: '#22C55E',
  offline: '#9CA3AF',
  danger: '#EF4444',
  dangerSoft: '#FEE2E2',
  bubbleMine: '#0B7A7C',
  bubbleMineText: '#FFFFFF',
  bubbleMineMeta: '#CDEBEB',
  bubbleOther: '#FFFFFF',
  white: '#FFFFFF',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 999,
};

export const typography = {
  appTitle: { fontSize: 28, fontWeight: '700' as const, color: colors.text },
  screenTitle: { fontSize: 22, fontWeight: '700' as const, color: colors.text },
  name: { fontSize: 16, fontWeight: '600' as const, color: colors.text },
  body: { fontSize: 15, fontWeight: '400' as const, color: colors.text },
  bodyMuted: {
    fontSize: 14,
    fontWeight: '400' as const,
    color: colors.textMuted,
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
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 3 },
  elevation: 2,
};
