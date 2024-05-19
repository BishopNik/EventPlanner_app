/** @format */

import axios from 'axios';
import { toastError } from './toastwindow';

const kudagoAPI = axios.create({
	baseURL: 'https://eventplanner-api.onrender.com/api/events',
});

export const fetchEvents = async page => {
	try {
		const eventsList = await kudagoAPI.get(
			`/?lang=en&location=new-york&page=${page}&expand=place,location,dates,title,favorites_count&fields=id,place,location,dates,title,favorites_count`
		);
		return eventsList.data;
	} catch (error) {
		toastError('Error loading events');
		return error;
	}
};

export const fetchEvent = async id => {
	try {
		const eventsList = await kudagoAPI.get(`/${id}/?lang=en`);
		return eventsList.data;
	} catch (error) {
		toastError('Error loading events');
		return error;
	}
};
