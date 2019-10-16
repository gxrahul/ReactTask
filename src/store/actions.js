import types from './types';
import { getRestaurantCollectionsService, getAllRestaurantsService, getRestaurantsInCollectionByPageService, getCollectionNavOptions } from '../services';

const fetchAllRestaurantCollections = () => async (dispatch) => {
	dispatch(fetchAllRestaurantCollectionsLoading());
	try {
		const collections = await getRestaurantCollectionsService();
		dispatch(fetchAllRestaurantCollectionsSuccess(collections));
	} catch(ex) {
		dispatch(fetchAllRestaurantCollectionsFailure(ex));
	}
};

const fetchRestaurantsInCollectionForPage = (collectionName, page = 1) => async (dispatch) => {
	dispatch(fetchRestaurantsInCollectionForPageLoading());
	try {
		const restaurants = await getRestaurantsInCollectionByPageService(collectionName, page);
		dispatch(fetchRestaurantsInCollectionForPageSuccess(collectionName, page, restaurants));
	} catch(ex) {
		dispatch(fetchRestaurantsInCollectionForPageFailure(collectionName, page, ex));
	}
};

const fetchAllRestaurants = () => async (dispatch) => {
	dispatch(fetchAllRestaurantsLoading());
	try {
		const restaurants = await getAllRestaurantsService();
		dispatch(fetchAllRestaurantsSuccess(restaurants));
	} catch(ex) {
		dispatch(fetchAllRestaurantsFailure(ex));
	}
};

const fetchCollectionNavOptions = () => async (dispatch) => {
	dispatch(fetchCollectionNavOptionsLoading());
	try {
		const navOptions = await getCollectionNavOptions();
		dispatch(fetchCollectionNavOptionsSuccess(navOptions));
	} catch(ex) {
		dispatch(fetchCollectionNavOptionsFailure(ex));
	}
};

const fetchAllRestaurantCollectionsLoading = () => ({
	type: types.FETCH_RESTAURANT_COLLECTIONS_LOADING
});

const fetchAllRestaurantCollectionsSuccess = (collections) => ({
	type: types.FETCH_RESTAURANT_COLLECTIONS_SUCCESS,
	collections
});

const fetchAllRestaurantCollectionsFailure = (error) => ({
	type: types.FETCH_RESTAURANT_COLLECTIONS_FAILURE,
	error
});

const fetchCollectionNavOptionsLoading = () => ({
	type: types.FETCH_COLLECTION_NAV_OPTIONS_LOADING
});

const fetchCollectionNavOptionsSuccess = (navOptions) => ({
	type: types.FETCH_COLLECTION_NAV_OPTIONS_SUCCESS,
	navOptions: navOptions
});

const fetchCollectionNavOptionsFailure = (error) => ({
	type: types.FETCH_COLLECTION_NAV_OPTIONS_FAILURE,
	error: error
});

const fetchRestaurantsInCollectionForPageLoading = () => ({
	type: types.FETCH_RESTAURANTS_IN_COLLECTION_FOR_PAGE_LOADING
});

const fetchRestaurantsInCollectionForPageSuccess = (collectionName, page, restaurants) => ({
	type: types.FETCH_RESTAURANTS_IN_COLLECTION_FOR_PAGE_SUCCESS,
	collectionName,
	page,
	restaurants
});

const fetchRestaurantsInCollectionForPageFailure = (collectionName, page, error) => ({
	type: types.FETCH_RESTAURANTS_IN_COLLECTION_FOR_PAGE_FAILURE,
	collectionName,
	page,
	error
});

const fetchAllRestaurantsLoading = () => ({
	type: types.FETCH_ALL_RESTAURANTS_LOADING
});

const fetchAllRestaurantsSuccess = (restaurants) => ({
	type: types.FETCH_ALL_RESTAURANTS_SUCCESS,
	restaurants
});

const fetchAllRestaurantsFailure = (error) => ({
	type: types.FETCH_ALL_RESTAURANTS_FAILURE,
	error
});

export {
	fetchAllRestaurantCollections,
	fetchRestaurantsInCollectionForPage,
	fetchAllRestaurants,
	fetchCollectionNavOptions
};
