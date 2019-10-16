import React from 'react';
import styled from 'styled-components';

const ClickableWrap = styled.a`
    background: #fff;
    display: block;
    text-decoration: none;
    color: inherit;
	margin: -20px -20px -41px;
	position: relative;
	&:focus, &:hover, &:visited {
		text-decoration: none;
	}
`;
const CardBox = styled.div`
    padding: 20px 20px 57px;
    border: 1px solid #fff;
	contain: content;
	position: relative;
	&:hover {
		border-color: #d3d5df;
    	box-shadow: 0 4px 7px 0 rgba(218,220,230,.6);
	}
`;
const CardContent = styled.div`
	position: relative;
	width: 254px;
`;
const CardImageWrap = styled.div`
	background: #eef0f5;
    width: 254px;
    height: 160px;
    position: relative;
`;
const CardImage = styled.img`
	opacity: 1;
	transition: opacity .3s ease-out;
	border-style: none;
	&:after {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(40,44,63,.05);
		content: "";
		background-blend-mode: overlay;
	}
`;
const ExclusiveRibbon = styled.div`
	background: rgb(250, 74, 91);
    color: rgb(255, 255, 255);
	border-color: rgb(209, 42, 59) transparent;
	position: absolute;
    left: -8px;
    top: 0;
    background-color: #8a584b;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    padding: 5px 9px 4px;
    max-width: 50%;
    text-transform: uppercase;
	border-color: #8a584b;
	&:before {
		position: absolute;
		bottom: -9px;
		content: "";
		width: 0;
		height: 0;
		border-style: solid;
		border-color: inherit;
		left: 0;
		border-width: 9px 0 0 9px;
	};
	background: rgb(250, 74, 91);
    color: rgb(255, 255, 255);
    border-color: rgb(209, 42, 59) transparent;
`;
const RibbonText = styled.div`
	text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
const RestaurantTextWrap = styled.div`
	margin-top: 14px;
`;
const RestaurantName = styled.div`
	font-size: 17px;
    font-weight: 500;
    word-break: break-word;
`;
const RestaurantCuisines = styled.div`
	color: #686b78;
    font-size: 13px;
    margin-top: 4px;
`;
const RestaurantDetailsWrap = styled.div`
	display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
	align-items: center;
	margin-top: 18px;
    font-size: 12px;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: #535665;
`;
const RestaurantRating = styled.div`
	height: 20px;
    width: 43px;
    padding: 0 5px;
	font-weight: 400;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
`;
const RestaurantRatingWithColor = styled(RestaurantRating)`
	${props => {
		const rating = (props.rating && parseInt(props.rating)) || 0;
		let [color, backgroundColor] = rating === 0 ? ['#000', '#FFF'] : (rating < 3 ? ['#FFF', '#e1b055'] : (rating > 3 ? ['#FFF', '#48c479'] : ['#FFF', '#db7c38']));
		return `
			color: ${color};
			background-color: ${backgroundColor};
		`;
	}};
`;
const IconStar = styled.span`
    font-size: 10px;
    margin-right: 4px;
    position: relative;
    top: -1px;
`;
const DeliveryTime = styled.div`
	text-transform: uppercase;
`;
const Price = styled.div`
	text-transform: uppercase;
`;

export default function(props) {
	// console.log('restaurant card', props);
	return (
		<ClickableWrap>
			<CardBox>
				<CardContent>
					<CardImageWrap>
						<CardImage src={props.image} alt={props.name} width={254} height={160} />
					</CardImageWrap>
					{props.isExlusive && (<ExclusiveRibbon><RibbonText>Exclusive</RibbonText></ExclusiveRibbon>)}
					<RestaurantTextWrap>
						<RestaurantName>{props.name}</RestaurantName>
						<RestaurantCuisines>{props.food_types.join(', ')}</RestaurantCuisines>
					</RestaurantTextWrap>
					<RestaurantDetailsWrap>
						<RestaurantRatingWithColor rating={props.ratings}>
							<IconStar className="icon-star" />
							<span>{props.ratings || '--'}</span>
						</RestaurantRatingWithColor>
						<div>•</div>
						<DeliveryTime>{props.delivery_time}</DeliveryTime>
						<div>•</div>
						<Price>{`₹${props.price_for_two} FOR TWO`}</Price>
					</RestaurantDetailsWrap>
				</CardContent>
			</CardBox>
		</ClickableWrap>
	);
}
