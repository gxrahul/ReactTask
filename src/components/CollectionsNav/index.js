import React, { useState } from 'react';
import CategoryItem from '../CategoryItem';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const ScrollableCategoryList = styled.div`
	margin-right: -15px;
	padding-right: 15px;
    overflow-x: hidden;
    overflow-y: scroll;
`;

const ListItemWrap = styled.div`
	margin-right: -15px;
	padding-right: 15px;
`;

const ListItem = styled(Link)`
	cursor: pointer;
	text-decoration: none;
	background-color: transparent;
    height: 85px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-direction: column;
    flex-direction: column;
    color: #535665;
	padding: 0 20px;
	&.active {
		text-decoration: none;
		background-color: #e46d47;
    	color: #fff;
	}
`;

export default function(props) {
	const [activeCat, setActiveCat] = useState('popular-brands');
	return (
		<ScrollableCategoryList>
			{props.navOptions && props.navOptions.length ?
				(
					props.navOptions.map(cat => 
						(
							<ListItemWrap key={cat.id}>
								<ListItem 
									to={cat.id}
									activeClass="active"
									spy={true}
									smooth={true}
									duration={500}
									offset={-140}
									onSetActive={() => {setActiveCat(cat.id)}}
								>
									<CategoryItem {...cat} isActiveCat={cat.id === activeCat} />
								</ListItem>
							</ListItemWrap>
						)
					)
				)
				:
				<label>No Categories</label>
			}
		</ScrollableCategoryList>
	);
}
