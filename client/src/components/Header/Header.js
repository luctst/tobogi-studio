import React from 'react';
import HeaderSC from './Header.style';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

function Header (props) {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        window.addEventListener("resize", e => {
            setWindowWidth(e.target.innerWidth);
            // if (windowWidth >= 700 && e.target.innerWidth >= 700) return null;
            // if (windowWidth <= 700 && e.target.innerWidth <= 700) return null;

            // if (windowWidth >= 700 && e.target.innerWidth <= 700) setWindowWidth(e.target.innerWidth);
            // if (windowWidth <= 700 && e.target.innerWidth >= 700) setWindowWidth(e.target.innerWidth);

        });
    }, []);

    const handleClick = e => {
        e.nativeEvent.stopImmediatePropagation();

        props.dispatch({
            type: "SHOW_SIDEBAR",
            payload: !props.showSidebar
        });
    }

    return (
        <HeaderSC as="header" windowWidth={windowWidth} sidebarIsTrue={props.showSidebar}>
            <h1>TOBOGI</h1>
            <nav>
                <ul>
                    <li onClick={handleClick}><NavLink to="">INFO</NavLink></li>
                    {
                        windowWidth >= 700 ?
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

function mapState ({sidebarReducer}) {
    return sidebarReducer;
};

export default connect(mapState)(Header);