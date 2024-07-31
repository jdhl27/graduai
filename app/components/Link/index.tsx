import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {commonStyles as stylesCommon} from '@app/styles/common';
type LinkProps = {
  label: string;
  action: () => void;
};
const Index: React.FC<LinkProps> = ({label, action}) => {
  const commonStyles = stylesCommon();
  return (
    <TouchableOpacity onPress={() => action()}>
      <Text style={[commonStyles.txt_p_regular_light, styles.text]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(Index);
