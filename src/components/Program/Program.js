import React from 'react';
import './Program.css';
import rankOne from '../../img/rank-1.png'
import rankTwo from '../../img/rank-2.png'




const Program = () => {

    return (
        <section  className="program">
            <div className="container">
                <div className="program__wrap">
                    <div  className="row">
                        <div  className="col-6">
                            <div  className="program__box">
                                <img  src={rankOne} alt=""/>
                                <p className="program__title">Bootcamp</p>
                                <p className="program__text">Буткемпы — это интенсивные программы ускоренного обучения
                                    IT-специальностям, которые помогают новичкам быстро освоиться в мире технологий,
                                    получить первые профессиональные навыки и найти работу.</p>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="program__box">
                                <img src={rankTwo} alt=""/>
                                <p className="program__title">программа курсов</p>
                                <ul>
                                    <li>3 месяца интенсивных занятий</li>
                                    <li>6 дней в неделю</li>
                                    <li>Ежедневный Coworking
                                    </li>
                                    <li>Проекты для вашего портфолио</li>
                                    <li>Сертификат</li>
                                    <li>Хакатоны</li>
                                    <li>Стажировка для лучших студентов</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Program;