import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  emailOrUsername: yup
    .string()
    .required('Email or Username is required')
    .test('is-email-or-username', 'Invalid email or username', value => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      const usernameRegex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
      return emailRegex.test(value) || usernameRegex.test(value);
    }),
  url: yup.string().url('Must be a valid URL').required('URL is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});
