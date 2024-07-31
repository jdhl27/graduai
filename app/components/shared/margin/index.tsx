import React from 'react';
import {View} from 'react-native';
import {MarginProps} from '@app/types/components/margin';

const Margin: React.FC<MarginProps> = ({top, right, bottom, left}) => (
  <View
    style={{
      marginTop: top,
      marginRight: right,
      marginBottom: bottom,
      marginLeft: left,
    }}
  />
);

export default React.memo(Margin);
