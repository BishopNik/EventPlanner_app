/** @format */

import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';

const MainPage = lazy(() => import('pages/MainPage'));
const EventPage = lazy(() => import('pages/EventPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const UnknownPage = lazy(() => import('pages/UnknownPage'));

function App() {
	return (
		<Routes>
			<Route path='/' element={<SharedLayout />}>
				<Route index path='/' element={<MainPage />} />
				<Route path='/:event' element={<EventPage />} />
				<Route path='/reg/:event' element={<RegisterPage />} />
				<Route path='*' element={<UnknownPage />} />
			</Route>
		</Routes>
	);
}

export default App;
