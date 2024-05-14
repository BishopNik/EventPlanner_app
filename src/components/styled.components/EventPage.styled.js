/** @format */

import styled from 'styled-components';

export const MainTitle = styled.h1`
	margin: 40px auto;
	text-align: center;
	font-size: 36px;

	@media screen and (min-width: 768px) {
		font-size: 50px;
	}
`;

export const DataContainer = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
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
