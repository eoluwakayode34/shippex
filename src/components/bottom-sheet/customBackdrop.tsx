import {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import React from 'react';

const CustomBackdrop = (
  props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps,
) => {
  return (
    <BottomSheetBackdrop
      {...props}
      pressBehavior="none"
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      enableTouchThrough={false}
      opacity={0.4}
    />
  );
};
export default CustomBackdrop;
