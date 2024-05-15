/** @format */

import * as Yup from 'yup';

const emailRegex = RegExp(/^[A-Z|a-z0-9!#$%&._%+-/=?^]+@[A-Z|a-z0-9.-]+\.[A-Z|a-z]{2,4}$/);

export const registerSchema = Yup.object().shape({
	name: Yup.string().required('This is a required field'),
	email: Yup.string()
		.matches(emailRegex, 'Invalid email')
		.email('Invalid email address')
		.required('This is a required field'),
	dateBth: Yup.string().required('This is a required field'),
	hear: Yup.string().required('This is a required field'),
});
