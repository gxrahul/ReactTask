import React from 'react';
import CollectionsList from '../CollectionsList';

export default function({collections, ...rest}) {
	return collections.map((collection) => {
		return <CollectionsList key={collection.id} {...collection} {...rest} />
	})
}
