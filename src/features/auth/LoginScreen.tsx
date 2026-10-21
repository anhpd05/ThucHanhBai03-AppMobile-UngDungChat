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
import { colors, radius, shadowCard, spacing, typography } from '../../theme';

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
          <View style={styles.logo}>
            <Icon name="chat" size={36} color={colors.white} />
          </View>
          <Text style={styles.title}>ChatApp</Text>
          <Text style={styles.subtitle}>Kết nối với bạn bè mọi lúc</Text>

          <View style={styles.card}>
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
          </View>

          <Text style={styles.hint}>
            {`Tài khoản demo: ${demoAccount.username} / ${demoAccount.password}`}
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing.xl,
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: radius.xl,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    ...typography.appTitle,
    textAlign: 'center',
    marginTop: spacing.lg,
  },
  subtitle: {
    ...typography.bodyMuted,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.xl,
    marginTop: spacing.xl,
    ...shadowCard,
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
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    height: 50,
    paddingHorizontal: spacing.md,
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
    textAlign: 'center',
    marginTop: spacing.md,
  },
  button: {
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.lg,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  hint: {
    ...typography.caption,
    textAlign: 'center',
    marginTop: spacing.lg,
  },
});
