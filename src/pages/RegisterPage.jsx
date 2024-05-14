/** @format */

import React from 'react';
import { Formik, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { registerSchema } from 'components/Helpers';
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

const RegisterPage = () => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	const handleFormSubmit = (values, { setSubmitting }) => {
		setSubmitting(false);

		goBack();
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
							<FieldStyled type='date' name='dateBth' style={{ cursor: 'pointer' }} />
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
