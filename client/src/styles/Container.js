import styled from "styled-components";
import helper from "./../styles/helper";

const Container = styled.section`
	color: ${helper.mainColor};
	font-family: 'Roboto', Arial, Helvetica, sans-serif;
    padding:0 15px;
    margin:0 auto;

	@media screen and (max-width: 576px) {
		width: 100%;
	}

	@media screen and (min-width: 577px) {
		width: 540px;
		max-width: 540px;
	}

	@media screen and (min-width: 768px) {
		width: 720px;
		max-width: 720px;
	}

	@media screen and (min-width: 992px) {
		width: 960px;
		max-width: 960px;
	}

	@media screen and (min-width: 1200px) {
		width: 1140px;
		max-width: 1140px;
	}
`;

export default Container;