import React from 'react';
import {createNavigationContainerRef} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import SingInScreen from '@app/screens/sing/singIn';
import SingUpScreen from '@app/screens/sing/singUp';
import ForgotPasswordScreen from '@app/screens/sing/forgotPassword';

const MainStack = createStackNavigator();
export const navigationRef = createNavigationContainerRef();

const Index = (): JSX.Element => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="SingIn" component={SingInScreen} />
      <MainStack.Screen name="SingUp" component={SingUpScreen} />
      <MainStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </MainStack.Navigator>
  );
};

export default Index;
