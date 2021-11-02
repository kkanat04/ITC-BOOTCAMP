import React, {useState} from 'react';
import FrontBackground from "../../components/FrontBackground/FrontBackground";
import About from "../../components/About/About";
import Tech from "../../components/Tech/Tech";
import Target from "../../components/Target/Target";
import Dropdown from "../../components/Dropdown/Dropdown";
import Diploma from "../../components/Diploma/Diploma";
import Process from "../../components/Process/Process";
import Consult from "../../components/Consult/Consult";
import Footer from "../../components/Footer/Footer";
import ThanksModalUi from "../../components/ThanksModal/ThanksModalUi";
import ModalFooter from "../../components/ModalFooter/ModalFooter";

const Fullstack = ({ThanksModalForCourses, setThanksModalForCourses, endModal, openingModalHandler, setEndModal}) => {

    let state = {
        about: ['Научиться проектировать интересный, привлекательный и удобный интерфейс',
            'Научиться создавать адаптивный дизайн',
            'Научиться логике и алгоритму языка программирования Javascript',
            'Работать с современной библиотекой React JS',
            'Работать с серверной частью приложения на Node JS',
            'Настраивать базу данных на MongoDB'
        ],
        titles: [
            {
                name: 'HTML,CSS',
                array: [
                    'Настройка рабочего пространства',
                    'Html тэги',
                    'Знакомство с CSS',
                    'Css Работа с текстом',
                    'Css Работа с блоками(Flex) и Позиционирование (Position)',
                    'Css Псевдоэлементы и Псевдоклассы',
                    'Css Анимации',
                    'Bootstrap',
                    'Media-responsive - Адаптивная верстка'
                ]
            },
            {
                name: ' Основы Javascript',
                array: [

                    'Знакомство с JS',
                    'Переменные - const,let,var',
                    'Типы данных ',
                    'Console, Alert, Confirm, Prompt',
                    'Преобразование типов',
                    'Математические Операторы',
                    'Условные Операторы',
                    'Логические Операторы',
                    'Циклы',
                    'Конструкция "switch"',
                    'Объекты ',
                    'Массивы',
                    'Функции'


                ]

            },
            {
                name: 'Продвинутый Javascript',
                array: [
                    'ES-6+',
                    'Методы массивов',
                    'Планирование: setTimeout и setInterval',
                    'DOM',
                    'Promise(Fetch, async, await)',
                    'API (JSON)',
                    'LocalStorage',
                ]
            },
            {
                name: 'Библиотека React JS',
                array: [
                    'Введение в React',
                    'Компоненты',
                    'Пропсы',
                    'Route-Navigation',
                    'Hooks',
                    'UseState',
                    'UseEffect(Life-Cycle)',
                    'Material-UI',
                    'Ant-Design',
                    'Class-Component'

                ]
            },
            {
                name: 'Менеджер состояний Redux',
                array: [
                    'Введение в Redux',
                    'State',
                    'Store',
                    'Reducer, Action',
                    'HOC',
                    'Redux-Thunk',

                ]
            },
            {
                name: 'Работа с сервером (Next JS, Node JS, MongoDB)',
                array: [
                    'Основы Node JS ',
                    'Основы Nest & Next Js',
                    'Работа по созданию сервера',
                    'Создание телеграмм бота',
                    'Работа с базами данных такими как PostgreSQL,MongoDB',
                    'И все что нужно чтоб стать Fullstack разработчиком',

                ]
            },
        ],
        resume: [
            'Основы языка разметки документов HTML и многое другое',
            'Работа с CSS и управление стилями',
            'Глубокое понимание языка JavaScript (примитивы, объекты, массивы, функции)',
            'Навыки манипуляции с DOM деревом',
            'Создание игр на чистом js',
            'ООП в JavaScript',
            'Работа с REST API',
            'Работа с библиотекой React-js',
            'Ui-библиотеки(material-ui, ant-Design)',
            'Понимание принципов работы роутинга на примере библиотеки react-router',
            'Redux(state management)',
            'Серверная часть Node JS',
            'Фреймворк Next JS',
            'База данных MongoDB'

        ]
    }

    const [transitionFront, setTransitionFront] = useState(false)
    const [ThanksModal, setThanksModal] = useState(true)

    if (ThanksModal === false) {
        setTimeout(() => {
            setThanksModal(true)
        }, 3000);
    }

    if (endModal === true) {
        setTimeout(() => {
            setEndModal(false)
        }, 3000);
    }

    setTimeout(() => {
        setTransitionFront(true)
    }, 100);

    const [OpenModal, setOpenModal] = useState(false)
    const [modalFooter1, setModalFooter1] = useState(false)
    const [modalFooter2, setModalFooter2] = useState(false)
    const [modalFooter3, setModalFooter3] = useState(false)


    return (
        <div className={transitionFront === true ? 'main__opacity' : 'main__opacity-time'}>

            <FrontBackground fullstack OpenModal={OpenModal} ThanksModal={ThanksModal} setOpenModal={setOpenModal}
                             ThanksModalForCourses={ThanksModalForCourses}
                             setThanksModal={setThanksModal} setThanksModalForCourses={setThanksModalForCourses}/>
            <About fullstack state={state.about}/>
            <Tech fullstack/>
            <Target fullstack/>
            <Dropdown fullstack state={state.titles}/>
            <Diploma fullstack state={state.resume}/>
            <Process OpenModal={OpenModal} setOpenModal={setOpenModal}/>
            <Consult open={openingModalHandler} setThanksModalForCourses={setThanksModalForCourses}
                     ThanksModalForCourses={ThanksModalForCourses}/>
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

export default Fullstack;