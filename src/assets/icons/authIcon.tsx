import React from 'react';
import {SvgFromXml} from 'react-native-svg';
import {cancelIcon} from '../svg';

type SvgProp = {
  width?: number;
  height?: number;
};
export const CancelIcon = ({width = 17, height = 22}: SvgProp) => (
  <SvgFromXml xml={cancelIcon} width={width} height={height} />
);
