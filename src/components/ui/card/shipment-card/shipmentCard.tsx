import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {appColors} from '../../../../utils/colors';
import {
  CallIcon,
  CheckBoxIcon,
  CloseExpandCardIcon,
  ExpandCardIcon,
  ToLocationBigIcon,
  UnCheckBoxIcon,
  WhatsAppIcon,
} from '../../../../assets/icons/dashboardIcon';
import {ActionButton} from '../../button/actionButton';
import Location from './location';

const ShipmentStatus = ({
  tag,
}: {
  tag: 'cancel' | 'received' | 'error' | 'success' | 'warning';
}) => {
  let bg = '';
  let color = '';
  let text = '';

  switch (tag) {
    case 'cancel':
      color = '#58536E';
      bg = 'transparent';
      text = 'CANCELED';
      break;
    case 'received':
      bg = '#D9E6FD';
      color = '#2F50C1';
      text = 'RECEIVED';
      break;
    case 'error':
      bg = '#FEE3D4';
      color = '#D12030';
      text = ' ERROR ';
      break;
    case 'success':
      bg = '#E3FAD6';
      color = '#208D28';
      text = 'DELIVERED';
      break;
    default:
      bg = '#FFF3D5';
      color = '#DB7E21';
      text = 'ON HOLD';
      break;
  }

  return (
    <Text
      theme={{
        fonts: {
          bodySmall: {
            fontFamily: 'Inter-Medium',
            fontSize: 11,
          },
        },
      }}
      numberOfLines={1}
      variant="bodySmall"
      style={[
        styles.labelText,
        {
          color: color,
          backgroundColor: bg,
        },
      ]}>
      {text}
    </Text>
  );
};

const LocationText = ({
  title,
  location,
  address,
}: {
  title: string;
  location: string;
  address: string;
}) => {
  return (
    <View>
      <Text
        theme={{
          fonts: {
            bodySmall: {
              fontFamily: 'Inter-Regular',
              fontSize: 12,
              letterSpacing: 0,
            },
          },
        }}
        variant="bodySmall"
        style={{color: appColors.primary}}>
        {title}
      </Text>

      <Text
        theme={{
          fonts: {
            bodyLarge: {
              fontFamily: 'Inter-Regular',
              fontWeight: '400',
            },
          },
        }}
        variant="bodyLarge">
        {location}
      </Text>
      <Text
        theme={{
          fonts: {
            bodyLarge: {
              fontFamily: 'Inter-Light',
            },
          },
        }}
        style={{color: appColors.black300}}
        variant="bodySmall">
        {address}
      </Text>
    </View>
  );
};

const ShipmentCard = (): React.JSX.Element => {
  const [checked, setChecked] = useState(false);
  const [expandCard, setExpandCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setSelectedCard(prev => !prev)}
      style={[styles.cardContainer, {borderWidth: selectedCard ? 2 : 0}]}>
      <View
        style={[
          styles.shipmentDetailsContainer,
          {borderBottomWidth: expandCard ? 2 : 0},
        ]}>
        <TouchableOpacity
          onPress={() => setChecked(prev => !prev)}
          style={[styles.checkBoxStyle, {opacity: selectedCard ? 0.5 : 1}]}>
          {checked ? <CheckBoxIcon /> : <UnCheckBoxIcon />}
        </TouchableOpacity>

        <Image
          source={require('../../../../assets/image/shipmentBox.png')}
          width={38}
          height={38}
        />

        <View>
          <Text style={styles.smallText} variant="bodySmall">
            AWB
          </Text>
          <Text style={styles.headingText} variant="headlineSmall">
            41785691423
          </Text>

          <Location
            location1="Cairo"
            location2="Alexandria"
            selectedCard={selectedCard}
          />
        </View>

        <ShipmentStatus tag="error" />

        <TouchableOpacity onPress={() => setExpandCard(prev => !prev)}>
          {expandCard ? <CloseExpandCardIcon /> : <ExpandCardIcon />}
        </TouchableOpacity>
      </View>
      {expandCard ? (
        <View style={styles.expandCardContainer}>
          <View style={styles.locationContainer}>
            <LocationText
              title="Origin"
              address="Dokki, 22 Nile St."
              location="Cairo"
            />
            <ToLocationBigIcon />
            <LocationText
              title="Destination"
              address="Smoha, 22 max St."
              location="Alexandria"
            />
          </View>

          <View style={styles.shipmentActionButtonContainer}>
            <ActionButton
              backgroundColor="#6E91EC"
              icon={<CallIcon />}
              label="Call"
            />
            <ActionButton
              backgroundColor="#25D366"
              icon={<WhatsAppIcon />}
              label="WhatsApp"
            />
          </View>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  labelText: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: appColors.white,
  },
  shipmentActionButtonContainer: {
    flexDirection: 'row',
    gap: 14,
    justifyContent: 'flex-end',
    marginTop: 24,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  expandCardContainer: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#f9f9fb',
  },
  smallText: {
    color: '#3F395C',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
  },
  cardContainer: {
    backgroundColor: '#F4F2F8',
    borderRadius: 10,
    width: '100%',
    borderColor: '#6E91EC',
    overflow: 'hidden',
  },
  shipmentDetailsContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    padding: 12,
    justifyContent: 'space-between',
    borderStyle: 'dashed',
    borderColor: '#fff',
  },
  headingText: {fontFamily: 'Inter-SemiBold', fontSize: 18, lineHeight: 24},

  checkBoxStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
});

export default ShipmentCard;
