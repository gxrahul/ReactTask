import React from 'react';
import CollectionsList from '../CollectionsList';

export default function({collections, ...rest}) {
	console.log('collectionsGrid render');
	return collections.map((collection) => {
		return <CollectionsList key={collection.id} {...collection} {...rest} />
	})
}
