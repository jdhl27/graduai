export interface PropsIputType {
  label?: string;
  placeholder?: string;
  value: string;
  inputType?: 'default' | 'email';
  secureTextEntry?: boolean;
  Icon?: any;
  multiline?: boolean;
  onChangeText: (text: string) => void;
  error?: string | undefined;
}
