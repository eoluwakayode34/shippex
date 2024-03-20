/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {appColors} from '../../../utils/colors';

type ShipmentStatusButtonProps = {
  onPress: () => void;
  text: string;
};

function ShipmentStatusButton({
  onPress,
  text,
}: ShipmentStatusButtonProps): JSX.Element {
  const [onTouched, setOnTouched] = useState(false);

  const handleTouched = () => {
    onPress();
    setOnTouched(prev => !prev);
  };

  return (
    <TouchableOpacity
      onPress={handleTouched}
      style={[
        styles.button,
        {borderWidth: onTouched ? 2 : 0, borderColor: appColors.primary300},
      ]}>
      <Text style={styles.buttonText} variant="bodyLarge">
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: appColors.black100,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: appColors.black400,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    textTransform: 'capitalize',
  },
});

export default ShipmentStatusButton;
