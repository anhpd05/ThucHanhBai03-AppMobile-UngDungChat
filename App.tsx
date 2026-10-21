/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './component/auth/LoginScreen';
import RegisterScreen from './component/auth/RegisterScreen';
import { StudentHomeScreen } from './component/student';

type Screen = 'login' | 'register' | 'home';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';
//   const [screen, setScreen] = useState<Screen>('login');

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <View style={styles.container}>
//         {screen === 'login' && (
//           <LoginScreen
//             onLoginSuccess={() => setScreen('home')}
//             onGoToRegister={() => setScreen('register')}
//           />
//         )}
//         {screen === 'register' && (
//           <RegisterScreen
//             onRegisterSuccess={() => setScreen('home')}
//             onGoToLogin={() => setScreen('login')}
//           />
//         )}
//         {screen === 'home' && (
//           <HomeScreen onLogout={() => setScreen('login')} />
//         )}
//       </View>
//     </SafeAreaProvider>
//   );
// }

function App() {
  return (
    <SafeAreaProvider>
      <StudentHomeScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
