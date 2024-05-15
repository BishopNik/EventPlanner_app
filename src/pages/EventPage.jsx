/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import debounce from 'lodash.debounce';
import { fetchEvent } from 'components/Helpers';

import {
	MainTitle,
	ButtonStyled,
	DataContainer,
	EventInfoContainer,
	MemberListContainer,
	SearchContainer,
	EventDetail,
	EventDetailMain,
	SearchField,
	MemberList,
	MemberListInfo,
	MemberListInfoTitle,
	ButtonReset,
	IconClose,
} from 'components/styled.components/EventPage.styled';

function EventPage() {
	const navigate = useNavigate();
	const { event } = useParams();
	const [eventData, setEventData] = useState(null);
	const [memberList, setMemberList] = useState([
		{ name: 'qwerty', email: 'qw@qw.qw' },
		{ name: 'asdfg', email: 'as@as.as' },
		{ name: 'zxcvb', email: 'zx@zx.zx' },
		{ name: 'tyuiop', email: 'ty@tt.yy' },
	]);
	const [nameMember, setNameMember] = useState('');
	const [emailMember, setEmailMember] = useState('');

	const goBack = () => {
		navigate(-1);
	};

	const handlerReset = () => {
		setNameMember('');
		setEmailMember('');
	};

	const handlerChange = (id, value) => {
		switch (id) {
			case 'name':
				setNameMember(value);
				break;

			case 'email':
				setEmailMember(value);
				break;

			default:
				break;
		}
	};

	const debouncedHandlerChange = debounce((id, value) => handlerChange(id, value), 150);

	const onChange = ({ target: { id, value } }) => {
		debouncedHandlerChange(id, value);
	};

	useEffect(() => {
		(async () => {
			const data = await fetchEvent(event);
			if (data?.name !== 'AxiosError') {
				setEventData(data);
			} else {
				navigate('/empty');
			}
		})();
	}, [event, navigate]);

	return (
		eventData && (
			<main>
				<MainTitle>Visitor List for Event</MainTitle>
				<DataContainer>
					<li>
						<EventInfoContainer>
							<EventDetail>
								<EventDetailMain>Title:</EventDetailMain> {eventData?.title}
							</EventDetail>
							<EventDetail>
								<EventDetailMain>Price:</EventDetailMain> {eventData?.price || 0}
							</EventDetail>
							<EventDetail>
								<EventDetailMain>Start event: </EventDetailMain>
								{moment(eventData?.dates[0].start * 1000).format(
									'HH:MM DD.MM.YYYY'
								)}
							</EventDetail>
							<EventDetail>
								<EventDetailMain>End event: </EventDetailMain>
								{moment(eventData?.dates[0].end * 1000).format('HH:MM DD.MM.YYYY')}
							</EventDetail>
						</EventInfoContainer>
						<ButtonStyled type='button' onClick={goBack}>
							Back
						</ButtonStyled>
					</li>
					<MemberListContainer>
						<SearchContainer>
							<li>
								<IconClose name='filters' />
							</li>
							<li>
								<SearchField
									id='name'
									type='text'
									placeholder='member name'
									onChange={onChange}
									value={nameMember}
								/>
							</li>
							<li>
								<SearchField
									id='email'
									type='text'
									placeholder='email'
									onChange={onChange}
									value={emailMember}
								/>
							</li>
							<li>
								<ButtonReset type='button' onClick={handlerReset}>
									❌
								</ButtonReset>
							</li>
						</SearchContainer>
						<MemberList>
							{memberList
								.filter(
									member =>
										member.name.includes(nameMember) &&
										member.email.includes(emailMember)
								)
								.map((member, idx) => (
									<li key={idx}>
										<MemberListInfo>
											<MemberListInfoTitle>Name:</MemberListInfoTitle>{' '}
											{member.name}
										</MemberListInfo>
										<MemberListInfo>
											<MemberListInfoTitle>Email:</MemberListInfoTitle>{' '}
											{member.email}
										</MemberListInfo>
									</li>
								))}
						</MemberList>
					</MemberListContainer>
				</DataContainer>
			</main>
		)
	);
}

export default EventPage;
