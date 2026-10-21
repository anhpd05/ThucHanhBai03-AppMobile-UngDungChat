import { useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  type TextInputInstance,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from '../../components/Icon';
import { useAuth } from '../../context/AuthContext';
import { colors, spacing, typography } from '../../theme';

export function LoginScreen() {
  const { login, demoAccount } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');
  const passwordRef = useRef<TextInputInstance>(null);

  const handleLogin = () => {
    setFormError('');
    const nextUsernameError = username.trim() ? '' : 'Vui lòng nhập tài khoản';
    const nextPasswordError = password ? '' : 'Vui lòng nhập mật khẩu';
    setUsernameError(nextUsernameError);
    setPasswordError(nextPasswordError);
    if (nextUsernameError || nextPasswordError) {
      return;
    }
    const error = login(username, password);
    if (error !== null) {
      setFormError(error);
    }
  };

  const onChangeUsername = (text: string) => {
    setUsername(text);
    setUsernameError('');
    setFormError('');
  };

  const onChangePassword = (text: string) => {
    setPassword(text);
    setPasswordError('');
    setFormError('');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <KeyboardAvoidingView style={styles.flex} behavior="padding">
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.hero}>
            <View style={styles.bubbleBig}>
              <Icon name="chat" size={30} color={colors.primary} />
            </View>
            <Text style={styles.title}>ChatApp</Text>
            <Text style={styles.subtitle}>
              Nhắn tin nhanh, gọn, không quảng cáo
            </Text>
          </View>

          <View style={styles.sheet}>
            <Text style={styles.sheetTitle}>Đăng nhập</Text>

            <Text style={styles.label}>Tài khoản</Text>
            <View
              style={[
                styles.inputRow,
                usernameError ? styles.inputError : null,
              ]}
            >
              <Icon name="user" size={20} color={colors.textMuted} />
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={onChangeUsername}
                placeholder="Nhập tài khoản"
                placeholderTextColor={colors.textMuted}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
                accessibilityLabel="Ô tài khoản"
              />
            </View>
            {usernameError !== '' && (
              <Text style={styles.error}>{usernameError}</Text>
            )}

            <Text style={[styles.label, styles.labelSpaced]}>Mật khẩu</Text>
            <View
              style={[
                styles.inputRow,
                passwordError ? styles.inputError : null,
              ]}
            >
              <Icon name="lock" size={20} color={colors.textMuted} />
              <TextInput
                ref={passwordRef}
                style={styles.input}
                value={password}
                onChangeText={onChangePassword}
                placeholder="Nhập mật khẩu"
                placeholderTextColor={colors.textMuted}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                onSubmitEditing={handleLogin}
                accessibilityLabel="Ô mật khẩu"
              />
              <TouchableOpacity
                accessibilityLabel={
                  showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'
                }
                hitSlop={8}
                onPress={() => setShowPassword(prev => !prev)}
              >
                <Icon
                  name={showPassword ? 'eye' : 'eyeOff'}
                  size={20}
                  color={colors.textMuted}
                />
              </TouchableOpacity>
            </View>
            {passwordError !== '' && (
              <Text style={styles.error}>{passwordError}</Text>
            )}

            {formError !== '' && (
              <Text style={styles.formError}>{formError}</Text>
            )}

            <TouchableOpacity
              accessibilityRole="button"
              style={styles.button}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>

            <Text style={styles.hint}>
              {`Dùng thử: ${demoAccount.username} / ${demoAccount.password}`}
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  flex: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  hero: {
    flex: 1,
    minHeight: 220,
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
  },
  bubbleBig: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderBottomLeftRadius: 6,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: colors.white,
    marginTop: spacing.lg,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: colors.white,
    marginTop: spacing.xs,
  },
  sheet: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 8,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.lg,
  },
  label: {
    ...typography.caption,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  labelSpaced: {
    marginTop: spacing.lg,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderColor: colors.border,
    height: 48,
    gap: spacing.sm,
  },
  inputError: {
    borderColor: colors.danger,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
    padding: 0,
  },
  error: {
    color: colors.danger,
    fontSize: 12,
    marginTop: spacing.xs,
  },
  formError: {
    color: colors.danger,
    marginTop: spacing.md,
  },
  button: {
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 25,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.xl,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  hint: {
    ...typography.caption,
    marginTop: spacing.lg,
  },
});
