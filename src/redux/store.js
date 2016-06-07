import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const initialState = {};
const store = createStore(rootReducer, initialState, compose(
	applyMiddleware(thunk),
	__DEVELOPMENT__ && window.devToolsExtension ? window.devToolsExtension() : f => f,
));

if (__DEVELOPMENT__ && module.hot) {
	module.hot.accept('./rootReducer', () =>
		store.replaceReducer(require('./rootReducer').default) // eslint-disable-line global-require
	);
}

export default store;
