import styled from "styled-components";
import Container from "./../../styles/Container";

const ProjectsHandlerSC = styled(Container)`
    display: flex;
    flex-direction: column;
    height: auto;

    div {
        height: fit-content;
        margin: auto;
        text-align: center;

        img {
            object-fit: cover;
            height: auto;
            width: 100%;
        }
    }

    footer {
        text-align: center;

        p {
            font-size: 15px;
            line-height: 1.6;
            text-transform: uppercase;
        }

        button {
            background-color: transparent;
            border: none;
            font-size: 15px;
            font-weight: 500;
            text-decoration: underline;
            text-transform: uppercase;
            margin-left: auto;

            &:hover {
                cursor: pointer;
            }
        }
    }
`;

export default ProjectsHandlerSC;