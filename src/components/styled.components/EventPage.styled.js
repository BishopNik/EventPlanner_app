/** @format */

import styled from 'styled-components';
import Icon from 'components/Icon';

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

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export const ButtonBox = styled.div`
	display: flex;
	gap: 30px;
`;

export const ButtonStyled = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 20px;
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
		height: 30px;
	}
`;

export const EventInfoContainer = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 20px;
	min-width: 300px;
	margin-bottom: 30px;
	padding: 20px;
	border: 1px solid black;
	border-radius: 12px;
	background-color: rgba(0, 0, 0, 0.05);
`;

export const MemberListContainer = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 20px;
	padding: 20px;
`;

export const SearchContainer = styled.li`
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 20px;
`;

export const EventDetail = styled.li`
	font-size: 18px;
`;

export const EventDetailMain = styled.p`
	font-weight: 600;
`;

export const SearchField = styled.input`
	width: 250px;
	height: 40px;
	padding: 0 10px;
	border-radius: 8px;
	border: 1px solid black;
	font-size: 18px;
`;

export const MemberList = styled.ol`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 15px;
	margin-left: 40px;
	font-size: 20px;
`;

export const MemberListInfo = styled.span`
	display: flex;
	gap: 5px;
	margin-bottom: 5px;
`;

export const MemberListInfoTitle = styled.span`
	font-weight: 600;
`;

export const ButtonReset = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 38px;
	height: 38px;

	border-radius: 8px;
	border: 0.5px solid black;
	cursor: pointer;

	&:hover {
		background-color: blanchedalmond;
	}
`;

export const IconClose = styled(Icon)`
	width: 24px;
	height: 24px;
	stroke: black;
`;

export const ChartContainer = styled.div`
	margin-bottom: 30px;
`;

export const ChartTitle = styled.h2`
	text-align: center;
`;
