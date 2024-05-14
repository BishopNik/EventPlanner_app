/** @format */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainTitle = styled.h1`
	margin: 40px auto 0 auto;
	text-align: center;
	font-size: 36px;

	@media screen and (min-width: 768px) {
		font-size: 50px;
	}
`;

export const MainContainer = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	gap: 40px;
	padding: 30px;
`;

export const EventContainer = styled.li`
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	border-radius: 12px;
	background-color: rgba(0, 0, 0, 0.05);

	min-width: 300px;
	width: 330px;
	height: 300px;
`;

export const ButtonContainer = styled.ul`
	display: flex;
	justify-content: center;
	gap: 30px;
`;

export const Title = styled.p`
	margin-bottom: 4px;
	font-weight: 700;
`;

export const TitleText = styled.p`
	margin-bottom: 20px;
`;

export const LinkStyled = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 40px;
	border-radius: 12px;
	border: none;
	box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.25);
	cursor: pointer;
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
