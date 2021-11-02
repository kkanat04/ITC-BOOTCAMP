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

const Design = ({ThanksModalForCourses, setThanksModalForCourses, endModal, openingModalHandler, setEndModal}) => {
    let state = {
        about: ['Научиться работать с различными графическими редакторами',
            'Разобрать, что такое дизайн-мышление',
            'Познакомиться с типографикой и теорией цвета',
            'Научиться взаимодействовать с пользователем',
            'Узнать, как собирать и тестировать прототипы'
        ],
        titles: [
            {
                name: 'Введение в профессию веб-дизайнера',
                array: [
                    'Чем занимается веб-дизайнер',
                    'Где работает, какие могут быть проекты',
                    'Этапы работы над проектом',
                    'В чём роль дизайнера на всех этапах проектах',
                    'UX, UI-дизайнеры: в чём разница',
                    'Знания из каких областей нужны веб-дизайнеру',

                ]
            },
            {
                name: 'Аналитика',
                array: [

                    'Артефакты UX',
                    'Исследование бизнеса',
                    'Референсные подборки и мудборды',
                    'Исследование пользователей',
                    'Разбор типов сайтов',
                    'UI-киты и Дизайн-система',
                    'Порядок действий (взаимодействие с клиентом)',
                ]

            },
            {
                name: 'Прототип в Figma',
                array: [
                    'Сетка. Что такое, как используется',
                    'Обзор программ',
                    'Создание прототипа в Figma',
                    'Создание интерактивного прототипа в Figma',
                    'Подготавливаем прототип к отправке клиенту',

                ]
            },
            {
                name: 'Типографика + композиция',
                array: [
                    'Определение',
                    'Основные понятия о шрифтах',
                    'Сочетания шрифтов',
                    'Приемы в работе со шрифтами',
                    'Примеры хорошо подобранных шрифтов',
                    'Текст на сайте. Инфостиль',
                    'Типографика в вебе',
                    'Тренды в веб-дизайне',
                    'Работа с контентом и текстами',

                ]
            },
            {
                name: 'Колористика',
                array: [
                    'Композиция и цвет',
                    'Подбор цветовой гаммы относительно ЦА',
                    'Визуальные акценты. Управление вниманием пользователя',

                ]
            },
            {
                name: 'Работа с фото (Photoshop)',
                array: [
                    'Цветокоррекция',
                    'Кадрирование',
                    'Фильтры семейства “Размытие”: по Гауссу, в движении, радиальное и т.д.',
                    'Настройки векторных объектов (заливка, градиент)',
                    'Перо. Работа с точками, узлами и кривыми',

                ]
            },
            {
                name: 'Адаптивный дизайн',
                array: [
                    'Научиться проектировать интересный,привлекательный и удобный интерфейс',
                    'Научиться создавать адаптивный дизайн',
                    'Научиться анализировать рынок и конкурентов',
                    'Научиться анализировать рынок и конкурентов',

                ]
            },
        ],
        resume: ['Создание дизайн-макетов для платформ iOS и Android',
            'Проектирование и прототипирование пользовательского интерфейса',
            'Создание адаптивных web-интерфейсов',
            'Сетка, типографика, иллюстрация, колористика, баланс',
            'UI kit/guideline',
            'Дизайн системы',
            'Архитектура приложений, таблиц данных и бизнесс процессов',
            'Иллюстрация',
            'Photoshop, XD, Illustrator, Figma',
        ]
    }
    const [transitionFront, setTransitionFront] = useState(false)
    const [ThanksModal, setThanksModal] = useState(true)

    if (ThanksModal === false) {
        setTimeout(() => {
            setThanksModal(true)
        }, 3000);
    }

    setTimeout(() => {
        setTransitionFront(true)
    }, 100);

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

            <FrontBackground design OpenModal={OpenModal} ThanksModal={ThanksModal} setOpenModal={setOpenModal}
                             ThanksModalForCourses={ThanksModalForCourses}
                             setThanksModal={setThanksModal} setThanksModalForCourses={setThanksModalForCourses}/>
            <About design state={state.about}/>
            <Tech design/>
            <Target design/>
            <Dropdown design state={state.titles}/>
            <Diploma design state={state.resume}/>
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

export default Design;