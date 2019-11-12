import styled from "styled-components";
import Container from "./../../styles/Container";

const ProjectsHandlerSC = styled(Container)`
    display: flex;
    flex-direction: column;
    height: 90vh;
    max-height: 90vh;

    div {
        margin: auto;
        text-align: center;

        img {
            object-fit: cover;
            height: auto;
            width: 70%;
        }
    }

    footer {
        p {
            text-transform: uppercase;
        }

        button {
            background-color: transparent;
            border: none;
            font-weight: 500;
            text-decoration: underline;
            text-transform: uppercase;
            margin-left: auto;

            &:hover {
                cursor: pointer;
            }
        }
    }

    @media screen and (min-width: 570px) {
        footer {
            display: flex;

            p,
            button {
                font-size: 14px;
            }
        }
    }

    @media screen and (max-width: 570px) {
        display: block;

        div {
            img {
                width: 100%;
            }
        }

        footer {
            text-align: center;

            p {
                font-size: 15px;
                line-height: 1.6;
            }

            button {
                font-size: 15px;
            }
        }
    }
`;

export default ProjectsHandlerSC;