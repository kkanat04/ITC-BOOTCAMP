import React from 'react';
import './Consult.css'
import {useState, useEffect} from 'react';
import axios from "axios";


const Consult = ({open, setThanksModalForCourses, setThanksModal, ThanksModal}) => {

    if (ThanksModal === false) {
        setTimeout(() => {
            setThanksModal(true)
        }, 2000);
    }

    const [name, setInput1] = useState('')
    const [email, setInput2] = useState('')
    const [phone, setInput3] = useState('')

    const [radio, setRadio] = useState('')

    const [formValid, setFormValid] = useState(true)


    const [filials1, setFilials1] = useState(false)
    const [filials2, setFilials2] = useState(false)
    const [filials3, setFilials3] = useState(false)


    useEffect(() => {
        if (name && email && phone && radio) {
            setFormValid(true)
        } else {
            setFormValid(false)
        }

    }, [name, email, phone, radio])

    const text = `
        Имя: ${name}
        Email: ${email} 
        Телефон: ${phone} 
        Филиал: ${radio} 
    `


    const telegramSendMessageBishkek = 'https://api.telegram.org/bot2019764380:AAELnT9vbhy8lgHOKC0qkBpb27xj8iMQ_ZA/sendMessage?chat_id=-1001536006065&text=' + text
    const telegramSendMessageOsh = 'https://api.telegram.org/bot2019764380:AAELnT9vbhy8lgHOKC0qkBpb27xj8iMQ_ZA/sendMessage?chat_id=-1001275710697&text=' + text
    const telegramSendMessageTashkent = 'https://api.telegram.org/bot2019764380:AAELnT9vbhy8lgHOKC0qkBpb27xj8iMQ_ZA/sendMessage?chat_id=-1001255453600&text=' + text


    const sendMassege = () => {

        axios.post(radio == 'Бишкек' ? telegramSendMessageBishkek : null || radio == 'Ош' ? telegramSendMessageOsh : null || radio == 'Ташкент' ? telegramSendMessageTashkent : null)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>


            <section className={'consult'}>
                <div className="container">


                    <div className="consult__wrap">
                        <h2>Получить полную программу курса
                            и консультацию</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            sendMassege(e)
                            setInput1('')
                            setInput2('')
                            setInput3('')
                            setFilials1(false)
                            setFilials2(false)
                            setFilials3(false)
                            setRadio('disable')
                            open()
                            setThanksModalForCourses(false)
                        }}>
                            <div className="consult__input">
                                <input required onChange={(e) => setInput1(e.target.value)} value={name} type="text"
                                       placeholder={'Имя:'}/>
                                <input required onChange={(e) => setInput3(e.target.value)} value={phone} type="number"
                                       placeholder={'Телефон:'}/>
                                <input required onChange={(e) => setInput2(e.target.value)} value={email} type="email"
                                       placeholder={'E-mail:'}/>
                            </div>
                            <div className="consult__branch">
                                <p>Выберите филиал:</p>
                                <div className={'consult__flex'}>
                                    <div className='ContentFilialsFullStack'>


                                        <div onClick={() => {
                                            setRadio('Бишкек')
                                            setFilials3(false)
                                            setFilials1(true)
                                            setFilials2(false)
                                        }
                                        } className='buttonFilialsFullStack' style={{
                                            color: filials1 == true ? 'rgba(57, 61, 71, 1)' : null,
                                            background: filials1 == true ? '#fff' : null
                                        }}>
                                            Бишкек
                                        </div>
                                        <div onClick={() => {
                                            setRadio('Ош')
                                            setFilials3(false)
                                            setFilials1(false)
                                            setFilials2(true)
                                        }} className='buttonFilialsFullStack' style={{
                                            color: filials2 == true ? 'rgba(57, 61, 71, 1)' : null,
                                            background: filials2 == true ? '#fff' : null
                                        }}>
                                            Ош
                                        </div>

                                        <div onClick={() => {
                                            setRadio('Ташкент')
                                            setFilials3(true)
                                            setFilials1(false)
                                            setFilials2(false)
                                        }} className='buttonFilialsFullStack' style={{
                                            color: filials3 == true ? 'rgba(57, 61, 71, 1)' : null,
                                            background: filials3 == true ? '#fff' : null
                                        }}>
                                            Ташкент
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button disabled={!formValid ? 'disabled' : null}>записаться</button>
                        </form>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Consult;