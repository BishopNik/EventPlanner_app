/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { Context } from 'components/Helpers';
import { GlobalStyle } from 'components/Helpers/GlobalStyle';
import 'modern-normalize';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<BrowserRouter basename='/'>
		<Context>
			<App />
			<Toaster
				position='top-right'
				reverseOrder={false}
				gutter={8}
				toastOptions={{
					duration: 5000,
					style: {
						background: '#fdfbea',
						color: '#000000',
					},
				}}
			/>
			<GlobalStyle />
		</Context>
	</BrowserRouter>
	// </React.StrictMode>
);
