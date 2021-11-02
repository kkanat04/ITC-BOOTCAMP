import React, {useEffect} from 'react';
import './ModalFooter.css';
import instagram from '../../img/instagram.svg'
import telegram from '../../img/telegram.svg'
import facebook from '../../img/facebook.svg'

function ModalFooter({ modalFooter1, modalFooter2, modalFooter3, setModalFooter1,setModalFooter2,setModalFooter3}) {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return ()=> document.body.style.overflow = 'unset';
    }, []);

    useEffect(() => {
        document.body.style.touchAction= 'none';
        return ()=>  document.body.style.touchAction= 'unset';
    }, []);

    return (
        <div className='modalFooter-main'>
            <div className='modalFooter'>
                <p onClick={() => setModalFooter1(false) || setModalFooter2(false) || setModalFooter3(false)} className="modalFooterClose">X</p>

                {
                    modalFooter1 ? (

                        <div className='buttonContent'>
                            <div className="modalFooterWrap">
                                <img src={instagram} alt=""/>
                                <h2>instagram</h2>
                            </div>
                <div className="modalFooterLink">
                            <div><a target="_blank" href='https://www.instagram.com/itcbootcamp/'>Бишкек</a></div>
                            <div><a target="_blank" href='https://www.instagram.com/itcbootcamp.osh/'>Ош</a></div>
                            <div><a target="_blank" href='https://www.instagram.com/itcbootcamp.uz/'>Ташкент</a></div>
                        </div>
                        </div>

                    ) : modalFooter2 ?
                        <div className='buttonContent'>
                            <div className="modalFooterWrap">
                            <img src={telegram} alt=""/>
                            <h2>telegram</h2>
                            </div>
                            <div className="modalFooterLink">
                                <div><a target="_blank" href='https://t.me/joinchat/abOkUhdp-Cs5MmQ6'>Бишкек</a></div>
                                <div><a target="_blank" href='https://t.me/joinchat/IrxtPbwpDH5mMDU6'>Ош</a></div>
                                <div><a target="_blank" href='https://t.me/joinchat/IrxtPbwpDH5mMDU6'>Ташкент</a></div>
                            </div>
                        </div>
                        : modalFooter3 ?
                            <div className='buttonContent'>
                                <div className="modalFooterWrap">
                                <img src={facebook} alt=""/>
                                <h2>facebook</h2>
                                </div>
                                <div className="modalFooterLink">
                                <div><a target="_blank" href='https://www.facebook.com/itcbootcamp.uz'>Бишкек</a></div>
                                <div><a target="_blank" href='https://www.facebook.com/itcbootcamp.uz/'>Ош</a></div>
                                <div><a target="_blank" href='https://www.facebook.com/itcbootcamp.uz'>Ташкент</a></div>
                                </div>
                            </div> : null
                }
            </div>
        </div>
    );
}

export default ModalFooter;