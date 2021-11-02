import React from 'react';
import './Process.css';
import processOne from '../../img/process-1.png';
import processTwo from '../../img/process-2.png';
import processThree from '../../img/process-3.png';
import ButtonLesson from "../ButtonLesson/ButtonLesson";


const Process = (props) => {

    return (
        <section  className={'process'}>
            <div className="container">
                <h2>Как проходит учебный процесс</h2>
                <div  className="row">
                    <div className="col-4">
                        <div className="process__box">
                            <div className="process__wrap process__bg-1">
                                <img src={processOne} alt=""/>
                            </div>
                            <p className="process__title">Упор на практику</p>
                            <p className="process__text">Более 80% обучения - работа над проектами, много практики и
                                оформление реального портфолио </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="process__box">
                            <div className="process__wrap process__bg-2">
                                <img src={processTwo} alt=""/>
                            </div>
                            <p className="process__title">Поддержка и внимание</p>
                            <p className="process__text">Мы формируем небольшие группы до 12 человек, в каждой группе
                                есть основной преподаватель и ассистент.
                            </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="process__box">
                            <div className="process__wrap process__bg-3">
                                <img src={processThree} alt=""/>
                            </div>
                            <p className="process__title">Реальные проекты</p>
                            <p className="process__text">Наши студенты разрабатывают качественные проекты: веб-сайты,
                                приложения, телеграм боты</p>
                        </div>
                    </div>
                </div>
                <div className="process__button-wrap">
                    <ButtonLesson OpenModal={props.OpenModal} setOpenModal={props.setOpenModal}/>
                </div>
            </div>
        </section>
    );
};

export default Process;