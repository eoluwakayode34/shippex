import React, {useMemo, useState} from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {StyleSheet, View} from 'react-native';
import {appColors} from '../../utils/colors';
import CustomBackdrop from './customBackdrop';
import {Text} from 'react-native-paper';
import ShipmentStatusButton from '../ui/button/shipmentStatusButton';
import {Easing} from 'react-native-reanimated';
import {shipmentStatusData, statusType} from '../../utils/data/shipmentList';

interface FilterShipmentBottomSheetProps {
  sheetRef: React.RefObject<BottomSheet>;
  setFilterStatus: React.Dispatch<React.SetStateAction<statusType[]>>;
}

const FilterShipmentBottomSheet: React.FC<FilterShipmentBottomSheetProps> = ({
  sheetRef,
  setFilterStatus,
}) => {
  const [shipmentStatus, setShipmentStatus] = useState<statusType[]>([]);
  const snapPoints = useMemo(() => ['35%', '50%', '98%'], []);

  const renderBackdropComponent = (backdropProps: any) => (
    <CustomBackdrop {...backdropProps} disappearsOnIndex={-1} />
  );

  const handleCancel = () => {
    sheetRef.current?.close({duration: 300, easing: Easing.linear});
  };
  const handleDone = () => {
    setFilterStatus(shipmentStatus);
    sheetRef.current?.close({duration: 300, easing: Easing.linear});
  };

  return (
    <>
      <BottomSheet
        ref={sheetRef}
        index={-1}
        enablePanDownToClose
        backdropComponent={renderBackdropComponent}
        handleIndicatorStyle={styles.panIndicator}
        snapPoints={snapPoints}>
        <BottomSheetView>
          <View style={styles.container}>
            <View style={styles.contentHeaderContainer}>
              <Text onPress={handleCancel} style={styles.textPrimary}>
                Cancel
              </Text>
              <Text style={styles.textHeadingMedium}>Filters</Text>
              <Text onPress={handleDone} style={styles.textPrimary}>
                Done
              </Text>
            </View>

            <View style={styles.shipmentStatusContainer}>
              <Text style={styles.textHeadingGray}>SHIPMENT STATUS</Text>

              <View style={styles.shipmentStatusItemContainer}>
                {shipmentStatusData.map((item: statusType, index) => (
                  <ShipmentStatusButton
                    key={index}
                    onPress={() =>
                      setShipmentStatus(prev => {
                        if (prev.includes(item)) {
                          return prev.filter(status => status !== item);
                        } else {
                          return [...prev, item];
                        }
                      })
                    }
                    text={item}
                  />
                ))}
              </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  contentHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: '#EAE7F2',
    paddingBottom: 12,
    paddingTop: 5,
  },

  textPrimary: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: appColors.primary,
  },

  textHeadingMedium: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#000',
  },

  textHeadingGray: {
    color: '#58536E',
    fontFamily: 'Inter-Medium',
    paddingVertical: 10,
  },

  shipmentStatusContainer: {paddingHorizontal: 18, paddingVertical: 12},
  shipmentStatusItemContainer: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
    flexWrap: 'wrap',
  },

  panIndicator: {backgroundColor: '#A7A3B3'},
});

export default FilterShipmentBottomSheet;
