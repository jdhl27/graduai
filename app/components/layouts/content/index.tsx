import React, {ReactNode} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StatusBar,
  Platform,
} from 'react-native';
import {stylesLayout} from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {commonStyles as stylesCommon} from '@app/styles/common';
import LogoutIcon from '@app/assets/icons/logout';
import auth from '@react-native-firebase/auth';
import themes from '@app/themes';

interface LayoutProps {
  children: ReactNode;
  backButton?: boolean;
  colorBar?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  backgroundColor?: string;
  showLogout?: boolean;
}
const Index: React.FC<LayoutProps> = ({
  children,
  backButton = false,
  colorBar = 'white',
  barStyle = 'dark-content',
  showLogout = false,
  backgroundColor = Platform.OS === 'android'
    ? themes.colors.white
    : themes.colors.white,
}) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const styles = stylesLayout();
  const commonStyles = stylesCommon();

  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}>
      <StatusBar
        animated={true}
        backgroundColor={colorBar}
        barStyle={barStyle}
      />
      <View style={styles.content}>
        {showLogout && (
          <TouchableOpacity style={styles.logout} onPress={() => logout()}>
            <LogoutIcon width={25} />
          </TouchableOpacity>
        )}

        {children}
      </View>

      {backButton && (
        <View style={styles.backButtonContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Text style={[commonStyles.txt_neutral, styles.textBack]}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Index;
