import React from 'react';
import './Advantage.css';
import advOne from '../../img/adv-1.png'
import advTwo from '../../img/adv-2.png'
import advThree from '../../img/adv-3.png'
import ButtonLesson from "../ButtonLesson/ButtonLesson";
import advantageVideo from "../../img/video-bg.mp4";

const Advantage = (props) => {
    return (
        <div className="container">
            <section className={'advantage'}>

                <div className="advantage__wrap">
                    <video autoPlay playsInline loop muted className={'advantage__video'}>
                        <source src={advantageVideo} type={'video/mp4'}/>
                    </video>
                    <h2>Преимущества</h2>
                    <div className="row advantage__row">
                        <div className="col-4">
                            <div className="advantage__box">
                                <div data-aos="fade-right" className="advantage__circle">
                                    <img  src={advOne} alt=""/>
                                </div>
                                <p className="advantage__title">Bootcamp</p>
                                <p className="advantage__text">Интенсивное обучение IT специальностям</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="advantage__box">
                                <div data-aos="zoom-in" className="advantage__circle">
                                    <img  src={advTwo} alt=""/>
                                </div>
                                <p className="advantage__title">ITC Bootcamp</p>
                                <p className="advantage__text">Пройдите обучение по методике ITC Bootcamp</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="advantage__box">
                                <div data-aos="fade-left"  className="advantage__circle">
                                    <img src={advThree} alt=""/>
                                </div>
                                <p className="advantage__title">Сейчас</p>
                                <p className="advantage__text">С нами вы станете востребованным специалистом</p>
                            </div>
                        </div>
                    </div>

                    <ButtonLesson OpenModal={props.OpenModal} setOpenModal={props.setOpenModal}/>

                </div>
            </section>
        </div>
    );
};

export default Advantage;