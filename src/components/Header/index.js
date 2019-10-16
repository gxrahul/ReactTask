import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const A = styled.a`
	color: #41addd;

	&:hover {
	color: #6cc0e5;
	}
`;

const NavBar = styled.div`
	max-width: 1200px;
    min-width: 1200px;
    position: relative;
    margin: 0 auto;
    height: 80px;
    background: #fff;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
`;

const AppName = styled.h2`
	margin-left: 15px;
	display: inline-block;
`;

const StyledHeader = styled.header`
    box-shadow: 0 15px 40px -20px rgba(40,44,63,.15);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: #fff;
    z-index: 1000;
    will-change: transform;
    transform: translateZ(0);
    transition: transform .3s ease;
    contain: size layout style;
    padding: 0 20px;
`;

function Header() {
	return (
		<StyledHeader>
			<NavBar>
				<A href="/">
					<Logo />
				</A>
				<AppName>Swiggy</AppName>
			</NavBar>
		</StyledHeader>
	);
}

export default Header;
