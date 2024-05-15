/** @format */

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';

export const MainTitle = styled.h1`
	margin: 40px auto;
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
	height: 320px;
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
	margin-bottom: 10px;
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

export const SortContainer = styled.label`
	position: relative;
	display: flex;
	align-items: center;
	gap: 25px;
	width: 330px;
	height: 50px;
	margin-left: auto;
	margin-right: 5%;
	font-size: 20px;
`;

export const SortSelect = styled.select`
	width: 230px;
	height: 50px;
	padding: 10px;
	border-radius: 8px;
	cursor: pointer;
`;

export const SortText = styled.span`
	font-size: 20px;
	font-weight: 600;
`;

export const ButtonClear = styled.button`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	border: none;
	right: 25px;
`;

export const IconClear = styled(Icon)`
	width: 18px;
	height: 18px;
	stroke: black;
	cursor: pointer;

	&:hover {
		stroke: red;
	}
`;
