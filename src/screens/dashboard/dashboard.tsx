import React, {useRef, useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {ShippexLogoPrimary} from '../../assets/image/authImage';
import {
  CheckBoxIcon,
  FilterIcon,
  NotficationIcon,
  ScanIcon,
  UnCheckBoxIcon,
} from '../../assets/icons/dashboardIcon';
import {FormSearchInput} from '../../components/ui/input/searchInput';
import {appColors} from '../../utils/colors';
import ShipmentCard from '../../components/ui/card/shipment-card/shipmentCard';
import FilterShipmentBottomSheet from '../../components/bottom-sheet/filterShipmentBottomSheet';
import BottomSheet from '@gorhom/bottom-sheet';
import {Easing} from 'react-native-reanimated';
import {useUserStore} from '../../stores/userStore';

const DashboardScreen: React.FC = () => {
  const user = useUserStore(state => state.user);

  const [checked, setChecked] = useState(false);
  const filterStatusRef = useRef<BottomSheet>(null);

  const handleFilterPress = () => {
    filterStatusRef.current?.snapToIndex(0, {
      duration: 320,
      easing: Easing.linear,
    });
  };

  console.log(user);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          width={40}
          height={40}
          source={require('../../assets/image/avatar.png')}
        />
        <ShippexLogoPrimary />
        <NotficationIcon />
      </View>

      <View style={{marginTop: 28}}>
        <Text
          style={{color: appColors.black300}}
          theme={{fonts: {bodySmall: {fontFamily: 'Inter-Regular'}}}}
          variant="bodySmall">
          Hello,
        </Text>
        <Text variant="headlineMedium">{user?.full_name}</Text>
      </View>

      <FormSearchInput />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleFilterPress} style={styles.button}>
          <View style={styles.buttonContent}>
            <FilterIcon />
            <Text>Filters</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: appColors.primary}]}>
          <View style={styles.buttonContent}>
            <ScanIcon />
            <Text style={styles.textWhite}>Add Scan</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{paddingTop: 20}}>
        <View style={styles.shipmentHeader}>
          <Text variant="headlineSmall">Shipments</Text>
          <TouchableOpacity
            onPress={() => setChecked(prev => !prev)}
            style={styles.markAllButton}>
            {checked ? <CheckBoxIcon /> : <UnCheckBoxIcon />}
            <Text style={styles.headingMedium}>Mark All</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingVertical: 10}}>
          <ShipmentCard />
        </View>
      </View>

      <FilterShipmentBottomSheet sheetRef={filterStatusRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    gap: 14,
  },
  button: {
    backgroundColor: '#F4F2F8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 44,
    flex: 1,
    padding: 14,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  shipmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  markAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  textWhite: {color: 'white'},
  headingMedium: {color: appColors.primary, fontSize: 18},
});

export default DashboardScreen;
