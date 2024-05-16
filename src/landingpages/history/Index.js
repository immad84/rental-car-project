import React from 'react'
import { History1, Model2 } from './style'
import Navbar from '../../component/navbar/Index'
import car from '../../images/choti-car.svg'
import gas from '../../images/gas-station.svg'
import image from '../../images/download.png'
// import wheel from '../../images/wheel.png'
// import profile from '../../images/profile-2user.png'
import carr from '../../images/carrr.svg'
import profile2 from '../../images/profile-2user.svg'
import Index from '../footer/Index'
import Modal from "react-modal";
// import React, { useState } from "react";
import { useState } from 'react'
import star from '../../images/ic-actions-star.png'
import white from '../../images/ic-actions-star white.png'
import Log1 from  '../../landingpages/model/Model1'
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-49%, -49%)",
        backgroundColor: "#FFFFFF",
        width: 316,
        padding:"4px"
        // height: 32,
        // border:" 14px"


    },
};
const History = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div>
                <Navbar />
            </div>
            <History1>
                <div className='parent-div'>
                    <div className='parent_div'>
                        <p className='history'>History</p>
                        <p className='history2'>Here you can see the history of rent cars that you used </p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div className='main_card'>
                            <div className='card_1'>
                                <p className='nissan'>Nissan GT - R</p><br /><span><p className='sport'>Sport</p></span>


                            </div>
                            <div className='button'>
                                {/* <p className='nissan'>Nissan GT - R</p><br /><span><p className='sport'>Sport</p></span> */}
                                <p className='cancel'><Log1/></p><span><button className='btn-1' onClick={setModalOpen}>Return</button></span>
                                <Modal
                                    isOpen={modalOpen}
                                    onRequestClose={() => setModalOpen(false)}
                                    style={customStyles}
                                >
                                    <Model2>
                                        <div className='model'>
                                            <p className='thanks'>Thank You!</p>
                                            <p className='rate'>Please rate your trip</p>
                                            <div className='star-1'>
                                                <img src={star} className='star' />
                                                <img src={star} className='star' />
                                                <img src={star} className='star' />
                                                <img src={star} className='star' />
                                                <img src={white} className='star' />
                                            </div>
                                            <div className=' writing'>
                                                {/* <div style={{ marginTop: "2%" }}>
                                                    <label htmlFor='' className='' >Message</label>
                                                </div> */}

                                                
                                                <textarea name="Hhhhhhh" id="" cols="35" rows="7" className='text-area'></textarea>
                                            </div>
                                            <div>
                                                <button className='btnn'>Send</button>
                                            </div>

                                        </div>
                                    </Model2>
                                    {/* <button onClick={() => setModalOpen(false)}>Close Modal</button> */}
                                </Modal>

                            </div>

                            <div style={{ display: "flex" }}>
                                <div className='car-1'>
                                    <img src={car} />
                                </div>
                                <div className='main-bridge'>
                                    <p className='london'>London Bridge</p>
                                    <p className='point'>Pickup point</p>
                                </div>
                            </div>

                            <div className='main_line'>
                                <img src={image} className='line' />
                                <p className='days'>4 Days</p>
                            </div>
                            <div className='main-bridge-2'>
                                <p className='london-1'>King George</p>
                                <p className='point-1'>Drop Off</p>
                            </div>
                            {<div className='main_head'>
                                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <img src={gas} />
                                    <p className='liter'>80L</p>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <img src={carr} />
                                    <p className='liter'>Manual</p>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <img src={profile2} />
                                    <p className='liter'>People</p>
                                </div>
                                <div className='dollar'>
                                    <p className='price_1'>Price</p><span className='dolar-9'>$99.00</span><p className='day'>/day</p>
                                </div>
                            </div>}
                        </div>
                        <div className='main_card_1'>
                            <div className='card_1'>
                                <p className='nissan'>Nissan GT - R</p><br /><span><p className='sport'>Sport</p></span>


                            </div>
                            <div className='button_card'>
                                {/* <p className='nissan'>Nissan GT - R</p><br /><span><p className='sport'>Sport</p></span> */}
                                <span><button className='btn-2'>ReRent</button></span>

                            </div>

                            <div style={{ display: "flex" }}>
                                <div className='car-1'>
                                    <img src={car} />
                                </div>
                                <div className='main-bridge'>
                                    <p className='london'>London Bridge</p>
                                    <p className='point'>Pickup point</p>
                                </div>
                            </div>

                            <div className='main_line'>
                                <img src={image} className='line' />
                                <p className='days'>4 Days</p>
                            </div>
                            <div className='main-bridge-2'>
                                <p className='london-1'>King George</p>
                                <p className='point-1'>Drop Off</p>
                            </div>
                            {<div className='main_head'>
                                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <img src={gas} />
                                    <p className='liter'>80L</p>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <img src={carr} />
                                    <p className='liter'>Manual</p>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <img src={profile2} />
                                    <p className='liter'>People</p>
                                </div>
                                <div className='dollar'>
                                    <p className='price_1'>Price</p><span className='dolar-9'>$99.00</span><p className='day'>/day</p>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
                <div>
                    <Index />
                </div>

            </History1>
        </>
    )
}

export default History;