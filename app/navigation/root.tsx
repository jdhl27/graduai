import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {useInit} from '@app/hooks/useInit';
import {AppStateType} from '@app/redux/store';
import {useSelector} from 'react-redux';
import SplashScreen from '@app/screens/splash';

import OmboardingStack from '@app/navigation/omboarding';
import DashboardStack from '@app/navigation/dashboard';

const MainStack = createStackNavigator();
export const navigationRef = createNavigationContainerRef();

const RootNavigator = (): JSX.Element => {
  useInit();
  const {isFirstLoad, isAuth} = useSelector(
    (state: AppStateType) => state.initLoad,
  );

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <MainStack.Navigator screenOptions={{headerShown: false}}>
          {!isFirstLoad && isAuth ? (
            <>
              <MainStack.Screen
                name="DashboardStack"
                component={DashboardStack}
              />
            </>
          ) : !isFirstLoad && !isAuth ? (
            <MainStack.Screen
              name="OmboardingStack"
              component={OmboardingStack}
            />
          ) : (
            <MainStack.Screen name="Splash" component={SplashScreen} />
          )}
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;
