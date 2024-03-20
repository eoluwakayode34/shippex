import React from 'react';
import {SvgFromXml} from 'react-native-svg';
import {
  callIcon,
  checkBoxIcon,
  closeExpandCardIcon,
  closeSearchActiveIcon,
  expandCardIcon,
  filterIcon,
  notficationIcon,
  scanIcon,
  searchActiveIcon,
  searchIcon,
  toLocationIcon,
  toLocationbigIcon,
  unCheckBoxIcon,
  whatsAppIcon,
} from '../svg';

type SvgProp = {
  width?: number;
  height?: number;
};
export const NotficationIcon = ({width = 40, height = 40}: SvgProp) => (
  <SvgFromXml xml={notficationIcon} width={width} height={height} />
);
export const SearchIcon = ({width = 24, height = 24}: SvgProp) => (
  <SvgFromXml xml={searchIcon} width={width} height={height} />
);
export const SearchActiveIcon = ({width = 24, height = 24}: SvgProp) => (
  <SvgFromXml xml={searchActiveIcon} width={width} height={height} />
);
export const CloseSearchActiveIcon = ({width = 24, height = 24}: SvgProp) => (
  <SvgFromXml xml={closeSearchActiveIcon} width={width} height={height} />
);
export const FilterIcon = ({width = 24, height = 24}: SvgProp) => (
  <SvgFromXml xml={filterIcon} width={width} height={height} />
);
export const ScanIcon = ({width = 24, height = 24}: SvgProp) => (
  <SvgFromXml xml={scanIcon} width={width} height={height} />
);
export const UnCheckBoxIcon = ({width = 20, height = 20}: SvgProp) => (
  <SvgFromXml xml={unCheckBoxIcon} width={width} height={height} />
);
export const CheckBoxIcon = ({width = 20, height = 20}: SvgProp) => (
  <SvgFromXml xml={checkBoxIcon} width={width} height={height} />
);
export const ToLocationIcon = ({width = 8.67, height = 7.83}: SvgProp) => (
  <SvgFromXml xml={toLocationIcon} width={width} height={height} />
);
export const ToLocationBigIcon = ({width = 24, height = 24}: SvgProp) => (
  <SvgFromXml xml={toLocationbigIcon} width={width} height={height} />
);
export const ExpandCardIcon = ({width = 24, height = 24}: SvgProp) => (
  <SvgFromXml xml={expandCardIcon} width={width} height={height} />
);
export const CloseExpandCardIcon = ({width = 24, height = 24}: SvgProp) => (
  <SvgFromXml xml={closeExpandCardIcon} width={width} height={height} />
);
export const CallIcon = ({width = 24, height = 24}: SvgProp) => (
  <SvgFromXml xml={callIcon} width={width} height={height} />
);
export const WhatsAppIcon = ({width = 24, height = 24}: SvgProp) => (
  <SvgFromXml xml={whatsAppIcon} width={width} height={height} />
);
