import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

export const loginValidationSchema = yup.object().shape({
  emailOrUsername: yup
    .string()
    .required('Email or Username is required')
    .test('is-email-or-username', 'Invalid email or username', value => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      const usernameRegex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
      return emailRegex.test(value) || usernameRegex.test(value);
    }),
  password: yup
    .string()
    .min(5, 'Password must be at least 8 characters')
    .required('Password is required'),
  url: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!',
    )
    .required('Please enter website'),
});
