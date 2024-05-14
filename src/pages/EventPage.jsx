/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import {
	MainTitle,
	ButtonStyled,
	DataContainer,
} from 'components/styled.components/EventPage.styled';
import { fetchEvent } from 'components/Helpers';

function EventPage() {
	const navigate = useNavigate();
	const { event } = useParams();
	const [eventData, setEventData] = useState(null);

	const goBack = () => {
		navigate(-1);
	};

	useEffect(() => {
		(async () => {
			const data = await fetchEvent(event);
			if (data?.name !== 'AxiosError') {
				setEventData(data);
			}
		})();
	}, [event]);

	return (
		<main>
			<MainTitle>Visitor List for Event</MainTitle>
			<DataContainer>
				<li>
					<p>Title: {eventData?.title}</p>
					<p>Price: {eventData?.price || 0}</p>
					<p>
						Start event:{' '}
						{moment(eventData?.dates[0].start * 1000).format('HH:MM DD.MM.YYYY')}
					</p>
					<p>
						End event:{' '}
						{moment(eventData?.dates[0].end * 1000).format('HH:MM DD.MM.YYYY')}
					</p>
					<ButtonStyled type='button' onClick={goBack}>
						Back
					</ButtonStyled>
				</li>
				<li>
					<p style={{ marginBottom: '30px' }}>here maplist user</p>
				</li>
			</DataContainer>
		</main>
	);
}

export default EventPage;
