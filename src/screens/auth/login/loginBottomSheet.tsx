import React, {useMemo} from 'react';
import {Text, TextInput} from 'react-native-paper';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CancelIcon} from '../../../assets/icons/authIcon';
import {appColors} from '../../../utils/colors';
// import {TextInputUrl} from '../../../components/ui/input/textInput';
import {Formik} from 'formik';
import {loginValidationSchema} from '../../../utils/validation-schema/authValidationSchema';
import AppButton from '../../../components/ui/button/mainButton';
import FormInput from '../../../components/ui/input/textInput';
import SubmitButton from '../../../components/ui/button/formButton';

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

              <View>
                <Formik
                  initialValues={{emailOrUsername: '', url: '', password: ''}}
                  validationSchema={loginValidationSchema}
                  onSubmit={values => console.log(values)}>
                  {({handleChange, handleSubmit, values, errors, touched}) => (
                    <View>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'column',
                          height: '80%',
                        }}>
                        <FormInput
                          label="URL"
                          left={<TextInput.Affix text="https:// | " />}
                          onChangeText={handleChange('url')}
                          value={values.url}
                          error={touched.url && errors.url ? errors.url : null}
                        />
                        <FormInput
                          label="Username / Email"
                          onChangeText={handleChange('emailOrUsername')}
                          value={values.emailOrUsername}
                          error={
                            touched.emailOrUsername && errors.emailOrUsername
                              ? errors.emailOrUsername
                              : null
                          }
                        />
                        <FormInput
                          label="Password"
                          secureTextEntry={true}
                          onChangeText={handleChange('password')}
                          value={values.password}
                          error={
                            touched.password && errors.password
                              ? errors.password
                              : null
                          }
                        />
                      </View>

                      <SubmitButton text="Login" onPress={handleSubmit} />
                    </View>
                  )}
                </Formik>
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
  formContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default LoginBottomSheet;
