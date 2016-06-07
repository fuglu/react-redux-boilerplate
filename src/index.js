import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const ROOT = document.getElementById('app');

ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	ROOT
);

if (__DEVELOPMENT__ && module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default; // eslint-disable-line global-require
		ReactDOM.render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			ROOT
		);
	});
}
