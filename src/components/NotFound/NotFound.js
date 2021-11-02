import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <section className={'notFound'}>
            <div className="container">
                <div className="notFound__wrap">
                   <p className="notFound__404">404</p>
                    <p className="notFound__title">ой!</p>
                    <p className="notFound__text">Cтраница не найдена</p>
                </div>
            </div>
        </section>
    );
};

export default NotFound;