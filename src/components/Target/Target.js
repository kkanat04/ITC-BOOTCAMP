import React from 'react';
import './Target.css';
import targetOne from '../../img/target-1.png';
import targetTwo from '../../img/target-2.png';
import targetFullstackOne from '../../img/target-1-fullstack.png'
import targetFullstackTwo from '../../img/target-2-fullstack.png'
import targetBackendOne from '../../img/target-1-backend.png'
import targetBackendTwo from '../../img/target-2-backend.png'
import uiBracketOne from '../../img/ui-brackets-1.png'
import uiBracketTwo from '../../img/ui-brackets-2.png'

const Target = (props) => {
    return (
        <section className={'target'}>
            <div className="container">
                <h2>Кому подойдет этот курс</h2>
                <div className="row">
                    <div className="col-6">
                        {props.front ? (
                            <div className="target__box">
                                <img src={targetOne} alt=""/>
                                <div className="target__wrap">
                                    <p className="target__title">Новичкам в разработке</p>
                                    <p className="target__text">Вы с нуля научитесь верстать сайты на HTML и CSS,
                                        создавать
                                        приложения и веб-страницы на JavaScript, быстро проектировать REST-сервисы с
                                        помощью
                                        Web API. Отработаете полученные знания на практике и соберёте портфолио.</p>
                                </div>
                            </div>
                        ) : props.fullstack ? (
                            <div className="target__box">
                                <img src={targetFullstackOne} alt=""/>
                                <div className="target__wrap">
                                    <p className="target__title">Новичкам в разработке</p>
                                    <p className="target__text">Вы обретёте весь необходимый стэк технологий для
                                        Fullstack разработчика.
                                        Научитесь создавать интерфейсы, полностью прописывать функционал front части и
                                        подключать сервер с базами данных.
                                        С нуля до востребованного специалиста.
                                    </p>
                                </div>
                            </div>
                        ) : props.backend ? (
                            <div className="target__box">
                                <img src={targetBackendOne} alt=""/>
                                <div className="target__wrap">
                                    <p className="target__title">Новичкам в разработке</p>
                                    <p className="target__text">Python — это удобный язык для новичков, чтобы начать
                                        изучать
                                        программирование. У него низкий порог входа за счет простого и понятного
                                        синтаксиса. Python позволяет за короткое время научиться писать сложный код.</p>
                                </div>
                            </div>
                        ) : props.design ? (
                            <div className="target__box">
                                <img src={uiBracketOne} alt=""/>
                                <div className="target__wrap">
                                    <p className="target__title">Новичкам</p>
                                    <p className="target__text">Начнёте с азов и постепенно узнаете о профессии всё.
                                        Курс построен адаптивно — сложность заданий будет расти с вашим опытом. К окончанию курса вы овладеете всему нужными инструментами UI/UX.</p>
                                </div>
                            </div>
                        ) : null
                        }
                    </div>
                    <div className="col-6">
                        {props.front ? (
                            <div className="target__box">
                                <img src={targetTwo} alt=""/>
                                <div className="target__wrap">
                                    <p className="target__title">Начинающим программистам</p>
                                    <p className="target__text">Вы расширите круг своих компетенций, изучив синтаксис
                                        JavaScript на продвинутом уровне. Научитесь работать с современными
                                        библиотеками,
                                        настраивать пакеты с помощью npm, изучите разработку на всех стадиях</p>
                                </div>
                            </div>
                        ) : props.fullstack ? (
                            <div className="target__box">
                                <img src={targetFullstackTwo} alt=""/>
                                <div className="target__wrap">
                                    <p className="target__title">Начинающим программистам</p>
                                    <p className="target__text">Вы изучите самые современный методы по созданию
                                        интерфейсов: HTML5,CSS3,Javascript.
                                        Самые популярные фреймворки: React JS,Next JS. Работа с State Management: Redux.
                                        Изучите серверную часть: Node JS,MongoDB.
                                    </p>
                                </div>
                            </div>
                        ) : props.backend ? (
                            <div className="target__box">
                                <img src={targetBackendTwo} alt=""/>
                                <div className="target__wrap">
                                    <p className="target__title">Начинающим программистам</p>
                                    <p className="target__text">Еще одно из преимуществ языка программирования Python —
                                        его условная легкость. Он считается наиболее подходящим для начинающих
                                        специалистов: разрабатывать несложные программы можно научиться уже спустя
                                        пару-тройку дней изучения.</p>
                                </div>
                            </div>
                        ) : props.design ? (
                            <div className="target__box">
                                <img src={uiBracketTwo} alt=""/>
                                <div className="target__wrap">
                                    <p className="target__title">Дизайнерам</p>
                                    <p className="target__text">Требования к этой профессии растут, тренды постоянно
                                        обновляются. На курсе вы не только повысите свой уровень, освоив новые навыки,
                                        но и добавите в своё портфолио проект под руководством профессионала.</p>
                                </div>
                            </div>
                        ) : null
                        }
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Target;