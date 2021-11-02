import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Feedback.css';
import 'aos/dist/aos.css';
import ulios from '../../img/ulios.jpg';
import muha from '../../img/muha.jpg';
import aigerim from '../../img/aigerim.jpg';
import karlygach from '../../img/karlygach.jpg';
import kanat from '../../img/kanat.jpg';
import bektur from '../../img/bektur.jpg';
import nura from '../../img/nura.jpg';
import vladimir from '../../img/vladimir.jpg';
import erkin from '../../img/erkin.jpg'
import nursBaike from '../../img/nurs_baike.jpg'
import nurs from '../../img/nurs.jpg'


const Feedback = () => {

    const essay = [
        {
            name: 'Улан',
            title: 'Frontend React Developer',
            photo: ulios,
            text: 'Обучился необходимому стэку технологий' +
                '                                        Html, Css, Javascript, React, Redux, React Native. Встретился с дружелюбной' +
                '                                        атмосферой и отзывчивыми, квалифицированными преподавателями. Реализовал\n' +
                '                                        интересные проекты, участвовал в хакатонах, пополнил портфолио. На данный момент\n' +
                '                                        уже работаю над реальными веб-сайтами. Благодаря ITC Bootcamp смог улучшить свои\n' +
                '                                        навыки до Frontend Junior специалиста.'
        },
        {
            name: 'Айгерим',
            title: 'Frontend React & React Native Developer',
            photo: aigerim,
            text: 'В ITC Bootcamp я научилась самым современым\n' +
                '                                        технологиям\n' +
                '                                        Frontend разработки, за короткое время я стала специалистом в области создания\n' +
                '                                        веб-сайтов\n' +
                '                                        и мобильных приложений. На данный момент я являюсь ментором и работаю в\n' +
                '                                        outsourcing на зарубежные\n' +
                '                                        компании. В моем портфолио более десяти коммерческих проектов!'
        },
        {
            name: 'Канат',
            title: 'Javascript & React Developer',
            photo: kanat,
            text: 'Я закончил ITC Bootcamp, мне 14 лет, с детства я\n' +
                '                                        увлекался программированием и решил,\n' +
                '                                        что надо уже изучать что-то более серьёзное. Поэтому решил записаться на курсы\n' +
                '                                        по Frontend разработке в ITC Bootcamp.\n' +
                '                                        Мне очень понравилось, я научился создавать сайты и кодить на языке Javascript,\n' +
                '                                        стал лучшим студентом в группе и\n' +
                '                                        остался на стажировку. Сейчас работаю над большим проектом.'
        },
        {
            name: 'Мухаммад',
            title: 'Frontend Developer',
            photo: muha,
            text: 'ITC Bootcamp курсы где каждый может стать' +
                '                                        программистом. Это место зацепило меня невероятным вайбом, процесс обучение\n' +
                '                                        дается легко благодаря отличной квалификации здешних менторов. Рекомендую это\n' +
                '                                        место всем кто хочет стать успешным кодером!'
        },
        {
            name: 'Карлыгач',
            title: 'Python Backend Developer',
            photo: karlygach,
            text: 'Все на высшем уровне! Закончила курс\n' +
                '                                        программирования на языке Python и осталась довольна после окончания курса.\n' +
                '                                        Очень понравилась подача материала, прекрасные\n' +
                '                                        примеры, хорошо иллюстрирующие и просто объясняющие самые сложные на первый\n' +
                '                                        взгляд понятия. Упор сделан на основные методы и способы\n' +
                '                                        программирования с учетом специфики языка! Вопросы, которые возникали по теме\n' +
                '                                        или даже не по теме, - все были\n' +
                '                                        рассмотрены и объяснены.'
        },
        {
            name: 'Нурайым',
            title: 'Python Backend Developer',
            photo: nura,
            text: 'Впервые нашла курсы ITC Bootcamp в Инстаграме и ни разу не пожалела, что записалась. Выбрала Python backend, так как курс очень перспективный и интересный. Наши менторы очень доходчиво и понятно все объясняют, отдельно хотелось бы выделить именно моего ментора - Азата, Азат специалист в своём деле и он всегда старается оказать необходимое внимание каждому ученику. Благодаря ему, надеюсь, мы выйдем уже отсюда с полным багажом знаний'
        },
        {
            name: 'Бектур',
            title: 'Python Backend Developer',
            photo: bektur,
            text: 'Проведенные 3 месяца в ITC BOOTCAMP прошли очень быстро, казалось  за такой срок вряд-ли чему то можно научиться но я убедился в обратном, эти 3 месяца были самыми продуктивными, я не жалею что учился тут! Мне очень понравился язык Python, на нем можно написать интересные программы, а главное обучаешься кодить на Python довольно быстро.'
        },
        {
            name: 'Владимир',
            title: 'Python Backend Developer',
            photo: vladimir,
            text: 'Buenas tardes друзья, меня зовут Владимир, я Junior Python Backend Developer. Я выбрал ITC Bootcamp не случайно, ' +
                'а по многочисленным хорошим отзывам от учеников в ITC Bootcamp. Ментора преподают доходчиво и весело, каждый день мы изучаем что-то новое, и не стоим на месте. ' +
                'Так почему именно Python? Да все просто, я его выбрал из-за того, что этот ЯП бурно используется в создании новейших технологий и Web продуктов! Ведь большая часть кодовой базы написана на Python, и соотвественно повышается спрос на таких специалистов.'
        },
        {
            name: 'Эркин',
            title: 'Frontend Developer',
            photo: erkin,
            text: 'На этих курсах обучают хорошо, меня обучили с нуля основам HTML и CSS, сейчас обучают JS. Ментор объясняет  понятно, но если что-то не будет понятно, ментор всегда готов снова объяснить. Всем уделяют одинаковое количество внимания. Уроки проходят интересно и не скучно. Я выбрал эти курсы, потому что мне удобно до них добираться. Эти курсы свою стоимость оправдывают.'
        },
        {
            name: 'Нурсултан',
            title: 'PLSQL & Frontend Developer',
            photo: nursBaike,
            text:'Я работаю plsql developerом. Решил поменять свое направление в IT. На данный момент являюсь студентом Front-End Developer. Выбрал этот курс так как обучение проходит в формате буткэмп и имеет более гибкий способ оплаты.'
        },
        {
            name: 'Нурсултан',
            title: 'Frontend Developer',
            photo: nurs,
            text:'Меня зовут Нурсултан. Мне 16 лет. На данный момент учусь в школе и паралельно учу программирование. Мечтаю работать в Гугле как Front-end разработчик и добиться своей мечты мне помогает Bootcamp ITC. Тут очень хорошие специалисты которые помогают и подсказывают что делать. Советую эти курсы!'
        }

    ]


    const settings = {
        dots: false,
        infinite: true,
        cssEase: 'ease',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 1
                }
            }, {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1
                }
            }, {
                breakpoint: 370,
                settings: {
                    slidesToShow: 1
                }
            }]
    };
    return (
        <section className={'feedback'}>
            <h2>Отзывы наших студентов</h2>
            <div className="container">
                <div>
                    <Slider className="row" {...settings}>
                        {essay.map((el, id) => {
                            return (
                                <div key={id} data-aos="zoom-in-up" className="col-4">
                                    <div className="feedback__opacity">
                                        <div className="feedback__box feedback__box-1">
                                            <div className="feedback__circle">
                                                <img src={el.photo} alt=""/>
                                            </div>
                                            <p className="feedback__title">{el.name}</p>
                                            <p className="feedback__job">{el.title}</p>
                                            <p className="feedback__text">{el.text}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Feedback;