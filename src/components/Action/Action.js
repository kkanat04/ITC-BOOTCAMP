import React from 'react';
import './Action.css'
import ButtonLesson from "../ButtonLesson/ButtonLesson";



const Action = (props) => {


    return (
       <div className="container">
            <section className={'action'}>

                <div className="action__wrap">
                    <h1>Станьте специалистом <br/> вместе с ITC Bootcamp</h1>
                    <ButtonLesson setOpenModal={props.setOpenModal}/>
                </div>


            </section>
        </div>

    );
};

export default Action;