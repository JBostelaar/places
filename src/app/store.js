import { combineReducers, createStore } from 'redux';
import * as appReducers from 'app/reducers';

export default createStore(combineReducers({
	...appReducers,
}), typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f);
