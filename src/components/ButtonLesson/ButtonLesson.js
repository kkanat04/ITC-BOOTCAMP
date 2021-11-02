import React from 'react';
import './ButtonLesson.css'

const ButtonLesson = (props) => {
    return (

        <div className={'buttonLesson'}>
            <button onClick={() => props.setOpenModal(true)}>записаться на бесплатное занятие</button>
        </div>

    );
};

export default ButtonLesson;