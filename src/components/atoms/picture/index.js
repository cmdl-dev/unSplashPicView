import React from 'react';
import {Image} from 'react-native';
import styleSheet from './style';

const Picture = ({src, dimensions}) => {
  const styleProps = [
    {
      height: dimensions.h,
      width: dimensions.w,
    },
  ];
  return <Image source={{uri: src}} style={[styleProps, styleSheet.photo]} />;
};

export default Picture;
