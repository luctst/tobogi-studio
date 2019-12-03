import styled from "styled-components";
import Container from "./../../styles/Container";

const SCSlider = styled(Container)`
    grid-column: 1 / 2;
    grid-row: 1 / -1;

    img {
        position: absolute;
    }
`;

export default SCSlider;