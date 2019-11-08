import styled from "styled-components";
import helper from "./../styles/helper";

const Container = styled.section`
	color: ${helper.mainColor};
	font-family: 'Roboto', Arial, Helvetica, sans-serif;
    padding:0 15px;
    margin:0 auto;

    @media (min-width: 576px) {
		max-width: 540px;
	}
	@media (min-width: 768px) {
		max-width: 720px;
	}
	@media (min-width: 992px) {
		max-width: 960px;
	}
	@media (min-width: 1200px) {
		max-width: 1140px;
	}
`;

export default Container;