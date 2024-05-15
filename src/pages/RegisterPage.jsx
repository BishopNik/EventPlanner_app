/** @format */

import React from 'react';
import { Formik, Field } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { registerSchema } from 'helpers';
import {
	MainTitle,
	FormStyled,
	FieldContainer,
	FieldStyled,
	HearSection,
	RadioTitle,
	RadioContainer,
	RadioItem,
	ActionContainer,
	ButtonStyled,
	ErrorMes,
} from 'components/styled.components/RegisterPage.styled';
import { registerMember } from 'helpers/fetchMembers';

const RegisterPage = () => {
	const navigate = useNavigate();
	const { event } = useParams();

	const goBack = () => {
		navigate(-1);
	};

	const handleFormSubmit = async (values, { setSubmitting }) => {
		const data = await registerMember({ ...values, event });

		if (data?.name !== 'AxiosError') {
			navigate(`/${event}`);
		}
		setSubmitting(false);
	};

	const getCurrentDate = () => {
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, '0');
		const day = String(today.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	};

	return (
		<main>
			<MainTitle>Event registration</MainTitle>
			<Formik
				initialValues={{
					name: '',
					email: '',
					dateBth: '',
					hear: '',
				}}
				validationSchema={registerSchema}
				onSubmit={handleFormSubmit}
			>
				{({ isSubmitting }) => (
					<FormStyled autoComplete='off'>
						<FieldContainer>
							Full name
							<FieldStyled
								type='text'
								name='name'
								placeholder='Your name'
								autoFocus
							/>
							<ErrorMes name='name' component='span' />
						</FieldContainer>
						<FieldContainer>
							Email
							<FieldStyled type='email' name='email' placeholder='my@email.com' />
							<ErrorMes name='email' component='span' />
						</FieldContainer>
						<FieldContainer>
							Date of birth
							<FieldStyled
								type='date'
								name='dateBth'
								style={{ cursor: 'pointer' }}
								max={getCurrentDate()}
							/>
							<ErrorMes name='dateBth' component='span' />
						</FieldContainer>
						<HearSection>
							<RadioTitle>Where did you hear about this event</RadioTitle>
							<div style={{ position: 'relative' }}>
								<Field name='hear'>
									{({ field }) => (
										<RadioContainer>
											<RadioItem>
												<input
													type='radio'
													{...field}
													value='social'
													id='social'
												/>
												<label htmlFor='social'>Social media</label>
											</RadioItem>
											<RadioItem>
												<input
													type='radio'
													{...field}
													value='friends'
													id='friends'
												/>
												<label htmlFor='friends'>Friends</label>
											</RadioItem>
											<RadioItem>
												<input
													type='radio'
													{...field}
													value='myself'
													id='myself'
												/>
												<label htmlFor='myself'>Found myself</label>
											</RadioItem>
										</RadioContainer>
									)}
								</Field>
								<ErrorMes name='hear' component='span' />
							</div>
						</HearSection>
						<ActionContainer>
							<li>
								<ButtonStyled type='submit' disabled={isSubmitting}>
									Register
								</ButtonStyled>
							</li>
							<li>
								<ButtonStyled type='button' onClick={goBack}>
									Back
								</ButtonStyled>
							</li>
						</ActionContainer>
					</FormStyled>
				)}
			</Formik>
		</main>
	);
};

export default RegisterPage;
