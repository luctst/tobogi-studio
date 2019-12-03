import React from 'react';
import HeaderSC from './Header.style';
import {connect} from 'react-redux';

function Header (props) {
    React.useEffect(() => {
        window.addEventListener("resize", () => {
            // TODO: Create an algo who only dispatch when necessary.
            props.dispatch({
                type: "UPDATE_WINDOW_WIDTH"
            });
            // if (windowWidth >= 700 && e.target.innerWidth >= 700) return null;
            // if (windowWidth <= 700 && e.target.innerWidth <= 700) return null;

            // if (windowWidth >= 700 && e.target.innerWidth <= 700) setWindowWidth(e.target.innerWidth);
            // if (windowWidth <= 700 && e.target.innerWidth >= 700) setWindowWidth(e.target.innerWidth);

        });
    }, []);

    const handleClick = e => {
        e.stopPropagation();
        props.dispatch({ type: "SHOW_SIDEBAR", payload: !props.showSidebar })
    };

    return (
        <HeaderSC>
            <h1>MODAL</h1>
            {
                !props.showSidebar &&
                <nav>
                    <ul>
                        <li>
                            {
                                props.windowWidth >= 700 && 
                                    <a href="https://www.instagram.com/modal_studio" target="_blank">INSTAGRAM</a>
                            }
                        </li>
                        <button onClick={handleClick}>INFO</button>
                    </ul>
                </nav>
            }
        </HeaderSC>
    );
}

function mapState ({sidebarReducer, windowWidthReducer}) {
    return {
        ...sidebarReducer,
        ...windowWidthReducer
    }
};

export default connect(mapState)(Header);