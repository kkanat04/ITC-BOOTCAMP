import React from 'react';
import './ThanksModal.css'
import person from'../../img/person.png'


function ThanksModalUi(props) {
    return (
        <div className='ThanksModal'>
            <div className='modalContainer'>
                <div className='contentThanks'>
                    <h1 className="thanks">Благодарим вас за заявку, мы с вами обязательно свяжемся!</h1>
                    <img src={person} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default ThanksModalUi;