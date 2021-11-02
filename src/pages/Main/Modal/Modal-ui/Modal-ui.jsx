import axios from "axios";
import React, {useEffect, useState} from "react";
import './Modal-ui.css'

function Modalui({setOpenModal, setThanksModal}) {

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

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return ()=> document.body.style.overflow = 'unset';
    }, []);
    useEffect(() => {
        document.body.style.touchAction= 'none';
        return ()=>  document.body.style.touchAction= 'unset';
    }, []);

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
            })
            .catch(function (error) {
            });
    }


    return (
        <>
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button style={{color: '#fff'}}
                                onClick={() => {
                                    setOpenModal(false);
                                }}
                        >
                            X
                        </button>
                    </div>
                    <div className="title">
                        <h1 className="h1Modal">ЗАПИСАТЬСЯ НА БЕСПЛАТНОЕ ЗАНЯТИЕ</h1>
                    </div>
                    <div className="body">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            sendMassege()
                            setThanksModal(false)
                            setOpenModal(false)
                        }}>


                            <input onChange={(e) => setInput1(e.target.value)} className='inp' type='text'
                                   maxLength='30' autoFocus required placeholder='Имя'/>


                            <input onChange={(e) => setInput2(e.target.value)} className='inp' type='email'
                                   maxLength='60' required placeholder='E-mail'/>


                            <input onChange={(e) => setInput3(e.target.value)} className='inp' type='number' required
                                   placeholder='Телефон'/>

                            <p className='Filials'>Выберите филиал:</p>


                            <div className={'radioBlock'}>

                                <div onClick={() => {
                                    setRadio('Бишкек')
                                    setFilials3(false)
                                    setFilials1(true)
                                    setFilials2(false)
                                }
                                } className='buttonFilials' style={{
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
                                }} className='buttonFilials' style={{
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
                                }} className='buttonFilials' style={{
                                    color: filials3 == true ? 'rgba(57, 61, 71, 1)' : null,
                                    background: filials3 == true ? '#fff' : null
                                }}>
                                    Ташкент
                                </div>
                            </div>
                            <div className="footer">
                                <button disabled={!formValid ? 'disabled' : null}>ЗАПИСАТЬСЯ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modalui;