import React from 'react';
import HeaderSC from './Header.style';
import {NavLink} from 'react-router-dom';
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

    const handleClick = () => props.dispatch({type: "SHOW_SIDEBAR", payload: !props.showSidebar});

    return (
        <HeaderSC as="header" windowWidth={props.windowWidth} sidebarIsTrue={props.showSidebar}>
            <h1>MODAL</h1>
            <nav>
                <ul>
                    <li onClick={handleClick}><NavLink to="">INFO</NavLink></li>
                    {
                        props.windowWidth >= 700 ?
                            <>
                                <li className="is__link__middle"><NavLink to="">MAIL</NavLink></li>
                                <li><NavLink to="">INSTAGRAM</NavLink></li>
                            </>
                        : null
                    }
                </ul>
            </nav>
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