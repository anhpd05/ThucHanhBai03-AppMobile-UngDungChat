import Svg, { Path } from 'react-native-svg';
import { colors } from './theme';

export type IconName =
  | 'bell'
  | 'search'
  | 'book'
  | 'clipboard'
  | 'check'
  | 'phone'
  | 'database'
  | 'globe'
  | 'code'
  | 'shield'
  | 'home'
  | 'user';

const PATHS: Record<IconName, string[]> = {
  bell: [
    'M18 8.5a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9',
    'M13.8 21.2a2 2 0 0 1-3.6 0',
  ],
  search: ['M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z', 'M21 21l-4.4-4.4'],
  book: [
    'M4 19.5A2.5 2.5 0 0 1 6.5 17H20',
    'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z',
  ],
  clipboard: [
    'M9 4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2',
    'M10 2h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z',
    'M9 12h6',
    'M9 16h4',
  ],
  check: [
    'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z',
    'M8.2 12.3l2.6 2.6 5-5.2',
  ],
  phone: [
    'M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z',
    'M10.5 18.6h3',
  ],
  database: [
    'M12 7.2c4.4 0 8-1.2 8-2.6S16.4 2 12 2 4 3.2 4 4.6 7.6 7.2 12 7.2z',
    'M20 4.6v14.8c0 1.4-3.6 2.6-8 2.6s-8-1.2-8-2.6V4.6',
    'M20 12c0 1.4-3.6 2.6-8 2.6S4 13.4 4 12',
  ],
  globe: [
    'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z',
    'M3.4 9.2h17.2',
    'M3.4 14.8h17.2',
    'M12 3c2.3 2.5 3.4 5.5 3.4 9s-1.1 6.5-3.4 9c-2.3-2.5-3.4-5.5-3.4-9S9.7 5.5 12 3z',
  ],
  code: ['M9 17.5L3.5 12 9 6.5', 'M15 6.5L20.5 12 15 17.5'],
  shield: [
    'M12 2.4l8 3v6.2c0 4.9-3.4 8.5-8 10-4.6-1.5-8-5.1-8-10V5.4l8-3z',
    'M8.8 12.2l2.3 2.3 4.1-4.3',
  ],
  home: [
    'M3 11.3L12 3.6l9 7.7',
    'M5.9 9.9V20.4h12.2V9.9',
    'M9.9 20.4v-4.8h4.2v4.8',
  ],
  user: [
    'M12 12.2a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6z',
    'M4.4 21c0-3.7 3.4-6.2 7.6-6.2s7.6 2.5 7.6 6.2',
  ],
};

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
};

export function Icon({ name, size = 20, color = colors.text }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size}>
      {PATHS[name].map(d => (
        <Path
          key={d}
          d={d}
          stroke={color}
          strokeWidth={1.9}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </Svg>
  );
}
