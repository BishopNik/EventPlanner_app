/** @format */

import { useNavigate } from 'react-router-dom';
import { MainTitle, GoBack } from 'components/styled.components/UnknownPage.styled';

const UnknownPage = () => {
	const navigate = useNavigate();
	return (
		<main>
			<MainTitle>Ups... Event not found.</MainTitle>
			<GoBack onClick={() => navigate('/')}>{'Back'}</GoBack>
		</main>
	);
};

export default UnknownPage;
