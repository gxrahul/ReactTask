import React from 'react';
import styled from 'styled-components';
import Grid from '../Grid';
import RestaurantCard from '../RestaurantCard';

const CollectionContainer = styled.div`
	margin-top: 60px;
    padding-bottom: 10px;
    border-bottom: 1px dashed #bebfc5;
`;
const CollectionName = styled.div`
	font-size: 28px;
	font-weight: 600;
`;


export default function(props) {
	console.log('restaurant list', props.name, props.restaurants.length);
	return (
		<CollectionContainer id={props.id}>
			<CollectionName>{props.name.split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ')}</CollectionName>
			{props.restaurants.length 
				? <Grid 
					items={props.restaurants} 
					totalItems={props.count}
					loadMoreItemsHandler={(page) => props.loadMoreHandler(props.name, page)}
					currentPage={props.currentPage}
					rowSize={3} 
					ItemComponent={RestaurantCard} />
				: <label>No Restaurants</label>}
		</CollectionContainer>
	);
}
