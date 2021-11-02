import React,{useEffect} from 'react';
import './Students.css';


const Students = () => {


    return (
        <section className={'students'}>
            <div className="container">
                <h2>Работы наших учеников</h2>
                <div className="row">
                    <div className="col-4">
                        <div className="students__wrap">
                            <div className="students__box students__box-1"></div>
                            <p className="students__title">Сайт вакцинации</p>
                        </div>

                    </div>
                    <div className="col-4">
                        <div className="students__wrap">
                            <div className="students__box students__box-2"></div>
                            <p className="students__title">Приложение Cashback</p>
                        </div>

                    </div>
                    <div  className="col-4">
                        <div className="students__wrap">
                            <div className="students__box students__box-3"></div>
                            <p className="students__title">Приложение MathBest</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Students;