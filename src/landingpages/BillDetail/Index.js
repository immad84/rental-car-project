import React from 'react'
import { Bill1 } from './style'
import Navbar from '../../component/navbar/Index'
import visa from '../../images/visa.svg'
import mc from '../../images/mc.svg'
import paypal from '../../images/PayPal.svg'
import bitcoin from '../../images/Bitcoin.svg'
import logo from '../../images/ic-security-safety.svg'
import handle from '../../images/handle1.svg'
import star from '../../images/ic-actions-star.png'
import white from '../../images/ic-actions-star white.png'
import Index from '../footer/Index'
const BilliDetail = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <Bill1 >



                <div style={{ display: "flex" }}>
                    <div className="card">
                        <div className='card-1'>
                            <p className='info'>Billing Info</p>
                            <p className='info2'>Please enter your billing info</p>
                            <div className='info3'>
                                Step 1 of 4
                            </div>
                            <div style={{ display: "flex", gap: "31%" }}>
                                <div className='name-1'>
                                    <label for="Name" className='name'>Name</label> <br />
                                    <input type='name' placeholder='   Your name ' className='placeholder' />

                                </div>

                                <div className='name-1'>
                                    <label for="Name" className='name'>Phone Number</label> <br />
                                    <input type='name' placeholder='   Phone number ' className='placeholder-1' />

                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "31%" }}>
                                <div className='name-1'>
                                    <label for="Name" className='name'>Address</label> <br />
                                    <input type='name' placeholder='   Address ' className='placeholder' />

                                </div>

                                <div className='name-1'>
                                    <label for="Name" className='name'>Town/City</label> <br />
                                    <input type='name' placeholder='   Town or city ' className='placeholder-1' />

                                </div>
                            </div>





                        </div>


                    </div>
                    <div className='first-card'>
                        <div className='second-card'>
                            <p className='rental'>Rental Summary</p>
                            <p className='paragraph'>Prices may change depending on the length of the rental and the price of your rental car.</p>
                        </div>
                        <div>
                            <div className='card-handle'>
                                <img src={handle} className='handle' />
                                <p className='gtr'>Nissan GT - R</p>

                            </div>
                            <div className='main-star'>
                                <img src={star} className='star-1' />
                                <img src={star} className='star-1' />
                                <img src={star} className='star-1' />
                                <img src={star} className='star-1' />
                                <img src={white} className='star-1' />
                                <p className='review'>440+ Reviewer</p>
                            </div>
                            <div className='hr'>
                                <hr />
                            </div>
                            <div className='subtotal'>
                                <p className='total'>Subtotal</p>
                                <p className='dollar'>$80.00</p>
                            </div>
                            <div className='subtotal'>
                                <p className='total'>Tax</p>
                                <p className='dollar'>$0</p>
                            </div>
                            <div className='rental-1'>
                                <p className='rent'>Total Rental Price</p>
                                {/* <p></p> */}
                                <span className='dollar'>$80.00</span>
                            </div>
                            <p className='price'>Overall price and includes rental discount</p>
                        </div>
                    </div>
                </div>


                <div className="card-2">
                    <div className='card-1'>
                        <p className='info'>Rental Info</p>
                        <p className='info2'>Please select your rental date</p>
                        <div className='info3'>
                            Step 2 of 4
                        </div>
                        <div className='radio'>
                            <input type='radio' />
                            <p className='pickup'>Pick - Up</p>
                        </div>
                        <div style={{ display: "flex", gap: "31%" }}>
                            <div className='name-1'>
                                <label for="Name" className='name'>Locations</label> <br />
                                <select className='placeholder_1'>
                                    <option value="someOption">Select Your City</option>
                                    <option value="otherOption">Lahore</option>
                                    <option value="otherOption">Karachi</option>
                                    <option value="otherOption">islamabad</option>
                                    <option value="otherOption">DG khan</option>
                                </select>
                                {/* <input type='name' placeholder='   Your name ' className='placeholder' /> */}

                            </div>

                            <div className='name-1'>
                                <label for="Name" className='name'>Date</label> <br />
                                <input type='date' placeholder='   select Your Date ' className='placeholder_2' />

                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "31%" }}>
                            <div className='name-1'>
                                <label for="Name" className='name'>Time</label> <br />
                                <input type='time' placeholder='   select Your time ' className='placeholder_3' />

                            </div>


                        </div>
                        <div className='radio'>
                            <input type='radio' />
                            <p className='pickup'>Drop - Off</p>
                        </div>
                        <div style={{ display: "flex", gap: "31%" }}>
                            <div className='name-1'>
                                <label for="Name" className='name'>Locations</label> <br />
                                <select className='placeholder_1'>
                                    <option value="someOption">Select Your City</option>
                                    <option value="otherOption">Lahore</option>
                                    <option value="otherOption">Karachi</option>
                                    <option value="otherOption">islamabad</option>
                                    <option value="otherOption">DG khan</option>
                                </select>
                                {/* <input type='name' placeholder='   Your name ' className='placeholder' /> */}

                            </div>

                            <div className='name-1'>
                                <label for="Name" className='name'>Date</label> <br />
                                <input type='date' placeholder='   select Your Date ' className='placeholder_2' />

                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "31%" }}>
                            <div className='name-1'>
                                <label for="Name" className='name'>Time</label> <br />
                                <input type='time' placeholder='   select Your time ' className='placeholder_3' />

                            </div>


                        </div>





                    </div>


                </div>
                <div className="card-3">
                    <div className='card-1'>
                        <p className='info'>Payment Method</p>
                        <p className='info2'>Please enter your payment method</p>

                        <div className='info3'>
                            Step 3 of 4
                        </div>
                        <div style={{ backgroundColor: "#F6F7F9", marginTop: "4%", borderRadius: "10px", height: "45vh" }}>
                            <div className='visa'>
                                <div className='radio-1'>
                                    <input type='radio' />
                                    <p className='pickup'>Credit Card</p>
                                </div>
                                <div className='visa-mc'>
                                    <img src={visa} />
                                    <img src={mc} />

                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "29%" }}>
                                <div className='name-1'>
                                    <label for="Name" className='name-card'>Card Number</label> <br />
                                    <input type='number' placeholder='   Card Number ' className='card-number' />

                                </div>
                                <div className='name-1'>
                                    <label for="Name" className='name-card'>Expration Date</label> <br />
                                    <input type='date' placeholder='   Enter Your Date ' className='card-number_1' />

                                </div>


                            </div>
                            <div style={{ display: "flex", gap: "29%" }}>
                                <div className='name-1'>
                                    <label for="Name" className='name-card'>Card Holder</label> <br />
                                    <input type='text' placeholder='   Card Holder ' className='card-number' />

                                </div>
                                <div className='name-1'>
                                    <label for="Name" className='name-card'>CVC</label> <br />
                                    <input type='text' placeholder='   CVC ' className='cvc' />

                                </div>


                            </div>
                        </div>
                        <div className='paypal-main'>
                            <div className='paypal'>
                                <input type='radio' />
                                <p className='heading'>PayPal</p>
                            </div>
                            <div>
                                <img src={paypal} className='image-p' />
                            </div>
                        </div>
                        <div className='paypal-main'>
                            <div className='paypal'>
                                <input type='radio' />
                                <p className='heading'>Bitcoin</p>
                            </div>
                            <div>
                                <img src={bitcoin} className='image-p' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-4">
                    <div className='card-1'>
                        <p className='info'>Confirmation</p>
                        <p className='info2'>We are getting to the end. Just few clicks and your rental is ready!</p>

                        <div className='info3'>
                            Step 4 of 4
                        </div>
                    </div>
                    <div className='checkbox'>
                        <input type='checkbox' className='box' />
                        <p className='para'>I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
                    </div>
                    <div className='checkbox-1'>
                        <input type='checkbox' className='box' />
                        <p className='para'>I agree with our terms and conditions and privacy policy.</p>
                    </div>
                    <div className='btn-1'>
                        <button className='btn'>Rent Now</button>
                    </div>
                    <div className='logo'>
                        <img src={logo} />
                    </div>
                    <div className='safe-1'>
                        <p className='safe'>All your data are safe</p>
                        <p className='safe-3'>We are using the most advanced security to provide you the best experience ever.</p>
                    </div>
                </div>


            </Bill1>
            <div>
                <Index />
            </div>
        </>
    )
}

export default BilliDetail;
