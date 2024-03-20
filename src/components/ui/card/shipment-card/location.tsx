import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {ToLocationIcon} from '../../../../assets/icons/dashboardIcon';
import {appColors} from '../../../../utils/colors';

interface LocationProps {
  location1: string;
  location2: string;
  selectedCard: boolean;
}

const Location: React.FC<LocationProps> = ({
  location1,
  location2,
  selectedCard,
}) => {
  return (
    <View style={styles.container}>
      <StyledText text={location1} />
      <View style={[styles.iconContainer, {opacity: selectedCard ? 0.5 : 1}]}>
        <ToLocationIcon />
      </View>
      <StyledText text={location2} />
    </View>
  );
};

const StyledText: React.FC<{text: string}> = ({text}) => {
  return (
    <Text
      style={styles.text}
      variant="bodySmall"
      theme={{fonts: {bodySmall: {fontFamily: 'Inter-Regular', fontSize: 12}}}}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  text: {
    color: appColors.black300,
  },
  iconContainer: {
    opacity: 1,
  },
});

export default Location;
