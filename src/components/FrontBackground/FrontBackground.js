import React from 'react';
import './FrontBackground.css'
import Program from "../Program/Program";
import FrontAction from "../FrontAction/FrontAction";
import Modalui from "../../pages/Main/Modal/Modal-ui/Modal-ui";
import ThanksModal from "../ThanksModal/ThanksModalUi";

const FrontBackground = (props) => {
    return (
        <div>
            {props.front ? (
                <div className={'background frontBackground'}>
                    <div className="front__opacity">
                        {
                            props.OpenModal === true ?
                                <Modalui setOpenModal={props.setOpenModal} OpenModal={props.OpenModal}
                                         ThanksModalForCourses={props.ThanksModalForCourses}
                                         setThanksModalForCourses={props.setThanksModalForCourses}
                                         setThanksModal={props.setThanksModal}/> : null
                        }
                        {
                            props.ThanksModal === false ? <ThanksModal/> : null
                        }
                        <FrontAction setOpenModal={props.setOpenModal} front={props.front}/>
                        <Program/>
                    </div>
                </div>
            ) : props.fullstack ? (
                <div className={'background fullstackBackground'}>
                    <div className="front__opacity">
                        {
                            props.OpenModal === true ?
                                <Modalui setOpenModal={props.setOpenModal} OpenModal={props.OpenModal}
                                         ThanksModalForCourses={props.ThanksModalForCourses}
                                         setThanksModalForCourses={props.setThanksModalForCourses}
                                         setThanksModal={props.setThanksModal}/> : null
                        }
                        {
                            props.ThanksModal === false ? <ThanksModal/> : null
                        }
                        <FrontAction setOpenModal={props.setOpenModal} fullstack={props.fullstack}/>
                        <Program/>
                    </div>
                </div>
            ) : props.backend ? (
                <div className={'background backendBackground'}>
                    <div className="front__opacity">
                        {
                            props.OpenModal === true ?
                                <Modalui setOpenModal={props.setOpenModal} OpenModal={props.OpenModal}
                                         ThanksModalForCourses={props.ThanksModalForCourses}
                                         setThanksModalForCourses={props.setThanksModalForCourses}
                                         setThanksModal={props.setThanksModal}/> : null
                        }
                        {
                            props.ThanksModal === false ? <ThanksModal/> : null
                        }
                        <FrontAction setOpenModal={props.setOpenModal} backend={props.backend}/>
                        <Program/>
                    </div>
                </div>
            ) : props.design ? (
                <div className={'background designBackground'}>
                    <div className="front__opacity">
                        {
                            props.OpenModal === true ?
                                <Modalui setOpenModal={props.setOpenModal} OpenModal={props.OpenModal}
                                         ThanksModalForCourses={props.ThanksModalForCourses}
                                         setThanksModalForCourses={props.setThanksModalForCourses}
                                         setThanksModal={props.setThanksModal}/> : null
                        }
                        {
                            props.ThanksModal === false ? <ThanksModal/> : null
                        }
                        <FrontAction setOpenModal={props.setOpenModal} design={props.design}/>
                        <Program/>
                    </div>
                </div>
            ) : null
            }
        </div>


    );
};

export default FrontBackground;