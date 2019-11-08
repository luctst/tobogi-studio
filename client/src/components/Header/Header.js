import React from 'react';
import HeaderSC from './Header.style';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

function Header (props) {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        window.addEventListener("resize", function (e) {
            setWindowWidth(e.target.innerWidth)
        })
    }, []);

    return (
        <HeaderSC>
            <h1>TOBOGI</h1>
            <nav>
                <ul>
                    <li onClick={() => props.dispatch({ type: 'SHOW_SIDEBAR', payload: !props.showSidebar})}><NavLink to="">INFO</NavLink></li>
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