import * as React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';

function Index() {
  return (
    <>
      <View style={[styles.contentEllipse]}>
        <Image
          source={require('@app/assets/images/Ellipse1.png')}
          style={styles.ellipse}
        />
      </View>

      <View style={[styles.contentEllipse, {left: 0, top: -30}]}>
        <Image
          source={require('@app/assets/images/Ellipse2.png')}
          style={[styles.ellipse, {width: 50}]}
        />
      </View>

      <View style={[styles.contentEllipse, {left: 60, top: 180}]}>
        <Image
          source={require('@app/assets/images/Ellipse3.png')}
          style={[styles.ellipse, {width: 25}]}
        />
      </View>

      <View style={[styles.contentEllipse, {right: 50, top: 430}]}>
        <Image
          source={require('@app/assets/images/Ellipse4.png')}
          style={[styles.ellipse, {width: 25}]}
        />
      </View>
    </>
  );
}

export default Index;
