import styled from "styled-components";
import Container from "./../../styles/Container";

const SCSlider = styled(Container)`
    grid-column: 1 / 2;
    grid-row: 1 / -1;

    img {
        position: absolute;
    }

    .slick-slide {
        div {
            height: 90vh;
            align-items: flex-end;
            display: flex;

            button {
                margin-left: auto;
                margin-right: 20px; 
            }
        }
    }

    .slick-active {
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
        }
`;

export default SCSlider;