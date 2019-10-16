import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import collectionsReducer from './reducers/collections';
import allRestaurantsReducer from './reducers/allRestaurants';
import collectionNavOptionsReducer from './reducers/collectionNavOptions';

const rootReducer = combineReducers({
	collectionsReducer,
	allRestaurantsReducer,
	collectionNavOptionsReducer
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
