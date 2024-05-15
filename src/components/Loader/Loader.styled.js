/** @format */

import styled from 'styled-components';

export const LoaderBox = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 200px;
	height: 200px;
	padding: 10px;
	top: 30%;
	left: 50%;
	transform: translate(-50%);
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.2);
`;
