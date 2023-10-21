import {Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import COLORS from '../../../constants/color';
import STRINGS from '../constants';
import {LoginHookData} from '../hooks/types';
import styles from './styles';

const LoginView = (props: LoginHookData) => {
  const {
    onLoginPress,
    onPasswordChange,
    onUsernameChange,
    password,
    username,
    loading,
    onEyePress,
    showPassword,
  } = props;

  return (
    <View style={styles.main}>
      <Text style={styles.loginText}>{STRINGS.loginIntoYourAccount}</Text>
      <View style={styles.inputContainer} />
      <TextInput
        style={styles.input}
        label={STRINGS.username}
        mode="outlined"
        activeOutlineColor={COLORS.primaryGreen}
        outlineColor={COLORS.primaryGreen}
        value={username}
        onChangeText={onUsernameChange}
      />
      <View style={styles.spacerOne} />
      <TextInput
        style={styles.input}
        label={STRINGS.password}
        mode="outlined"
        activeOutlineColor={COLORS.primaryGreen}
        outlineColor={COLORS.primaryGreen}
        value={password}
        onChangeText={onPasswordChange}
        secureTextEntry={!showPassword}
        right={<TextInput.Icon icon="eye" onPress={onEyePress} />}
      />
      <View style={styles.spacerTwo} />
      {username.length > 0 && password.length > 0 ? (
        <Button
          mode="elevated"
          icon={loading ? 'loading' : 'login'}
          style={styles.buttonContainer}
          buttonColor={COLORS.primaryGreen}
          textColor={COLORS.primaryWhite}
          onPress={onLoginPress}>
          <Text style={styles.buttonContent}>{STRINGS.login}</Text>
        </Button>
      ) : (
        <Button
          mode="elevated"
          disabled
          style={styles.buttonContainer}
          buttonColor={COLORS.primaryGreen}
          textColor={COLORS.primaryWhite}
          onPress={onLoginPress}>
          <Text style={styles.buttonContent}>{STRINGS.login}</Text>
        </Button>
      )}
    </View>
  );
};

export default LoginView;
