export interface LoginHookData {
  username: string;
  password: string;
  loading: boolean;
  onUsernameChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
  onLoginPress: () => void;
  onEyePress: () => void;
  showPassword: boolean;
}
