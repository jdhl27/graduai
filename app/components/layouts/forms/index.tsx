import {styles} from './styles';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Keyboard,
} from 'react-native';

interface LayoutProps {
  children: any;
}
const LayoutForm: React.FC<LayoutProps> = ({children}) => {
  const handlePress = () => {
    Keyboard.dismiss();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Pressable onPress={handlePress} style={styles.container}>
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default LayoutForm;
