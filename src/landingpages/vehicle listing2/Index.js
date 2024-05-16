import React from 'react'
import { CarDetail } from './style'
import image from '../../images/bari car.svg'
import Navbar from '../../component/navbar/Index'
import handle from '../../images/handle1.svg'
import handle2 from '../../images/handle2.svg'
import star from '../../images/ic-actions-star.png'
import star1 from '../../images/ic-actions-star white.png'
import like from '../../images/Like.svg'
import man from '../../images/taimoor.svg'
import bachi from '../../images/bachi.svg'
import arrow from '../../images/arrow-down.png'
import Index from '../footer/Index'
import { useNavigate } from 'react-router-dom'
const Vehicle3 = () => {
    const menuitem = [
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/lambo1.svg", image5: './image/profile-2user.svg', name: "Koenigsegg", petrol: "90L", price: "$99.00/", people: "2 People" },
        { Images: './image/heartwhite.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/lambo2.svg", image5: './image/profile-2user.svg', name: "Nissan GT - R", petrol: "80L", price: "$80.00/", people: "2 People" },
        { Images: './image/heartwhite.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/lambo3.svg", image5: './image/profile-2user.svg', name: "Rolls-Royce", petrol: "70L", price: "$96.00/", people: "4 People" },
        { Images: './image/heartwhite.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/lambo3.svg", image5: './image/profile-2user.svg', name: "Rolls-Royce", petrol: "70L", price: "$96.00/", people: "4 People" },
    ];
    const menuitem2 = [
        { Images: './image/heartwhite.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/vigo1.svg", image5: './image/profile-2user.svg', name: "All New Rush", petrol: "70L", price: "$72.00/", people: "6 People" },
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/vigo2.svg", image5: './image/profile-2user.svg', name: "CR - V", petrol: "80L", price: "$80.00/", people: "6 People" },
        { Images: './image/heartwhite.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/vigo3.svg", image5: './image/profile-2user.svg', name: "All New Terios", petrol: "90L", price: "$74.00/", people: "6 People" },
        { Images: './image/heartwhite.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/vigo3.svg", image5: './image/profile-2user.svg', name: "All New Terios", petrol: "90L", price: "$74.00/", people: "6 People" },
    ];
    const bill1 = useNavigate();
 const billing = (state) => {
   bill1('/BilliDetail', { state })
};

    return (
        <>
            <div>
                <Navbar />
            </div>
            <CarDetail style={{ backgroundColor: " #F6F7F9" }}>


                <div className="hello">
                    {/* <div style={{display:"flex"}}> */}
                    <div className='main-image'>
                        <img src={image} className='image-1' />

                        <div className='small-image-div'>
                            <img src={handle} className='small-image' />
                            <img src={handle} className='small-image' />
                            <img src={handle2} className='small-image' />
                            <img src={handle} className='small-image' />
                            <img src={handle2} className='small-image' />
                        </div>
                    </div>



                    <div className='card'>
                        <div>
                            <p className='heading'>Nissan GT - R</p>
                            <div className='star-1'>
                                <img src={star} className='star' />
                                <img src={star} className='star' />
                                <img src={star} className='star' />
                                <img src={star} className='star' />
                                <img src={star1} className='star' />
                                <p className='review'>440+ Reviewer</p>
                            </div>

                        </div>
                        <div className='like'>
                            <img src={like} />
                        </div>
                        <div className='main-nimso'>
                            <p className='nimso'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                        </div>
                        <div className='main-headind-div'>
                            <p className='car-1'>Type Car</p><span className='sport'>Sport</span><p className='car-1'>Capacity</p><span className='sport'>2 Person</span>
                        </div>
                        <div className='main-headind-div-1'>
                            <p className='car-1'>Steering </p><span className='sport-1'>Manual</span><p className='car-2'>Gasoline </p><span className='sport'>70L</span>
                        </div>
                        <div className='main-head-button'>
                            <div className='main-button-div'>
                                <p className='dollar'>$80.00/ </p><span className='day'>days</span>
                            </div>
                            <div className='btn-div'>
                                <button className='btn' onClick={()=>billing()}>Rent Now</button>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='card-2'>
                    <div className='card-head'>
                        <p className='review-1'>Reviews</p>
                        <p className='blue'>13</p>
                    </div>
                    <div className='man'>
                        <img src={man} />
                        <p className='alex'>Alex Stanton</p>


                    </div>
                    <div className='buka-1'>
                        <span className='buka'>CEO at Bukalapak</span>
                    </div>
                    <div className='main-head-star'>

                        <p className='date'>21 July 2022</p>
                        <div className='starfish'>
                            <img src={star} className='main-star' />
                            <img src={star} className='main-star' />
                            <img src={star} className='main-star' />
                            <img src={star} className='main-star' />
                            <img src={star1} className='main-star' />
                        </div>

                    </div>
                    <div className='happy-1'>
                        <p className='happy'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                    </div>

                    <div className='man'>
                        <img src={bachi} />
                        <p className='alex-1'>Skylar Dias</p>


                    </div>
                    <div className='buka-1'>
                        <span className='buka'>CEO at Amazon</span>
                    </div>
                    <div className='main-head-star'>

                        <p className='date'>20 July 2022</p>
                        <div className='starfish'>
                            <img src={star} className='main-star' />
                            <img src={star} className='main-star' />
                            <img src={star} className='main-star' />
                            <img src={star} className='main-star' />
                            <img src={star1} className='main-star' />
                        </div>

                    </div>
                    <div className='happy-1'>
                        <p className='happy'>We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                    </div>

                    <div className='show-1'>
                        <p className='show'>Show All</p>
                        <img src={arrow} className='arrow' />
                    </div>

                </div>
                <div className='card-3'>
                    <div className="head-card">
                        <p className='recent-car'>Recent Car</p>
                        <p className='view'>View All</p>
                    </div>

                </div>
                <div className='map-method'>
                    {menuitem.map((item) => (
                        <div className='main-card'>
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
                                    <p className='color'>{item.people}</p>
                                </div>

                            </div>


                            <div className="pakistani">
                                <p className='pkr'> <span className='price-2'>{item.price} <span className='day-1'>day</span></span></p>
                                <button className='btn2'>Rent Now</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='card-3'>
                    <div className="head-card">
                        <p className='recent-car'>Top rated Car</p>
                        <p className='view'>View All</p>
                    </div>

                </div>
                <div className='map-method'>
                    {menuitem2.map((item) => (
                        <div className='main-card'>
                            <div className='card--9'>
                                <p className='swift' >{item.name} <br /> <span style={{ color: "#90A3BF", fontSize: "13px" }}>SUV</span> </p>
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
                                    <p className='color'>{item.people}</p>
                                </div>

                            </div>


                            <div className="pakistani">
                                <p className='pkr'> <span className='price-2'>{item.price} <span className='day-1'>day</span></span></p>
                                <button className='btn2'>Rent Now</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* </div> */}
            </CarDetail>
            <div>
                <Index />
            </div>
        </>
    )
}

export default Vehicle3
