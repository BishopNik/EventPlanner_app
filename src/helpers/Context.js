/** @format */

import React, { createContext, useState, useEffect } from 'react';
import { fetchEvents } from 'helpers';

export const MainContext = createContext();

export const Context = ({ children }) => {
	const [eventsList, setEventsList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		(async () => {
			const events = await fetchEvents(page);
			if (events?.name === 'AxiosError') {
				setError(true);
			} else {
				setTotalPages(Math.ceil(events.count / 20));
				setEventsList(prev => [...prev, ...events.results]);
			}
			setIsLoading(false);
		})();
	}, [page, setIsLoading]);

	return (
		<MainContext.Provider
			value={{
				eventsList,
				setEventsList,
				isLoading,
				setIsLoading,
				error,
				setError,
				page,
				setPage,
				totalPages,
				setTotalPages,
			}}
		>
			{children}
		</MainContext.Provider>
	);
};
