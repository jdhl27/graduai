import * as React from 'react';
import {Image, View, StatusBar} from 'react-native';

function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <Image
        source={{
          uri: 'https://static-00.iconduck.com/assets.00/openai-icon-2021x2048-4rpe5x7n.png',
        }}
        style={{width: 200, resizeMode: 'contain'}}
      />
    </View>
  );
}

export default Index;
