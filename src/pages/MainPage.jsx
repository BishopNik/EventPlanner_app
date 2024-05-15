/** @format */

import React, { useState, useCallback, useContext, useEffect } from 'react';

import { MainContext, fetchEvents } from 'helpers';
import Loader from 'components/Loader';
import {
	MainTitle,
	MainContainer,
	EventContainer,
	ButtonContainer,
	LinkStyled,
	Title,
	TitleText,
	SortContainer,
	SortSelect,
	SortText,
	ButtonClear,
	IconClear,
	ButtonBox,
	ButtonRefresh,
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
	const [sortKey, setSortKey] = useState('');

	const changeSortValue = ({ target: { value } }) => setSortKey(value);

	const sortEventsList = () => {
		if (!sortKey) {
			return [...eventsList];
		}

		return [...eventsList]?.sort((m1, m2) => {
			switch (sortKey) {
				case 'title':
					return m1.title.localeCompare(m2.title);
				case 'location':
					return m1.place?.title.localeCompare(m2.place?.title);
				case 'favorites':
					return m2.favorites_count - m1.favorites_count;
				case 'date':
					return new Date(m1.dates[0].start_date) - new Date(m2.dates[0].start_date);

				default:
					return 0;
			}
		});
	};

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
			<SortContainer>
				<SortText>Sort by:</SortText>
				<SortSelect id='sort' onChange={changeSortValue} value={sortKey}>
					<option value=''>------</option>
					<option value='title'>Title</option>
					<option value='location'>Location</option>
					<option value='favorites'>Favorites</option>
					<option value='date'>Start Date</option>
				</SortSelect>
				{sortKey && (
					<ButtonClear type='button' onClick={() => setSortKey('')}>
						<IconClear name='close' />
					</ButtonClear>
				)}
			</SortContainer>
			<MainContainer>
				{sortEventsList().map(({ id, title, place, location, dates, favorites_count }) => (
					<EventContainer key={id}>
						<Title>Title: </Title>
						<TitleText>{title}</TitleText>
						<Title>Location: </Title>
						<TitleText>
							{place?.title} {location?.name}
						</TitleText>
						<Title>Favorites: </Title>
						<TitleText>{favorites_count}</TitleText>
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
				<ButtonBox>
					<ButtonRefresh type='button' onClick={handlerRefresh}>
						Refresh
					</ButtonRefresh>
				</ButtonBox>
			)}
		</main>
	);
};

export default MainPage;
