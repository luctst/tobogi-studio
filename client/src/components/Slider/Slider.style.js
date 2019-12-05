import styled from "styled-components";
import Container from "./../../styles/Container";

const SCSlider = styled(Container)`
    grid-column: 1 / 2;
    grid-row: 1 / -1;

    img {
        position: absolute;
    }

    .slide-perso {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        position: sticky;

        img {
            position: sticky;
        }

        footer {
            display: flex;

            button {
                margin-left: auto;
            }
        }
    }

    .btn-next,
    .btn-prev {
        position: absolute;
        top: 0;
        height: 100vh;
        background: transparent;
        border: none;
        width: 50%;
        z-index: 30;
    }

    .btn-prev {
        left: 0;
    }

    .btn-next {
        right: 0;
    }
`;

export default SCSlider;