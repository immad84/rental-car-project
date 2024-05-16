import React, { useEffect } from 'react'
import { Home2, Home3, Homediv, Home4, Home5 } from './style'
import Navbar from '../../component/navbar/Index'
import '../../App.css'
import bigimage from '../../images/banner lambo 1.svg'
import group from '../../images/Group 24.svg'
import heart from '../../images/Like.svg'
import car from "../../images/car.svg"
import gas from '../../images/gas-station.svg'
import profile from '../../images/profile-2user.svg'
import manual from '../../images/carrr.svg'
import groupp from '../../images/group-1.svg'
// import driver from '../../images/driver-1 1.svg'
import { useForm, SubmitHandler } from "react-hook-form"
import Index from '../footer/Index'
import { useNavigate } from 'react-router-dom'
import HomeModal from '../Home-Modal/HomeModal'
// import { data } from '../../data'
// import axios from 'axios'

// console.log(data.info.schema);
// const url = data.info.schema

const Home = () => {


    const { register, handleSubmit, formState: { errors }, } = useForm();



    const menuitem = [
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car.svg", image5: './image/profile-2user.svg', name: "swift", petrol: "90L", price: "4000/" },
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car2.svg", image5: './image/profile-2user.svg', name: "Wagon-R", petrol: "80L", price: "3500/" },
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car3.svg", image5: './image/profile-2user.svg', name: "Rolls-Royce", petrol: "70L", price: "3000/" },
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car4.svg", image5: './image/profile-2user.svg', name: "NissanGT-R", petrol: "80L", price: "3000/" },


    ];
    const setitem = [
        { Image: './image/group-1.svg', name: "Books with flexibility", paragraph: "Easily find car and book with no change fees." },
        { Image: './image/setting.svg', name: "Trusted and free", paragraph: "We’re completely free to use – no hidden charges or fees.." },
        { Image: './image/setting-1.svg', name: "We know travel ", paragraph: "With 10 years of experience, we're ready to help find your perfect car" },
    ];
    const navigate = useNavigate()
    const vehicle = (state) => {
        navigate("/vehicle", { state })
    }
    // useEffect(()=>{
    //    const response = axios.get(url)
    //    console.log(response.data);
    // }, [])


    return (
        <>

            <div>
                <Navbar />
            </div>
            <div className='main-box'>
                <Homediv>
                    <div className='container'>
                        <div className='' style={{ position: "relative" }}>
                            <img src={bigimage} className='big-iamge' />
                            <div className='div-one'>
                                <p className='main-head'>Safer ,Faster And <br /> Comfortable</p>
                                <p className='para-head'>Get in touch with our <br />
                                    luxury cars</p>
                                <button className='btn1' onClick={() => vehicle()}>Rent Now</button>
                            </div>
                        </div>

                    </div>
                </Homediv>
                <Home2>
                    <div className='container'>
                        <div className='group-3'>
                            <img src={group} className='image-4' />
                            <div className='main__div'>
                                <p className='main__heading'>Rent a Car</p>
                                <p className='paragraph'>Rent a Car We pride ourselves in always going the <br /> extra mile for our customers.</p>
                            </div>
                        </div>
                    </div>
                </Home2>
                <Home3>
                    <div className='card-1'>

                        <div className='card__4'>
                            <p style={{ color: "#90A3BF", fontSize: "16px", fontWeight: "600" }}>Popular Car</p>
                            <p style={{ color: "#3563E9", fontWeight: "600", fontSize: "16px", cursor: "pointer" }} onClick={() => vehicle()} >View All</p>
                        </div>
                        <div className='map-item'>
                            {menuitem.map((item) => (
                                <div className='main-card' key={item.id}>
                                    <div className='card--9'>
                                        <p className='swift' >{item.name} <br /> <span style={{ color: "#90A3BF", fontSize: "13px" }}>Sport</span> </p>
                                        <img src={item.Images} style={{ height: "41%", marginTop: "8%" }} />

                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <img src={item.Image2} />
                                    </div>
                                    <div className='card--10'>
                                        <div className='gasoline'>
                                            <img src={item.Image3} />
                                            <p className='color'>{item.petrol}</p>
                                        </div>
                                        <div className='gasoline'>
                                            <img src={item.Image4} />
                                            <p className='color'>Manual</p>
                                        </div>
                                        <div className='gasoline'>
                                            <img src={item.image5} />
                                            <p className='color'>4 People</p>
                                        </div>

                                    </div>


                                    <div className="pakistani">
                                        <p className='pkr'>pkr. <span className='price-2'>{item.price} <span className='day-1'>day</span></span></p>
                                        <button className='btn2'>Rent Now</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Home3>
                <Home4>
                    <div className='div-1'>

                        <div className='card-12'>
                            <p className='Heading__7'>Fell the best experience with our luxury car</p>
                            <div className='exp-div' style={{ display: "flex", justifyContent: "space-around", marginInline: "56px", gap: "8%" ,}}>
                                {setitem.map((item) => (
                                    <div className='experience-div'>
                                        <img src={item.Image} className='' />
                                        <p className='book'> {item.name}</p>
                                        {<p className='main-para'>{item.paragraph}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </Home4>
                <Home5>
                    <div className='main_div1'>
                        <div className='subscrib-backgrond'>
                            <div className='goals'>
                                <p className='driver-para'>Becme A Driver <br />Your time. Your goals. You're the<br /> Boss.</p>
                            </div>
                            <div className='join'>
                                <p className='paragrah-3'>Subscribe And Joins Us</p>

                                <div  className='email-2'>
                                    <input type='email' name='Email' placeholder='   Email' className='email_1' {...register('Email', { required: true })} />
                                    <br />


                                    <div>
                                        <HomeModal />
                                    </div>


                                </div>
                                {errors.Email && <p style={{ color: "red" }}>Email is Required</p>}

                            </div>
                        </div>



                    </div>


                </Home5>
            </div>
            <div>
                <Index />
            </div>
        </>
    )
}

export default Home;