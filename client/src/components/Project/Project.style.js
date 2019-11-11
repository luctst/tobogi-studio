import styled from "styled-components";
import Container from "./../../styles/Container";

const ProjectsHandlerSC = styled(Container)`
    div {
        img {
            object-fit: cover;
            height: auto;
        }
    }

    footer {
        display: flex;
        justify-content: space-around;

        button {
            border: none;
            text-decoration: underline;
        }
    }

    @media screen and (max-width: 570px) {
        div {
            img {
                width: 100%;
            }
        }

        footer {
            display: block;
            text-align: center;

            p {
                font-size: 15px;
            }

            button {
                font-size: 15px;
            }
        }
    }
`;

export default ProjectsHandlerSC;