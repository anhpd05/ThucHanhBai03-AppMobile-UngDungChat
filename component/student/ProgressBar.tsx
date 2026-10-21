import { StyleSheet, View } from 'react-native';
import { colors, radius } from './theme';

type ProgressBarProps = {
  progress: number;
  color: string;
};

export function ProgressBar({ progress, color }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, progress));
  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${clamped}%`, backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 8,
    borderRadius: radius.pill,
    backgroundColor: colors.track,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
});
