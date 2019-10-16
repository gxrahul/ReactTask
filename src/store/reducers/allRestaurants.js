import types from '../types';
import produce from 'immer';

const initState = {
	isAllRestaurantsLoading: false,
	allRetaurantsFetchError: null,
	allRestaurants: []
};

const allRestaurantsReducer = produce((draft, action) => {
	draft = draft || initState;
	switch(action.type) {
		case types.FETCH_ALL_RESTAURANTS_LOADING: {
			draft.isAllRestaurantsLoading = true;
			break;
		}
		case types.FETCH_ALL_RESTAURANTS_SUCCESS: {
			draft.isAllRestaurantsLoading = false;
			draft.allRestaurants = action.restaurants;
			draft.allRetaurantsFetchError = null;
			break;
		}
		case types.FETCH_ALL_RESTAURANTS_FAILURE: {
			draft.isAllRestaurantsLoading = false;
			draft.allRestaurants = [];
			draft.allRetaurantsFetchError = action.error;
			break;
		}
		default:
			return draft;
	}
});

export default allRestaurantsReducer;
