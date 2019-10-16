import data from '../data/reactTask.json';

const DUMMY_DELAY = 1000;

const images = [
	"https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=60",
];
const collectionImages = {
		'popular brands': {
			image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/qkbyzhviwgbln6prgs1h',
			activeImage: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/vvjryrguwlfd6m0v3yrr',
		},
		'offers near you': {
			image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/urw8usdf4mk9aywd59gq',
			activeImage: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/eyperwsfhaoa5vktjtu4',
		},
		'Express delivery': {
			image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/ya8lufmwtt5phveplfli',
			activeImage: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/kck7rng1zt7ixhvmcoza',
		},
		'Gourmet': {
			image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/hxizld3pqhnk0smw27sl',
			activeImage: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/niuxuv25rqkboowdazqx',
		},
		'Only On Swiggy': {
			image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/y4vnumwu4f8olsly1hnw',
			activeImage: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/tvjhvfzjhbxune2idler',
		},
		'See All': {
			image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/See_all_cj8kln',
			activeImage: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/See_all_cj8kln'
		}
};

const allRestaurants = [];
const restaurantCollections = [];
const collectionNavOptions = [];
data.forEach(cat => {
	let catRestaurants = [];
	cat.restaurantList.forEach(restaurant => {
		let newRestaurant = allRestaurants.find(({name}) => name === restaurant.name);
		if(!newRestaurant) {
			const randIndex = Math.floor(Math.random() * (images.length));
			const image = images[randIndex];
			newRestaurant = {
				...restaurant,
				id: (allRestaurants.length + 1),
				image
			};
			allRestaurants.push(newRestaurant);
		}
		catRestaurants.push(newRestaurant);
	});
	collectionNavOptions.push({
		name: cat.category,
		id: cat.category.toLowerCase().replace(' ', '-'),
		count: catRestaurants.length,
		image: collectionImages[cat.category].image,
		activeImage: collectionImages[cat.category].activeImage,
	});
	restaurantCollections.push({
		name: cat.category,
		id: cat.category.toLowerCase().replace(' ', '-'),
		count: catRestaurants.length,
		image: collectionImages[cat.category].image,
		activeImage: collectionImages[cat.category].activeImage,
		restaurants: catRestaurants
	});
});

// add exclusive to collectionNavOptions and collections
const onlyOnSwiggyCollection = {
	name: 'Only On Swiggy',
	id: 'only-on-swiggy',
	count: 0,
	image: collectionImages['Only On Swiggy'].image,
	activeImage: collectionImages['Only On Swiggy'].activeImage	
};
collectionNavOptions.push(onlyOnSwiggyCollection);
restaurantCollections.push({
	...onlyOnSwiggyCollection,
	restaurants: []
});
allRestaurants.forEach(restaurant => {
	if(restaurant.isExlusive) {
		restaurantCollections[restaurantCollections.length - 1].restaurants.push(restaurant);
	}
});
const totalExclusiveRestaurants = restaurantCollections[restaurantCollections.length - 1].restaurants.length;
restaurantCollections[restaurantCollections.length - 1].count = totalExclusiveRestaurants;
collectionNavOptions[collectionNavOptions.length - 1].count = totalExclusiveRestaurants;

// push all restaurants to nav
collectionNavOptions.push({
	name: 'See All',
	id: 'see-all-restaurants',
	count: allRestaurants.length,
	image: collectionImages['See All'].image,
	activeImage: collectionImages['See All'].activeImage
});

export const getCollectionNavOptions = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(collectionNavOptions);
		}, 0);
	});
}

export const getRestaurantCollectionsService = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const rsp = restaurantCollections.map((collection) => {
				const end = collection.restaurants.length >= 6 ? 6 : collection.restaurants.length;
				return {
					...collection,
					restaurants: collection.restaurants.slice(0, end),
					currentPage: 1
				};
			});
			resolve(rsp);
		}, DUMMY_DELAY);
	});
};

export const getRestaurantsInCollectionByPageService = (collectionName, page = 1) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const collection = restaurantCollections.find(({name}) => name === collectionName);
			const start = (page - 1) * 6;
			const end = start + (collection.restaurants.length >= (start+6) ? 6 : collection.restaurants.length);
			const restaurants = collection.restaurants.slice(start, end);
			resolve(restaurants);
		}, DUMMY_DELAY);
	});
};

export const getAllRestaurantsService = (page = 1) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', allRestaurants);
			resolve(allRestaurants);
		}, DUMMY_DELAY);
	});
};
