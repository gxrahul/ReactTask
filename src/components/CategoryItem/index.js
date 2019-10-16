import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    height: 85px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-direction: column;
    flex-direction: column;
	&.active: {
		background-color: #e46d47;
    	color: #fff;
	}
`;
const ItemWrap = styled.div`
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
`;
const CatImageWrap = styled.div`
	margin-right: 15px;
    width: 45px;
    height: 45px;
    background: #eef0f5;
	border-radius: 50%;
`;
const CatImage = styled.img`
	color: #b2c0c7;
    width: inherit;
    text-align: center;
    height: inherit;
    display: block;
	border-radius: 90px;
	border-style: none;
    transition: transform .5s cubic-bezier(.215,.61,.355,1);
`;
const CatInfo = styled.div``;
const CatName = styled.div`
	font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
`;
const CatCount = styled.div`
    opacity: .8;
    font-size: 10px;
    margin-top: 2px;
    text-transform: uppercase;
`;

export default function(props) {
	return (
		<ItemContainer>
			<ItemWrap>
				<CatImageWrap>
					<CatImage src={props.isActiveCat ? props.activeImage : props.image} />
				</CatImageWrap>
				<CatInfo>
					<CatName>{props.name}</CatName>
					<CatCount>{props.count} OPTIONS</CatCount>
				</CatInfo>
			</ItemWrap>
		</ItemContainer>
	);
}
