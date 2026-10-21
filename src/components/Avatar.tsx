import {
  Image,
  StyleSheet,
  View,
  type ImageSourcePropType,
} from 'react-native';
import { colors } from '../theme';

type AvatarProps = {
  source: ImageSourcePropType;
  size?: number;
  online?: boolean;
};

export function Avatar({ source, size = 48, online }: AvatarProps) {
  const dot = Math.max(10, Math.round(size * 0.26));

  return (
    <View style={{ width: size, height: size }}>
      <Image
        source={source}
        style={[
          styles.image,
          { width: size, height: size, borderRadius: size / 2 },
        ]}
      />
      {online !== undefined && (
        <View
          style={[
            styles.dot,
            {
              width: dot,
              height: dot,
              borderRadius: dot / 2,
              backgroundColor: online ? colors.online : colors.offline,
            },
          ]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: colors.border,
  },
  dot: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderWidth: 2,
    borderColor: colors.white,
  },
});
