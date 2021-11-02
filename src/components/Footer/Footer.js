import React from 'react';
import {NavLink} from 'react-router-dom'
import './Footer.css'
import iconOne from '../../img/instagram.svg';
import iconTwo from '../../img/telegram.svg';
import iconThree from '../../img/facebook.svg';
import 'aos/dist/aos.css';

const Footer = ({setModalFooter1, setModalFooter2, setModalFooter3}) => {


    const scroll = () => {
        window.scrollTo(0, 0)
    }

    return (
        <footer>
            <div className="container">
                <div className="footer__main">
                    <h2 data-aos="fade-right">ITC Bootcamp</h2>
                    <div className="footer__wrap">
                        <div className="footer__box">
                            <p className="footer__title">Учебные курсы:</p>
                            <ul className="footer__list">
                                <li><NavLink onClick={scroll} to={'/front'}>Frontend разработчик</NavLink></li>
                                <li><NavLink onClick={scroll} to={'/python'}>Python разработчик</NavLink></li>
                                <li><NavLink onClick={scroll} to={'/fullstack'}>Full Stack разработчик</NavLink></li>
                                <li><NavLink onClick={scroll} to={'/ui-ux'}>UI/UX дизайнер</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer__box footer__box-2">
                            <p className="footer__tel">+996 500 800 588 - КГ</p>
                            <p className="footer__tel">+998 93 392 70 70 - УЗ</p>
                            <ul className="footer__icons">
                                <li onClick={() => setModalFooter1(true)}>
                                    <img src={iconOne} alt=""/></li>
                                <li onClick={() => setModalFooter2(true)}>
                                    <img src={iconTwo} alt=""/></li>
                                <li onClick={() => setModalFooter3(true)}>
                                    <img src={iconThree} alt=""/></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;