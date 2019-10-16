import React from 'react';
import CollectionsNav from '../../components/CollectionsNav';
import CollectionsGrid from '../../components/CollectionsGrid';
import RestaurantsGrid from '../../components/Grid';
import RestaurantCard from '../../components/RestaurantCard';
import { connect } from 'react-redux';
import { fetchAllRestaurantCollections, fetchRestaurantsInCollectionForPage, fetchAllRestaurants, fetchCollectionNavOptions } from '../../store/actions' ;
import { PageWrapper,
		SidebarLeft, 
		StickyBox, 
		ListWrap, 
		ContentWrapper, 
		Container,
		Grid, 
		FullWidthWrapper, 
		FullWidthHeader, 
		BigContainer, 
		LeftSideDynamicSpacing, 
		RightSideDynamicSpacing, 
		AllRestaurantsWrapper,
		AllRestaurantsHeaderWrapper,
		AllRestaurantsHeaderBox,
		AllRestaurantsHeaderLabel,
		AllRestaurantsHeaderScrollTopButton } from './styles';

class RestaurantsPage extends React.Component {
	componentDidMount() {
		this.props.fetchCollectionNavOptions();
		this.props.fetchAllRestaurantCollections();
		this.props.fetchAllRestaurants();
	}

	scrollToTop = () => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	render() {
		const {collections, allRestaurants, fetchRestaurantCollectionPage, isCollectionsLoading, isNavOptionsLoading, navOptions, isAllRestaurantsLoading} = this.props;
		return (
			<PageWrapper>
				<Container>
					<Grid>
						<SidebarLeft>
							{!isNavOptionsLoading &&
								<StickyBox style={{height: 545}}>
									<ListWrap>
										{<CollectionsNav navOptions={navOptions} />}
									</ListWrap>
								</StickyBox>
							}
						</SidebarLeft>
						<ContentWrapper>
							{!isCollectionsLoading &&
								<CollectionsGrid collections={collections} loadMoreHandler={(collectionName, page) => fetchRestaurantCollectionPage(collectionName, page)} />
							}
						</ContentWrapper>
					</Grid>
				</Container>
				<FullWidthWrapper>
					<FullWidthHeader>All Restaurants</FullWidthHeader>
					<BigContainer id='see-all-restaurants'>
						<LeftSideDynamicSpacing />
						{isAllRestaurantsLoading
							? <div>Loading...</div>
							: (
								<AllRestaurantsWrapper>
									<AllRestaurantsHeaderWrapper>
										<AllRestaurantsHeaderBox>
											<AllRestaurantsHeaderScrollTopButton onClick={this.scrollToTop} />
											<AllRestaurantsHeaderLabel>{allRestaurants.length} restaurants</AllRestaurantsHeaderLabel>
										</AllRestaurantsHeaderBox>
									</AllRestaurantsHeaderWrapper>
									{allRestaurants && allRestaurants.length 
										? <RestaurantsGrid 
											items={allRestaurants} 
											totalItems={allRestaurants.length}
											rowSize={4} 
											ItemComponent={RestaurantCard} />
										: <label>No Restaurants</label>}
								</AllRestaurantsWrapper>
							)
						}
						<RightSideDynamicSpacing />
					</BigContainer>
				</FullWidthWrapper>
			</PageWrapper>
		);
	};
}

const mapStatetoProps = (state) => {
	return {
		...state.collectionNavOptionsReducer,
		...state.collectionsReducer,
		...state.allRestaurantsReducer
	}
};
const mapDispatchToProps = (dispatch) => ({
	fetchAllRestaurantCollections: () => dispatch(fetchAllRestaurantCollections()),
	fetchRestaurantCollectionPage: (collectionName, page) => dispatch(fetchRestaurantsInCollectionForPage(collectionName, page)),
	fetchAllRestaurants: () => dispatch(fetchAllRestaurants()),
	fetchCollectionNavOptions: () => dispatch(fetchCollectionNavOptions())
});
export default connect(mapStatetoProps, mapDispatchToProps)(RestaurantsPage);
