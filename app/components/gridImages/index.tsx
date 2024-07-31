import React from 'react';
import {View, Image} from 'react-native';
import Margin from '@app/components/shared/margin';
import {styles} from './styles';

const Index = () => {
  return (
    <View style={styles.content}>
      <View style={styles.contentCards}>
        <View>
          <View style={styles.cardYellow}>
            <Image
              source={require('@app/assets/images/woman2.png')}
              style={styles.image}
            />
          </View>
          <Margin top={20} />
          <View style={styles.cardmagenta}>
            <Image
              source={require('@app/assets/images/woman3.png')}
              style={[styles.image, {width: 113, height: 112, bottom: -6}]}
            />
          </View>
          <Margin top={20} />
          <View style={styles.cardcian}>
            <Image
              source={require('@app/assets/images/woman4.png')}
              style={[styles.image, {width: 104, height: 137, bottom: 0}]}
            />
          </View>
        </View>

        <View>
          <View style={[styles.cardcian, {width: 171, height: 222}]}>
            <Image
              source={require('@app/assets/images/men.png')}
              style={[styles.image, {width: 137, height: 228}]}
            />
          </View>

          <Margin top={20} />
          <View style={styles.cardcianlight}>
            <Image
              source={require('@app/assets/images/men2.png')}
              style={[styles.image, {width: 104, height: 137, bottom: 0}]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(Index);
