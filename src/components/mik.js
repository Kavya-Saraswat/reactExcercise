import * as Yup from 'yup';

export const signInSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    username: Yup.string().matches(/(@|!|#)/).min(8, 'Password must be at least 8 characters').required('username is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmpassword: Yup.string().min(8, 'Password must be at least 8 characters').oneOf([Yup.ref('password'), null], 'Passwords must match').required('Password is required')
});