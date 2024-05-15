/** @format */

import styled from 'styled-components';

export const MainTitle = styled.h1`
	margin: 40px auto;
	text-align: center;
	font-size: 36px;

	@media screen and (min-width: 768px) {
		font-size: 50px;
		font-weight: 400;
	}
`;

export const GoBack = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 150px;
	height: 45px;
	margin-left: auto;
	margin-right: auto;
	border-radius: 12px;
	border: none;
	box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.25);
	cursor: pointer;
	font-size: 22px;
	font-weight: 500;
	text-decoration: none;
	color: black;

	transition: box-shadow 0.3s, background-color 0.3s, color 0.3s;
	background-color: floralwhite;

	&:hover {
		background-color: aquamarine;
		color: darkblue;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
	}
`;
