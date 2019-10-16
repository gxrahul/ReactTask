import React from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import RestaurantsPage from './containers/RestaurantsPage';
import { Provider } from 'react-redux';
import store from './store';

const AppWrapper = styled.div`
	position: relative;
    padding-top: 80px;
    min-height: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 1240px;
`;

function App() {
  return (
    <AppWrapper className="fonts-loaded">
		<Provider store={store}>
			<Header />
			<RestaurantsPage />
		</Provider>
    </AppWrapper>
  );
}

export default App;
