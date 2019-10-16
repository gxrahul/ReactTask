import styled from 'styled-components';

const PageWrapper = styled.div`
	height: 100%;
`;

const SidebarLeft = styled.div`
	width: 254px;
	position: relative;
`;

const Sticky = styled.div`
	box-shadow: 0 2px 4px 0 rgba(48,56,97,.2);
    padding-top: 35px;
	max-height: calc(100vh - 170px);
    position: relative;
    position: -webkit-sticky;
    position: sticky;
	top: 80px;
    height: calc(100vh - 100px);
    max-height: calc(100vh - 100px);
    margin-bottom: 100px;
    overflow: hidden;
    contain: strict;
`;

const StickyBox = styled(Sticky)`
	top: 150px;
    height: calc(100vh - 170px);
	max-height: calc(100vh - 170px);
`;

const ListWrap = styled.div`
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
`;

const ContentWrapper = styled.div`
	width: 70%;
	padding: 10px;
	padding-top: 0;
	padding-left: 60px;
	ms-flex: 1;
	flex: 1;
	contain: layout;
`;

const Container = styled.div`
	max-width: 1200px;
	min-width: 1200px;
	margin: 0 auto;
`;

const Grid = styled.div`
    display: -ms-flexbox;
    display: flex;
`;

const FullWidthWrapper = styled.div`
	background: #ec6f5b;
    min-height: calc(100vh - 368px);
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    z-index: 2;
`;

const FullWidthHeader = styled.div`
	height: 190px;
    background: inherit;
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    margin: auto;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-transform: uppercase;
    cursor: pointer;
    contain: strict;
`;

const BigContainer = styled.div`
	width: 1300px;
    margin: 0 auto;
    max-width: 100%;
	position: relative;
	background: #fff;
`;

const LeftSideDynamicSpacing = styled.div`
    width: calc(((100vw - 1300px) / 2) + 2px);
    height: 100%;
    position: absolute;
    top: 0;
    left: 1px;
    background: #fff;
    opacity: 0;
    z-index: 1;
    will-change: opacity;
    transition: opacity .3s ease;
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
`;

const RightSideDynamicSpacing = styled.div`
    width: calc(((100vw - 1300px) / 2) + 2px);
    min-width: 1px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    background: #fff;
    opacity: 0;
    z-index: 1;
    transition: opacity .3s ease-out;
    will-change: opacity;
    -ms-transform: translateX(100%);
    transform: translateX(100%);
`;

const AllRestaurantsWrapper = styled.div`
	max-width: 1200px;
    min-width: 1200px;
    position: relative;
    margin: 0 auto;
    padding: 20px 0;
    background: #fff;
`;

const AllRestaurantsHeaderWrapper = styled.div`
	height: 72px;
	position: relative;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    max-width: 1200px;
	margin: 0 auto;
	border-bottom: 1px solid rgba(0,0,0,0.2);
`;

const AllRestaurantsHeaderLabel = styled.div`
	font-weight: 600;
    font-size: 28px;
    -ms-flex: 1;
    flex: 1;
`;

const AllRestaurantsHeaderScrollTopButton = styled.div`
	width: 34px;
    height: 34px;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: 16px;
    cursor: pointer;
    margin-left: 2px;
	box-shadow: 0 1px 4px 0 rgba(40,44,63,.4);
	position: relative;
	top: 0!important;
	&:after, &:before {
		position: absolute;
		content: "";
		height: 2px;
		left: 9px;
		width: 15px;
		background: #ec6f5b;
	},
	&:before {
		top: 12px;
	}
	&:after {
		top: 19px;
	}
`;

const AllRestaurantsHeaderBox = styled.div`
    display: flex;
    max-width: 1200px;
`;

export {
	PageWrapper,
	SidebarLeft,
	Sticky,
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
	AllRestaurantsHeaderLabel,
	AllRestaurantsHeaderScrollTopButton,
	AllRestaurantsHeaderBox
}
