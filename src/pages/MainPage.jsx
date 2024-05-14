/** @format */

import React, { useCallback, useContext, useEffect } from 'react';

import { MainContext, fetchEvents } from 'components/Helpers';
import Loader from 'components/Loader';
import {
	MainTitle,
	MainContainer,
	EventContainer,
	ButtonContainer,
	LinkStyled,
	Title,
	TitleText,
} from 'components/styled.components/MainPage.styled';

const MainPage = () => {
	const {
		eventsList,
		setEventsList,
		totalPages,
		setTotalPages,
		page,
		setPage,
		isLoading,
		setIsLoading,
		error,
		setError,
	} = useContext(MainContext);

	const handleScroll = useCallback(() => {
		if (
			window.innerHeight >
				document.documentElement.offsetHeight - document.documentElement.scrollTop - 50 &&
			totalPages >= page &&
			!isLoading
		) {
			setIsLoading(true);
			setPage(prevPage => prevPage + 1);
		}
	}, [isLoading, page, setIsLoading, setPage, totalPages]);

	const handlerRefresh = async () => {
		setIsLoading(true);
		const events = await fetchEvents(page);
		if (events?.name === 'AxiosError') {
			setError(true);
		} else {
			setTotalPages(Math.ceil(events.count / 20));
			setEventsList(prev => [...prev, ...events.results]);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

	return (
		<main>
			{isLoading && <Loader />}
			<MainTitle>NY Celebrations</MainTitle>
			<MainContainer>
				{eventsList?.map(({ id, title, place, location, dates }) => (
					<EventContainer key={id}>
						<Title>Title: </Title>
						<TitleText>{title}</TitleText>
						<Title>Location: </Title>
						<TitleText>
							{location?.slug} {place?.title}
						</TitleText>
						<Title>Date: </Title>
						<TitleText style={{ marginBottom: 'auto' }}>
							{dates[0].start_date} - {dates[0].end_date}
						</TitleText>
						<ButtonContainer>
							<li>
								<LinkStyled to={`/reg/${id}`}>Register</LinkStyled>
							</li>
							<li>
								<LinkStyled to={`/${id}`}>View</LinkStyled>
							</li>
						</ButtonContainer>
					</EventContainer>
				))}
			</MainContainer>
			{error && (
				<button type='button' onClick={handlerRefresh}>
					Refresh
				</button>
			)}
		</main>
	);
};

export default MainPage;
