import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
	margin-top: 50px;
`;
const Row = styled.div`
    margin-bottom: 85px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
`;
const Column = styled.div`
	position: relative;
`;
const ButtonStyled = styled.button`
	font-size: 24px;
	width: 254px;
    height: 250px;
    background-color: #fff;
    border: 2px solid #e46d47;
    color: #e46d47;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-direction: column;
    flex-direction: column;
    cursor: pointer;
	font-weight: 600;
	:hover {
		position: relative;
    	box-shadow: 0 4px 14px #d4d5d9;
	}
`;

const LoadMoreButton = ({totalItems, currentItemsCount, currentPage, loadMoreItemsHandler}) => {
	return (<ButtonStyled onClick={() => loadMoreItemsHandler(currentPage+1)}>
		+{totalItems - currentItemsCount + 1} More
	</ButtonStyled>)
};

const toMatrix = (items, rowSize, totalItems) => {
	const currentItems = [...items];
	if(totalItems - currentItems.length > 0) {
		currentItems.pop();
		currentItems.push({type: 'loadMoreButton'});
	}
	return currentItems.reduce((rows, item, index) => {
		if(index % rowSize === 0) {
			rows.push([item]);
		} else {
			rows[rows.length - 1].push(item);
		}
		return rows;
	}, []);
};

export default function ({items, totalItems, loadMoreItemsHandler, currentPage, rowSize, ItemComponent}) {
	const matrix = toMatrix(items, rowSize, totalItems);
	return (
		<GridContainer>
			{matrix.map((columns, rowIndex) => (
				<Row key={rowIndex}>
					{columns.map((item, colIndex) => (
						<Column key={`${rowIndex}-${colIndex}`}>
							{item.type && item.type === 'loadMoreButton' 
							? <LoadMoreButton 
								totalItems={totalItems}
								currentItemsCount={items.length}
								currentPage={currentPage}
								loadMoreItemsHandler={loadMoreItemsHandler} />
							: <ItemComponent {...item}/>}
						</Column>
					))}
				</Row>
			))}
		</GridContainer>
	);
}
