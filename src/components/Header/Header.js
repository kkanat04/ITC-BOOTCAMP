import React, {useEffect, useState} from 'react';
import './Header.css';
import './Burger.css'
import {NavLink} from "react-router-dom";
import logo from '../../img/logo.png'


const Header = () => {
    const [menu, setMenu] = useState(false)
    const scroll = () => {
        setMenu(false)
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        if(menu===true){
            document.body.style.overflow = 'hidden';
        }

        return ()=> document.body.style.overflow = 'unset';
    }, [menu]);

    useEffect(() => {
        if(menu===true){
        document.body.style.touchAction= 'none';
        }
        return ()=>  document.body.style.touchAction= 'unset';
    }, [menu]);


    return (
        <header className={'header'}>
            <div className="blur">
                <div className="container">
                    <div className="header__wrap">
                        <NavLink onClick={scroll} exact
                                 to={'/'}> <img className='logo' src={logo} alt=""/></NavLink>

                        <div className={menu === true ? 'active_burger' : 'menu'}>
                            <ul className='ul-burger'>

                                <li className='li-a'><NavLink activeClassName="selected" onClick={scroll} exact
                                                              to={'/'}>Главная</NavLink></li>
                                <li className='li-a'><NavLink activeClassName="selected" onClick={scroll} exact
                                                              to={'/front'}>front-end dev.</NavLink></li>
                                <li className='li-a'><NavLink activeClassName="selected" onClick={scroll} exact
                                                              to={'/python'}>python dev.</NavLink></li>
                                <li className='li-a'><NavLink activeClassName="selected" onClick={scroll} exact
                                                              to={'/fullstack'}>full stack dev.</NavLink></li>
                                <li className='li-a'><NavLink activeClassName="selected" onClick={scroll} exact
                                                              to={'/ui-ux'}>ui | ux</NavLink></li>

                            </ul>

                        </div>
                        <div onClick={() => setMenu(!menu)} className={menu === true ? 'nav-icon4 open' : 'nav-icon4'}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className={menu === true ? 'white' : 'men-white'}></div>

            </div>
        </header>
    );
};

export default Header;