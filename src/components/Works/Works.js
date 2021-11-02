import React,{useEffect} from 'react';
import './Works.css';
import arrow from '../../img/arrow-right.png'
import coursesTwo from '../../img/courses-2.png'
import coursesThree from '../../img/courses-3.png'
import coursesFour from '../../img/courses-4.png'
import react from '../../img/react.png';
import {NavLink} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Works = () => {
    const scroll = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease',
            disable: 'mobile',
            once: true,
        });
    });
    return (
        <section className={'works'}>
            <div className="container">
                <h2>Выберите свой курс</h2>
                <div className="row">
                    <div data-aos="fade-down"  className="col-6">
                        <NavLink onClick={scroll} to={'/front'}>
                            <div className="works__bg works__bg-1">
                                <div className="works__box">
                                    <div className="works__circle">
                                        <img src={react} alt=""/>
                                    </div>
                                    <p className="works__title">Front-End <br/> разработчик</p>
                                    <p className="works__date">3 месяца</p>
                                    <div className="works__nav">
                                        Подробнее <img src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div data-aos="fade-down"  className="col-6">
                        <NavLink onClick={scroll} to={'/python'}>
                            <div className="works__bg works__bg-2">
                                <div className="works__box">
                                    <div className="works__circle">
                                        <img src={coursesTwo} alt=""/>
                                    </div>
                                    <p className="works__title">Python <br/>разработчик</p>
                                    <p className="works__date">3 месяца</p>
                                    <div className="works__nav">
                                        Подробнее <img src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div data-aos="fade-up"  className="col-6">
                        <NavLink onClick={scroll} to={'/fullstack'}>
                            <div className="works__bg works__bg-3">
                                <div className="works__box">
                                    <div className="works__circle">
                                        <img src={coursesThree} alt=""/>
                                    </div>
                                    <p className="works__title">Full Stack <br/> разработчик</p>
                                    <p className="works__date">4.5 месяца</p>
                                    <div className="works__nav">
                                        Подробнее <img src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div data-aos="fade-up"  className="col-6">
                        <NavLink onClick={scroll} to={'/ui-ux'}>
                            <div className="works__bg works__bg-4">
                                <div className="works__box">
                                    <div className="works__circle">
                                        <img src={coursesFour} alt=""/>
                                    </div>
                                    <p className="works__title">UI/UX <br/>дизайнер</p>
                                    <p className="works__date">3 месяца</p>
                                    <div className="works__nav">
                                        Подробнее <img src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;