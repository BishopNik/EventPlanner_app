/** @format */

import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const MainTitle = styled.h1`
	margin: 40px auto;
	text-align: center;
	font-size: 36px;

	@media screen and (min-width: 768px) {
		font-size: 50px;
	}
`;

export const FormStyled = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	margin: 0 auto 40px auto;
	width: fit-content;
`;

export const HearSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
`;

export const FieldContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 5px;
	width: 300px;
	font-size: 16px;
	cursor: default;

	@media screen and (min-width: 768px) {
		width: 600px;
		font-size: 22px;
	}
`;

export const FieldStyled = styled(Field)`
	width: 100%;
	height: 40px;
	border: none;
	border-radius: 8px;
	padding: 15px;
	border: 1px solid black;

	@media screen and (min-width: 768px) {
		height: 60px;
		border-radius: 12px;
	}
`;

export const RadioTitle = styled.h3`
	font-size: 20px;
	text-align: start;

	@media screen and (min-width: 768px) {
		font-size: 28px;
	}
`;

export const RadioContainer = styled.ul`
	display: flex;
	gap: 15px;
	padding-left: 30px;
`;

export const RadioItem = styled.li`
	display: flex;
	gap: 5px;
	font-size: 18px;
`;

export const ActionContainer = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
`;

export const ButtonStyled = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 40px;
	border: none;
	border-radius: 12px;
	font-size: 20px;
	box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.25);
	transition: box-shadow 0.3s, background-color 0.3s, color 0.3s;
	background-color: floralwhite;
	cursor: pointer;

	&:hover {
		background-color: aquamarine;
		color: darkblue;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
	}

	@media screen and (min-width: 768px) {
		width: 140px;
		height: 50px;
	}
`;

export const ErrorMes = styled(ErrorMessage)`
	position: absolute;
	bottom: -20px;
	font-size: 14px;
	color: red;
`;
