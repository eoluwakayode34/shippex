import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {ShippexLogoPrimary} from '../../assets/image/authImage';

import {NotficationIcon} from '../../assets/icons/dashboardIcon';
import {appColors} from '../../utils/colors';

const ProfileScrenn: React.FC = () => {
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
          <Text variant="headlineMedium">Profile</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
    backgroundColor: appColors.white,
    height: '100%',
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

export default ProfileScrenn;
