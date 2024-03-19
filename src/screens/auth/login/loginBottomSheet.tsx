import React, {useMemo} from 'react';
import {Text} from 'react-native-paper';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CancelIcon} from '../../../assets/icons/authIcon';
import {appColors} from '../../../utils/colors';
import {TextInputUrl} from '../../../components/ui/input/textInput';

interface LoginBottomSheetProps {
  sheetRef: React.RefObject<BottomSheet>;
}

const LoginBottomSheet: React.FC<LoginBottomSheetProps> = ({sheetRef}) => {
  const snapPoints = useMemo(() => ['98%'], []);

  return (
    <>
      <BottomSheet
        ref={sheetRef}
        index={-1}
        enablePanDownToClose
        snapPoints={snapPoints}>
        <BottomSheetView>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.cancelContainer}
              onPress={() => sheetRef.current?.close()}>
              <CancelIcon />
              <Text style={styles.cancelText} variant="bodyMedium">
                Cancel
              </Text>
            </TouchableOpacity>
            <View style={styles.contentContainer}>
              <Text variant="headlineLarge">Login</Text>
              <Text style={styles.descriptionText} variant="bodyMedium">
                Please enter your First, Last name and your phone number in
                order to register
              </Text>

              <View style={styles.inputContainer}>
                <TextInputUrl />
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
    paddingHorizontal: 18,
    width: '100%',
    height: '100%',
  },
  cancelContainer: {
    flexDirection: 'row',
    gap: 5,
    left: -8,
  },
  cancelText: {
    color: appColors.primary,
    fontWeight: '400',
  },
  contentContainer: {
    marginTop: 22,
    gap: 12,
  },
  descriptionText: {
    color: appColors.black300,
  },
  inputContainer: {
    flex: 1,
  },
});

export default LoginBottomSheet;
