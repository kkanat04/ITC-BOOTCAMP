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

const Backend = ({ThanksModalForCourses, setThanksModalForCourses, endModal, openingModalHandler, setEndModal}) => {

    let state = {
        about: ['Освоить систему Linux',
            'Базовое и продвинутое изучение Python',
            'Работать с API запросами',
            'Изучить фреймворк Django',
            'Базы данных PostgreSQL',
            'Системы Git и Github',
            'Создание телеграм ботов',
            'Взаимодействие с Frontend частью'
        ],
        titles: [
            {
                name: 'Знакомство с Python и установка инструментов',
                array: [
                    'Настройка среды разработчика',
                    'Введение в Linux',
                    'Первая программа на Python',
                    'Строки в Python',
                    'Условия в Python',
                    'Циклы в Python',

                ]
            },
            {
                name: 'Продвинутый Python',
                array: [

                    'Tuples & Lists',
                    'Sets & Dictionary',
                    'Встроенные функции и ошибки',
                    'Работа с файлами',
                    'Классы в Python',
                ]

            },
            {
                name: 'Базы данных',
                array: [
                    'Введение в базу данных SQL',
                    'Методы в базе данных',
                    'Функции в базе данных',

                ]
            },
            {
                name: 'HTTP Протоколы',
                array: [
                    'Client, Server Application',
                    'Понятия URL, API',
                    'TCP, UDP',
                    'SHH, TELNET, SFTP',
                    'HTTP, HTTPS',
                    'Get Request',
                    'Структура HTML страницы',

                ]
            },
            {
                name: 'Requests, JSON, CRUD',
                array: [
                    'JSON модуль',
                    'Requests модуль',
                    'HTTP методы',
                    'CRUD - Create, Read, Update, Delete',
                    'TimeOut',
                    'Environment'

                ]
            },
            {
                name: 'Git и Телеграм боты',
                array: [
                    'Работа с системой контроля версий Git',
                    'Крупнейший хостинг сервис Github',
                    'Создание Телеграм ботов'

                ]
            },
        ],
        resume: ['Язык программирования Python 3',
            'Работа с библиотеками Python: Django, Rest Framework',
            'Принципы работы ООП',
            'Понимание принципов алгоритмов и структур данных',
            'Система авторизации пользователей',
            'Система регистрации пользователей',
            'Работа с базами данных PostgreSQL',
            'Разработка базовой логики и алгоритмов работы приложения',
            'Необходимые интеграции с внешними сервисами',
            'Обеспечение корректной работы всех функций сайта и его вычислительной логики']
    }


    const [transitionFront, setTransitionFront] = useState(false)
    const [ThanksModal, setThanksModal] = useState(true)

    setTimeout(() => {
        setTransitionFront(true)
    }, 100);

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


    const [OpenModal, setOpenModal] = useState(false)
    const [modalFooter1, setModalFooter1] = useState(false)
    const [modalFooter2, setModalFooter2] = useState(false)
    const [modalFooter3, setModalFooter3] = useState(false)

    return (
        <div className={transitionFront === true ? 'main__opacity' : 'main__opacity-time'}>

            <FrontBackground backend ThanksModal={ThanksModal} OpenModal={OpenModal} setOpenModal={setOpenModal}
                             ThanksModalForCourses={ThanksModalForCourses}
                             setThanksModal={setThanksModal} setThanksModalForCourses={setThanksModalForCourses}/>
            <About backend state={state.about}/>
            <Tech backend/>
            <Target backend/>
            <Dropdown backend state={state.titles}/>
            <Diploma backend state={state.resume}/>
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

export default Backend;