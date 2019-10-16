import types from '../types';
import produce from 'immer';

const initState = {
	navOptionsIsLoading: false,
	navOptions: [],
	navOptionsFetchError: null
};

const collectionNavOptionsReducer = produce((draft, action) => {
	draft = draft || initState;
	switch(action.type) {
		case types.FETCH_COLLECTION_NAV_OPTIONS_LOADING:
			draft.navOptionsIsLoading = true;
			break;
		case types.FETCH_COLLECTION_NAV_OPTIONS_SUCCESS:
			draft.navOptionsIsLoading = false;
			draft.navOptions = action.navOptions;
			draft.navOptionsFetchError = null;
			break;
		case types.FETCH_COLLECTION_NAV_OPTIONS_FAILURE:
			draft.navOptionsIsLoading = false;
			draft.navOptions = [];
			draft.navOptionsFetchError = action.error;
			break;
		default:
			return draft;
	}
});

export default collectionNavOptionsReducer;
