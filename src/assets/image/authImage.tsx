import React from 'react';
import {SvgFromXml} from 'react-native-svg';
import {shippexLogo} from '../svg';

type SvgProp = {
  width?: number;
  height?: number;
};
export const ShippexLogo = ({width = 207.63, height = 36}: SvgProp) => (
  <SvgFromXml xml={shippexLogo} width={width} height={height} />
);
