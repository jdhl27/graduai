import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import {styles} from './styles';
import {commonStyles as stylesCommon} from '@app/styles/common';
import {PropsButtomType} from '@app/types/components/buttom';
import themes from '@app/themes';

const Index = ({
  label = 'Send',
  style = 'primary',
  Icon,
  onSubmit,
  loading,
}: PropsButtomType) => {
  const commonStyles = stylesCommon();

  const dynamicButtonStyle =
    style === 'primary'
      ? styles.buttonPrimary
      : style === 'neutral'
      ? styles.buttonNeutral
      : style === 'secondary'
      ? styles.buttonSecondary
      : {};

  const dynamicLabeltyle =
    style === 'primary'
      ? {color: 'white'}
      : style === 'neutral'
      ? {color: themes.colors.primary}
      : style === 'secondary'
      ? {color: themes.colors.primary}
      : {};

  const submit = () => {
    Keyboard.dismiss();
    onSubmit();
  };
  return (
    <TouchableOpacity
      style={[styles.button, dynamicButtonStyle]}
      onPress={submit}>
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : Icon ? (
        <View style={styles.contentIcon}>
          <Icon />
        </View>
      ) : (
        <Text style={[commonStyles.txt_medium, styles.text, dynamicLabeltyle]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(Index);
