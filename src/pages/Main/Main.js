import React, {useState} from 'react';
import ForBackGround from "../../components/ForBackGround/ForBackGround";
import Advantage from "../../components/Advantage/Advantage";
import Works from "../../components/Works/Works";
import Students from "../../components/Students/Students";
import Process from "../../components/Process/Process";
import Feedback from "../../components/Feedback/Feedback";
import Footer from "../../components/Footer/Footer";
import ModalFooter from "../../components/ModalFooter/ModalFooter";
import ThanksModalUi from "../../components/ThanksModal/ThanksModalUi";

const Main = ({endModal, setEndModal}) => {


    const [OpenModal, setOpenModal] = useState(false)
    const [ThanksModal, setThanksModal] = useState(true)

    if (ThanksModal === false) {
        setTimeout(() => {
            setThanksModal(true)
        }, 3000);
    }
    const [transitionFront, setTransitionFront] = useState(false)
    setTimeout(() => {
        setTransitionFront(true)
    }, 100);

    const [modalFooter1, setModalFooter1] = useState(false)
    const [modalFooter2, setModalFooter2] = useState(false)
    const [modalFooter3, setModalFooter3] = useState(false)

    return (
        <div className={transitionFront === true ? 'main__opacity' : 'main__opacity-time'}>

            <ForBackGround OpenModal={OpenModal} setOpenModal={setOpenModal} ThanksModal={ThanksModal}
                           setThanksModal={setThanksModal}/>
            <Advantage OpenModal={OpenModal} setOpenModal={setOpenModal}/>
            <Works/>
            <Students/>
            <Process OpenModal={OpenModal} setOpenModal={setOpenModal}/>
            <Feedback/>
            <Footer setEndModal={setEndModal} setModalFooter1={setModalFooter1} setModalFooter2={setModalFooter2}
                    setModalFooter3={setModalFooter3}/>
            {
                modalFooter1 == true || modalFooter2 == true || modalFooter3 == true ?
                    <ModalFooter setModalFooter1={setModalFooter1} setModalFooter3={setModalFooter3}
                                 setModalFooter2={setModalFooter2} modalFooter1={modalFooter1}
                                 modalFooter2={modalFooter2} modalFooter3={modalFooter3}/> : null
            }
            {
                endModal ? <ThanksModalUi/> : null

            }
        </div>
    );
};

export default Main;