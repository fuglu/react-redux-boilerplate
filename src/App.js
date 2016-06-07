import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './redux/store';
import IndexContainer from './containers/IndexContainer';

import './core.scss';

const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={IndexContainer} />
		</Router>
	</Provider>
);

export default App;
