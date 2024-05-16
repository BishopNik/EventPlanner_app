/** @format */

import React from 'react';
import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import { ChartContainer } from './Chart.styled';

function Chart({ memberList }) {
	const getLastNDates = n => {
		const statistics = {};

		memberList.forEach(({ createdAt }) => {
			const day = createdAt.slice(0, 10);
			if (statistics.hasOwnProperty(day)) {
				statistics[day] += 1;
			} else {
				statistics[day] = 1;
			}
		});

		const keys = Object.keys(statistics);

		const lastNKeys = keys.sort((a, b) => new Date(b) - new Date(a)).slice(0, n);

		const result = [];
		lastNKeys.forEach(key => {
			result.push({
				name: key,
				member: statistics[key],
			});
		});

		return result;
	};

	const last7DatesStatistics = getLastNDates(7);

	return (
		<ChartContainer>
			<ResponsiveContainer width='100%' height='100%'>
				<BarChart
					data={last7DatesStatistics}
					margin={{
						top: 5,
						right: 30,
						left: 0,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis tickCount={3} />
					<Tooltip />
					<Legend />
					<Bar
						dataKey='member'
						fill='#3668fe'
						activeBar={<Rectangle fill='gold' stroke='purple' />}
					/>
				</BarChart>
			</ResponsiveContainer>
		</ChartContainer>
	);
}

export default Chart;
