// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { Weather } from '../weather';
import { WeatherEnd } from '../weather/WeatherFlowHour';

// type HomeScreenProps = {
//   onLogout: () => void;
// };

// function HomeScreen({ onLogout }: HomeScreenProps) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Trang chủ</Text>
//       <Text style={styles.subtitle}>Bạn đã đăng nhập thành công!</Text>

//       <TouchableOpacity style={styles.button} onPress={onLogout}>
//         <Text style={styles.buttonText}>Đăng xuất</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 24,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 24,
//   },
//   button: {
//     backgroundColor: '#333',
//     borderRadius: 4,
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default HomeScreen;
export function HomeScreen() {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/index').images.bgGifStrom}
    >
      <View style={styles.header}>
        <Weather />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.keoScroll}
        contentContainerStyle={styles.keoScrollContent}
      >
        <View style={styles.khungItem}>
          <Weather />
        </View>
        <View style={styles.khungItem}>
          <Weather />
        </View>
        <View style={styles.khungItem}>
          <Weather />
        </View>
        <View style={styles.khungItem}>
          <Weather />
        </View>
        <View style={styles.khungItem}>
          <Weather />
        </View>
        <View style={styles.khungItem}>
          <Weather />
        </View>
        <View style={styles.khungItem}>
          <Weather />
        </View>
        <View style={styles.khungItem}>
          <Weather />
        </View>
      </ScrollView>

      <ScrollView
        style={styles.danhSach}
        contentContainerStyle={styles.danhSachContent}
      >
        <WeatherEnd />
        <WeatherEnd />
        <WeatherEnd />
        <WeatherEnd />
        <WeatherEnd />
        <WeatherEnd />
        <WeatherEnd />
        <WeatherEnd />
        <WeatherEnd />
        <WeatherEnd />
        <WeatherEnd />
        <WeatherEnd />
        <WeatherEnd />
        <WeatherEnd />
        <WeatherEnd />
        <WeatherEnd />
        <WeatherEnd />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  keoScroll: {
    flexGrow: 0,
  },
  keoScrollContent: {
    gap: 10,
    alignItems: 'flex-start',
    paddingBottom: 12,
  },
  khungItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  danhSach: {
    flex: 1,
  },
  danhSachContent: {
    gap: 8,
    paddingBottom: 12,
  },
});
