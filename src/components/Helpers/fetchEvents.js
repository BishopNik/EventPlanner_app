/** @format */

import axios from 'axios';
import { toastError } from './toastwindow';

axios.defaults.baseURL = 'https://kudago.com/public-api/v1.4/events';

export const fetchEvents = async page => {
	try {
		const eventsList = await axios.get(
			`/?lang=en&location=new-york&page=${page}&expand=place,location,dates&fields=id,place,location,dates,title`
		);
		return eventsList.data;
	} catch (error) {
		toastError('Error loading events');
		return error;
	}
};

export const fetchEvent = async id => {
	try {
		const eventsList = await axios.get(`/${id}/?lang=en`);
		return eventsList.data;
	} catch (error) {
		toastError('Error loading events');
		return error;
	}
};
