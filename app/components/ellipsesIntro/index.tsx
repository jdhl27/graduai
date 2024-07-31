import * as React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';

function Index() {
  return (
    <>
      <View style={[styles.contentEllipse, {right: 60, top: 180}]}>
        <Image
          source={require('@app/assets/images/Ellipse3.png')}
          style={[styles.ellipse, {width: 25}]}
        />
      </View>

      <View style={[styles.contentEllipse, {left: 50, top: 215}]}>
        <Image
          source={require('@app/assets/images/Ellipse4.png')}
          style={[styles.ellipse, {width: 25}]}
        />
      </View>

      <View style={[styles.contentEllipse, {left: 50, top: -4, zIndex: 2}]}>
        <Image
          source={require('@app/assets/images/Ellipse5.png')}
          style={[styles.ellipse, {width: 25, zIndex: 3, left: -60, top: 150}]}
        />
      </View>
    </>
  );
}

export default Index;
