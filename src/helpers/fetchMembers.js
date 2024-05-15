/** @format */

import axios from 'axios';
import { toastError } from './index';

const eventPlannerAPI = axios.create({
	baseURL: 'https://eventplanner-api.onrender.com',
});

export const fetchMembers = async event => {
	try {
		const eventsList = await eventPlannerAPI.get(`/api/event/${event}`);
		return eventsList.data;
	} catch (error) {
		toastError(error.message);
		return error;
	}
};

export const registerMember = async body => {
	try {
		const eventsList = await eventPlannerAPI.post(`/api/register`, body);
		return eventsList.data;
	} catch (error) {
		toastError(error.message);
		return error;
	}
};
