/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ShippexLogoPrimary} from '../../assets/image/authImage';
import {
  CheckBoxIcon,
  FilterIcon,
  NotficationIcon,
  ScanIcon,
  UnCheckBoxIcon,
} from '../../assets/icons/dashboardIcon';
import {Text} from 'react-native-paper';
import {FormSearchInput} from '../../components/ui/input/searchInput';
import {appColors} from '../../utils/colors';
import ShipmentCard from '../../components/ui/card/shipmentCard';

function DashboardScreen(): React.JSX.Element {
  const [checked, setChecked] = React.useState(false);
  return (
    <>
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
            theme={{
              fonts: {
                headlineLarge: {
                  fontFamily: 'Inter-Regular',
                },
              },
            }}>
            Hello,
          </Text>
          <Text variant="headlineMedium">Ibrahim Shaker</Text>
        </View>

        <FormSearchInput />

        <View
          style={{
            width: '100%',
            paddingVertical: 20,
            flexDirection: 'row',
            gap: 14,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#F4F2F8',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              height: 44,
              flex: 1,
              padding: 14,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <FilterIcon />
              <Text>Filters</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: appColors.primary,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              height: 44,
              flex: 1,
              padding: 14,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <ScanIcon />
              <Text style={{color: 'white'}}>Add Scan</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{paddingTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text variant="headlineSmall">Shipments</Text>

            <TouchableOpacity
              onPress={() => setChecked(prev => !prev)}
              style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              {checked ? <CheckBoxIcon /> : <UnCheckBoxIcon />}
              <Text style={{color: appColors.primary, fontSize: 18}}>
                Mark All
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{paddingVertical: 10}}>
            <ShipmentCard />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
  },

  buttonContainer: {
    width: '100%',
    paddingBottom: 36,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default DashboardScreen;
