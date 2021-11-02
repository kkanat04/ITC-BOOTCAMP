import React from 'react';
import './Diploma.css';
import diploma from '../../img/diploma.png'
import diplomaBack from '../../img/diploma-backend.png'
import diplomaDesign from '../../img/diploma-design.png'
import 'aos/dist/aos.css';

const Diploma = (props) => {

    return (
        <section className={'diploma'}>
            <div className="container">
                <div className="diploma__wrap">
                    <div data-aos="fade-right"  className="diploma__box">
                        <p className="diploma__title">Добавьте навыки в резюме</p>
                        <ul>
                            {props.state.map((el, id) => {
                                    return (
                                        <li key={id}>{el}</li>
                                    )
                                }
                            )}
                        </ul>
                    </div>
                    <div data-aos="zoom-in" className="diploma__box-2">
                        {props.front ? (
                            <img src={diploma} alt=""/>
                        ) : props.fullstack ? (
                            <img src={diploma} alt=""/>
                        ) : props.backend ? (
                            <img src={diplomaBack} alt=""/>
                        ) : props.design ? (
                            <img  src={diplomaDesign} alt=""/>
                        ) : null
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Diploma;