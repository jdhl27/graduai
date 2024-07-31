import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {commonStyles as stylesCommon} from '@app/styles/common';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import ArrayLeft from '@app/assets/icons/arrow-left.svg';
import {styles} from './styles';

type HeadPropsType = {
  title?: string;
  backButton?: boolean;
};
const Head: React.FC<HeadPropsType> = ({
  title,
  backButton = false,
}: HeadPropsType) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const commonStyles = stylesCommon();
  return (
    <View style={styles.content}>
      {backButton && (
        <View>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <ArrayLeft />
          </TouchableOpacity>
        </View>
      )}
      <Text style={[commonStyles.txt_h2]}>{title}</Text>
    </View>
  );
};

export default React.memo(Head);
