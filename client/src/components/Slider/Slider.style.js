import styled from "styled-components";
import Container from "./../../styles/Container";

const SCSlider = styled(Container)`
    position: relative;

    img {
        position: absolute;
    }

    .slick-slide {
        div {
            align-items: flex-end;
            height: 90vh;
            display: flex;

            .see-more {
                margin-left: auto;
                margin-right: 20px; 
            }
        }
    }
`;

export default SCSlider;