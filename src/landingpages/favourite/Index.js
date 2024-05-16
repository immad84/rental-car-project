import React from 'react'
import { Favourite1 } from './style'
import Navbar from '../../component/navbar/Index'
import Index from '../footer/Index'

const Favourite = () => {
    const menuitem = [
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car.svg", image5: './image/profile-2user.svg', name: "swift", petrol: "90L", price: "4000/" },
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car2.svg", image5: './image/profile-2user.svg', name: "Wagon-R", petrol: "80L", price: "3500/" },
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car3.svg", image5: './image/profile-2user.svg', name: "Rolls-Royce", petrol: "70L", price: "3000/" },


    ];
    return (
        <>
            <div>
                <Navbar />
            </div>
            <Favourite1 className='main-head'>
                <div className='card-1'>
                    <div className='card-2'>
                        <p className='favourt-1'>Favourite</p>
                    </div>
                    <div >
                        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", width: "100%", marginTop: "3%" }}>
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
                </div>
                <div>
                <Index />
            </div>

            </Favourite1>
        </>
    )
}

export default Favourite
