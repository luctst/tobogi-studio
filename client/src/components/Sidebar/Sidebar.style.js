import styled from "styled-components";

const SidebarSC = styled.div`
    background-color: #ebebeb;
    height: 100vh;
    max-height: 100vh;

    ${props => {
        if (props.windowWidth <= 560) {
            return `
                position: absolute;
                width: 100%;
                top: 0px;
            `
        }
    }}

    header {
        align-items: center;
        display: flex;
        height: 10vh;
        padding: 0 15px;
        margin: 0 auto;

        h1 {
            font-weight: 900;
            margin: 0;
        }

        span {
            margin-left: auto;
        }

        span:hover {
            cursor: pointer;
        }
    }
`;

export default SidebarSC;