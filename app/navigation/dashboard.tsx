import React from 'react';
import {createNavigationContainerRef} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@app/screens/home';
import QuizScreen from '@app/screens/quiz';
import RecommendedScreen from '@app/screens/recommended';
import InstitutionsScreen from '@app/screens/institutions';
import UniversityScreen from '@app/screens/university';

const MainStack = createStackNavigator();
export const navigationRef = createNavigationContainerRef();

const Index = (): JSX.Element => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="QuizScreen" component={QuizScreen} />
      <MainStack.Screen
        name="RecommendedScreen"
        component={RecommendedScreen}
      />
      <MainStack.Screen
        name="InstituionsScreen"
        component={InstitutionsScreen}
      />

      <MainStack.Screen name="UniversityScreen" component={UniversityScreen} />
    </MainStack.Navigator>
  );
};

export default Index;
