/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import debounce from 'lodash.debounce';
import { fetchEvent } from 'helpers';

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
	ButtonBox,
} from 'components/styled.components/EventPage.styled';
import { fetchMembers } from 'helpers/fetchMembers';

function EventPage() {
	const navigate = useNavigate();
	const { event } = useParams();
	const [eventData, setEventData] = useState(null);
	const [memberList, setMemberList] = useState([]);
	const [nameMember, setNameMember] = useState('');
	const [emailMember, setEmailMember] = useState('');

	const goHome = () => {
		navigate('/');
	};

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

	const debouncedHandlerChange = debounce((id, value) => handlerChange(id, value), 100);

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

	useEffect(() => {
		fetchMembers(event).then(data => setMemberList(data));
	}, [event]);

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
						<ButtonBox>
							<ButtonStyled type='button' onClick={goHome}>
								Home
							</ButtonStyled>
							<ButtonStyled type='button' onClick={goBack}>
								Back
							</ButtonStyled>
						</ButtonBox>
					</li>
					<MemberListContainer>
						<ul>
							<SearchContainer>
								<IconClose name='filters' />
								<SearchField
									id='name'
									type='text'
									placeholder='member name'
									onChange={onChange}
									value={nameMember}
									disabled={!memberList.length}
								/>
								<SearchField
									id='email'
									type='text'
									placeholder='email'
									onChange={onChange}
									value={emailMember}
									disabled={!memberList.length}
								/>
								<ButtonReset type='button' onClick={handlerReset}>
									❌
								</ButtonReset>
							</SearchContainer>
							<li>
								<MemberList>
									{memberList
										.filter(
											member =>
												member.name
													.toLowerCase()
													.includes(nameMember.toLowerCase()) &&
												member.email
													.toLowerCase()
													.includes(emailMember.toLowerCase())
										)
										.map((member, idx) => (
											<li key={idx}>
												<MemberListInfo>
													<MemberListInfoTitle>Name:</MemberListInfoTitle>{' '}
													{member.name}
												</MemberListInfo>
												<MemberListInfo>
													<MemberListInfoTitle>
														Email:
													</MemberListInfoTitle>{' '}
													{member.email}
												</MemberListInfo>
											</li>
										))}
								</MemberList>
							</li>
						</ul>
					</MemberListContainer>
				</DataContainer>
			</main>
		)
	);
}

export default EventPage;
