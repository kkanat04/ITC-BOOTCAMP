import React,{useEffect} from 'react';
import './FrontAction.css'
import ButtonLesson from "../ButtonLesson/ButtonLesson";
import frontendIcon from '../../img/frontend-icon.png'
import fullstackIcon from '../../img/fullstack-icon.png'
import backendIcon from '../../img/python-icon.png'
import uiuxIcon from '../../img/ux-ui-icon.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const FrontAction = (props) => {
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
        <div className="container">
            <section className={'frontAction'}>

                <div  className="frontAction__wrap">
                    <div data-aos="fade-down" className="frontAction__text">
                        {props.front ? (
                            <h1>Front End <br/> разработчик</h1>
                        ) : props.fullstack ? (
                            <h1>Fullstack <br/> разработчик</h1>
                        ) : props.backend ? (
                            <h1>Python <br/> разработчик</h1>
                        ) : props.design ? (
                            <h1>UI/UX <br/> дизайнер</h1>
                        ) : null
                        }
                        {props.front ? (
                            <p>Длительность обучения: 3 месяца</p>
                        ) : props.fullstack ? (
                            <p>Длительность обучения: 4.5 месяца</p>
                        ) : props.backend ? (
                            <p>Длительность обучения: 3 месяца</p>
                        ) : props.design ? (
                            <p>Длительность обучения: 2 месяца</p>
                        ) : null
                        }
                        <ButtonLesson setOpenModal={props.setOpenModal}/>
                    </div>

                    <div className="frontAction__gif">
                        {props.front ? (
                            <img src={frontendIcon} alt=""/>
                        ) : props.fullstack ? (

                            <img src={fullstackIcon} alt=""/>
                        ) : props.backend ? (
                            <img src={backendIcon} alt=""/>
                        ) : props.design ? (
                            <img src={uiuxIcon} alt=""/>
                        ) : null}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FrontAction;