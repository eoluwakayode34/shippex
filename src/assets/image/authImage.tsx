import React from 'react';
import {SvgFromXml} from 'react-native-svg';
import {shippexLogo, shippexLogoPrimary} from '../svg';

type SvgProp = {
  width?: number;
  height?: number;
};
export const ShippexLogo = ({width = 207.63, height = 36}: SvgProp) => (
  <SvgFromXml xml={shippexLogo} width={width} height={height} />
);
export const ShippexLogoPrimary = ({width = 92.28, height = 16}: SvgProp) => (
  <SvgFromXml xml={shippexLogoPrimary} width={width} height={height} />
);
