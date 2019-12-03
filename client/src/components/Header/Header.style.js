import styled from 'styled-components';
import helper from './../../styles/helper';

const HeaderSC = styled.header`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    grid-column: 1 / 2;
    height: 10vh;
    padding: 30px 40px;
    position: fixed;
    justify-content: space-between;
    width: 100vw;
    
    h1 {
        font-weight: 900;
        margin: 0;
    }

    nav {
        height: max-content;

        ul {
            display: flex;
            list-style-type: none;
            margin: 0;
            padding-left: 0;

            li {
                a {
                    color: ${helper.mainColor};
                    font-size: 15px;
                    text-decoration: none;
                    margin: 0 2em;
                }
            }

            button {
                background-color: transparent;
                border: none;
                color: ${helper.mainColor};
                font-size: 15px;
                text-decoration: none;
                padding: 0;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

    @media screen and (min-width: 501px) {
        h1 {
            font-size: 25px;
        }
    }

    @media screen and (max-width: 500px) {
        h1 {
            font-size: 20px;
        }
    }
`;

export default HeaderSC;