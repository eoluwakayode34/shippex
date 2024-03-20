/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  CallIcon,
  CheckBoxIcon,
  CloseExpandCardIcon,
  ExpandCardIcon,
  ToLocationBigIcon,
  ToLocationIcon,
  UnCheckBoxIcon,
  WhatsAppIcon,
} from '../../../assets/icons/dashboardIcon';
import {Text} from 'react-native-paper';
import {appColors} from '../../../utils/colors';

function ShipmentCard(): React.JSX.Element {
  const [checked, setChecked] = React.useState(false);
  const [expandCard, setExpandCard] = React.useState(true);
  const [selectedCard, setselectedCard] = React.useState(false);
  return (
    <TouchableOpacity
      onPress={() => setselectedCard(prev => !prev)}
      style={{
        backgroundColor: '#F4F2F8',
        borderRadius: 10,
        width: '100%',
        borderWidth: selectedCard ? 2 : 0,
        borderColor: '#6E91EC',
        overflow: 'hidden',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          padding: 12,
          justifyContent: 'space-between',
          borderBottomWidth: expandCard ? 2 : 0,
          borderStyle: 'dashed',
          borderColor: '#fff',
        }}>
        <TouchableOpacity
          onPress={() => setChecked(prev => !prev)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
            opacity: selectedCard ? 0.5 : 1,
          }}>
          {checked ? <CheckBoxIcon /> : <UnCheckBoxIcon />}
        </TouchableOpacity>

        <Image
          source={require('../../../assets/image/shipmentBox.png')}
          width={40}
          height={40}
        />

        <View>
          <Text
            theme={{
              fonts: {
                bodySmall: {
                  fontFamily: 'Inter-Regular',
                  fontSize: 12,
                },
              },
            }}
            style={{color: '#3F395C'}}
            variant="bodySmall">
            AWB
          </Text>
          <Text
            theme={{
              fonts: {
                headlineSmall: {
                  fontFamily: 'Inter-SemiBold',
                  fontSize: 18,
                  lineHeight: 24,
                },
              },
            }}
            variant="headlineSmall">
            41785691423
          </Text>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
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
              style={{color: appColors.black300}}>
              Cairo
            </Text>
            <View style={{opacity: selectedCard ? 0.5 : 1}}>
              <ToLocationIcon />
            </View>
            <Text
              theme={{
                fonts: {
                  bodySmall: {
                    fontFamily: 'Inter-Regular',
                    fontSize: 12,
                  },
                },
              }}
              variant="bodySmall"
              style={{color: appColors.black300}}>
              Alexandria
            </Text>
          </View>
        </View>

        <ShipmentStatus tag="error" />

        <TouchableOpacity onPress={() => setExpandCard(prev => !prev)}>
          {expandCard ? <CloseExpandCardIcon /> : <ExpandCardIcon />}
        </TouchableOpacity>
      </View>
      {expandCard ? (
        <View
          style={{
            paddingHorizontal: 12,
            paddingVertical: 10,
            backgroundColor: '#f9f9fb',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 20,
            }}>
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

          <View
            style={{
              flexDirection: 'row',
              gap: 14,
              justifyContent: 'flex-end',
              marginTop: 24,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#6E91EC',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                height: 40,
                paddingHorizontal: 14,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <CallIcon />
                <Text
                  style={{
                    fontFamily: 'Inter-Regular',
                    fontSize: 14,
                    color: '#fff',
                  }}>
                  Call
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#25D366',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                height: 40,
                paddingHorizontal: 14,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <WhatsAppIcon />
                <Text
                  style={{
                    fontFamily: 'Inter-Regular',
                    fontSize: 14,
                    color: '#fff',
                  }}>
                  WhatsApp
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

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

export default ShipmentCard;

const styles = StyleSheet.create({
  labelText: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: appColors.white,
  },
});
