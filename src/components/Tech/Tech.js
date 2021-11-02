import React from 'react';
import './Tech.css';
import html from '../../img/html.png';
import css from '../../img/ccs3.png';
import js from '../../img/js.png';
import git from '../../img/git.png';
import react from '../../img/react.png';
import redux from '../../img/redux.png';
import jsNode from '../../img/js-node.png';
import adobe from '../../img/ui-icon-1.png'
import AdobeXD from '../../img/ui-icon-2.png'
import illus from '../../img/ui-icon-3.png'
import figma from '../../img/ui-icon-4.png'
import anim from '../../img/ui-icon-5.png'
import port from '../../img/ui-icon-6.png'
import python from '../../img/python-icon-1.png'
import django from '../../img/django-icon-2.png'
import rest from '../../img/backend-icon-3.png'
import postgre from '../../img/backend-icon-4.png'
import telegram from '../../img/backend-icon-5.png'
import github from '../../img/backend-icon-6.png'
import next from '../../img/nextjs.png'
import mongo from '../../img/mongo.png'
import nestLion from '../../img/next-lion.png'
import 'aos/dist/aos.css';


const Tech = (props) => {

    return (
        <section className={'tech'}>
            <div className="container">
                <h2>Изучим технологии</h2>
                <div className="tech__wrap">

                    {props.front ? (
                        <div className="row tech__row">
                            <div data-aos="fade-right" className="col-4">
                                <div className="tech__box">
                                    <img src={html} alt=""/>
                                    <p className="tech__title">HTML5</p>
                                    <p className="tech__text">Верстать современные сайты посредством HTML5</p>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="col-4">
                                <div className="tech__box">
                                    <img src={css} alt=""/>
                                    <p className="tech__title">CSS3</p>
                                    <p className="tech__text">Свободное и легкое владение языком стилей CSS3</p>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-4">

                                <div className="tech__box">
                                    <img src={js} alt=""/>
                                    <p className="tech__title">JavaScript</p>
                                    <p className="tech__text">Самые важная технология для веб-разработчика</p>
                                </div>
                            </div>
                            <div data-aos="fade-right" className="col-4">
                                <div className="tech__box">
                                    <img src={git} alt=""/>
                                    <p className="tech__title">git</p>
                                    <p className="tech__text">Система контроля версий для отслеживания изменения в
                                        файлах</p>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="col-4">
                                <div className="tech__box">
                                    <img src={react} alt=""/>
                                    <p className="tech__title">react</p>
                                    <p className="tech__text">Самая популярная библиотека в веб-разработке</p>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-4">

                                <div className="tech__box">
                                    <img src={redux} alt=""/>
                                    <p className="tech__title">redux</p>
                                    <p className="tech__text">Библиотека для управления состоянием приложений</p>
                                </div>
                            </div>
                        </div>
                    ) : props.fullstack ? (
                        <div className="row tech__row">
                            <div data-aos="fade-right" className="col-4">
                                <div className="tech__box">
                                    <img src={html} alt=""/>
                                    <p className="tech__title">HTML5</p>
                                    <p className="tech__text">Верстать современные сайты посредством HTML5</p>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="col-4">
                                <div className="tech__box">
                                    <img src={css} alt=""/>
                                    <p className="tech__title">CSS3</p>
                                    <p className="tech__text">Свободное и легкое владение языком стилей CSS3</p>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-4">

                                <div className="tech__box">
                                    <img src={js} alt=""/>
                                    <p className="tech__title">JavaScript</p>
                                    <p className="tech__text">Самые важная технология для веб-разработчика</p>
                                </div>
                            </div>
                            <div data-aos="fade-right" className="col-4">
                                <div className="tech__box">
                                    <img src={jsNode} alt=""/>
                                    <p className="tech__title">node js</p>
                                    <p className="tech__text">Программная платформа для реализации серверной части</p>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="col-4">
                                <div className="tech__box">
                                    <img src={react} alt=""/>
                                    <p className="tech__title">react</p>
                                    <p className="tech__text">Самая популярная библиотека в веб-разработке</p>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-4">

                                <div className="tech__box">
                                    <img src={redux} alt=""/>
                                    <p className="tech__title">redux</p>
                                    <p className="tech__text">Библиотека для управления состоянием приложений</p>
                                </div>
                            </div>
                            <div data-aos="fade-right" className="col-4">
                                <div className="tech__box">
                                    <img src={next} alt=""/>
                                    <p className="tech__title">next jS</p>
                                    <p className="tech__text">Фреймворк, основанный на React, работает на сервере и в
                                        браузере.</p>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="col-4">
                                <div className="tech__box">
                                    <img src={mongo} alt=""/>
                                    <p className="tech__title">MongoDB</p>
                                    <p className="tech__text">Эффективная система управления базами данных</p>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-4">

                                <div className="tech__box">
                                    <img src={nestLion} alt=""/>
                                    <p className="tech__title">Nest JS</p>
                                    <p className="tech__text">Фреймворк для создания серверных веб-приложений
                                        Node.js</p>
                                </div>
                            </div>
                        </div>
                    ) : props.backend ? (
                        <div className="row tech__row">
                            <div data-aos="fade-right" className="col-4">
                                <div className="tech__box">
                                    <img src={python} alt=""/>
                                    <p className="tech__title">Python</p>
                                    <p className="tech__text">Универсальный язык программирования</p>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="col-4">
                                <div className="tech__box">
                                    <img src={django} alt=""/>
                                    <p className="tech__title">Django</p>
                                    <p className="tech__text">Фреймворк для приложений на языке Python</p>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-4">

                                <div className="tech__box">
                                    <img src={rest} alt=""/>
                                    <p className="tech__title">rest</p>
                                    <p className="tech__text">Фреймворк для Django, поддерживающий идеологию REST</p>
                                </div>
                            </div>
                            <div data-aos="fade-right" className="col-4">
                                <div className="tech__box">
                                    <img src={postgre} alt=""/>
                                    <p className="tech__title">postgresql</p>
                                    <p className="tech__text">Система управления базами
                                        данных</p>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="col-4">
                                <div className="tech__box">
                                    <img src={github} alt=""/>
                                    <p className="tech__title">GitHub</p>
                                    <p className="tech__text">Система управления проектами и версиями кода</p>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-4">

                                <div className="tech__box">
                                    <img src={telegram} alt=""/>
                                    <p className="tech__title">telegram bot</p>
                                    <p className="tech__text">Функциональная программа в приложении Telegram</p>
                                </div>
                            </div>
                        </div>
                    ) : props.design ? (
                        <div className="row tech__row">
                            <div data-aos="fade-right" className="col-4">
                                <div className="tech__box">
                                    <img src={adobe} alt=""/>
                                    <p className="tech__title">Adobe Photoshop</p>
                                    <p className="tech__text">Универсальный
                                        графический редактор</p>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="col-4">
                                <div className="tech__box">
                                    <img src={AdobeXD} alt=""/>
                                    <p className="tech__title">Adobe XD</p>
                                    <p className="tech__text">Программа для дизайна
                                        интерфейсов</p>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-4">

                                <div className="tech__box">
                                    <img src={illus} alt=""/>
                                    <p className="tech__title">Adobe Illutrator</p>
                                    <p className="tech__text">Графический редактор для работы с векторной графикой</p>
                                </div>
                            </div>
                            <div data-aos="fade-right" className="col-4">
                                <div className="tech__box">
                                    <img src={port} alt=""/>
                                    <p className="tech__title">Портфолио</p>
                                    <p className="tech__text">Подготовка своего собственного портфолио</p>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="col-4">
                                <div className="tech__box">
                                    <img src={figma} alt=""/>
                                    <p className="tech__title">Figma</p>
                                    <p className="tech__text">Облачный инструмент для разработки пользовательского интерфейса</p>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-4">

                                <div className="tech__box">
                                    <img src={anim} alt=""/>
                                    <p className="tech__title">Анимации</p>
                                    <p className="tech__text">Несложное анимирование для презентации заказчику</p>
                                </div>
                            </div>
                        </div>
                    ) : null
                    }
                </div>
            </div>

        </section>
    );
};

export default Tech;