import types from '../types';
import produce from 'immer';

const initState = {
	isCollectionsLoading: false,
	isCollectionRestaurantsLoading: false,
	collectionsFetchError: null,
	collectionRestaurantsFetchError: null,
	collections: []
};

const collectionsReducer = produce((draft, action) => {
	draft = draft || initState;
	switch(action.type) {
		case types.FETCH_RESTAURANT_COLLECTIONS_LOADING: {
			draft.isLoading = true;
			break;
		}
		case types.FETCH_RESTAURANT_COLLECTIONS_SUCCESS: {
			draft.isLoading = false;
			draft.collections = action.collections;
			draft.collectionsFetchError = null;
			break;
		}
		case types.FETCH_RESTAURANT_COLLECTIONS_FAILURE: {
			draft.isLoading = false;
			draft.collections = [];
			draft.collectionsFetchError = action.error;
			break;
		}
		case types.FETCH_RESTAURANTS_IN_COLLECTION_FOR_PAGE_LOADING: {
			draft.isCollectionRestaurantsLoading = true;
			break;
		}
		case types.FETCH_RESTAURANTS_IN_COLLECTION_FOR_PAGE_SUCCESS: {
			const collections = draft.collections;
			const collectionIndex = collections.findIndex(({name}) => name === action.collectionName);
			const collection = collections[collectionIndex];
			collection.restaurants = collection.restaurants.concat(action.restaurants);
			collection.currentPage = collection.currentPage + 1;
			draft.isCollectionRestaurantsLoading = false;
			draft.collectionRestaurantsFetchError = null;
			break;
		}
		case types.FETCH_RESTAURANTS_IN_COLLECTION_FOR_PAGE_FAILURE: {
			draft.isCollectionRestaurantsLoading = false;
			draft.collectionRestaurantsFetchError = action.error;
			break;
		}
		default:
			return draft;
	}
});

export default collectionsReducer;
