import { Text, TextStyle } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'
import { TypoProps } from '@/type'
import { verticalScale } from '@/utils/styling'

const Typo = ({
    size,
    color = colors.text,
    fontWeight = '400',
    children,
    style,
    textProps = {}
}: TypoProps) => {
    const fontFamily =
    fontWeight === '700'
      ? 'ClashGrotesk-Bold'
      : 'ClashGrotesk-Regular';

      const textStyle: TextStyle = {
            fontSize: size ? verticalScale(size) : verticalScale(16),
            color: color,
            fontWeight,
            fontFamily
        };

  return (
      <Text style={[textStyle ,style]} {...textProps}>{children}</Text>
  )
}

export default Typo

