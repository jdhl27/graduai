import React from 'react';
import {View} from 'react-native';
import {DividerProps} from '@app/types/components/divider';

const Divider: React.FC<DividerProps> = ({width = '100%', background = 'black'}) => {
  return <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: background
          }}
        />
};

export default React.memo(Divider);
