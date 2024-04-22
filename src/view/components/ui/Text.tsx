import {Text as RNText, StyleProp, TextProps, TextStyle} from 'react-native';
import React, {memo} from 'react';

// import { fonts } from '~/view/theme';
import {moderateScale} from '../../../constants/metrics';

interface IProps extends TextProps, TextStyle {
  children?: string | number | React.ReactNode;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  weight?: 'bold' | 'normal';
  center?: boolean;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  fontFamily?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  letterSpacing?: number;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
}

const Text = ({
  children,
  fontSize,
  color,
  center,
  textDecorationLine,
  fontFamily,
  letterSpacing,
  lineHeight,
  textTransform,
  textAlign,
  fontWeight,
  onPress,
  style,
  ...otherProps
}: IProps) => {
  return (
    <RNText
      suppressHighlighting={false}
      {...otherProps}
      onPress={onPress}
      style={[
        style,
        {
          fontSize: moderateScale(fontSize || 14),
          color: color,
          //   fontFamily: fontFamily || fonts.REGULAR,
          textAlign: textAlign || (center ? 'center' : 'left'),
          textDecorationLine: textDecorationLine || 'none',
          textTransform: textTransform || 'none',
          letterSpacing: moderateScale(letterSpacing || 0.3),
          lineHeight: moderateScale(lineHeight || 21),
          fontWeight: fontWeight,
        } as StyleProp<TextStyle>,
      ]}>
      {children}
    </RNText>
  );
};

export default memo(Text);
