// import React from 'react'
// import { Contact1 } from './style'
// import Navbar from '../../component/navbar/Index'
// import frame from '../../images/Frame.svg'
// import frame2 from '../../images/Frame2.svg'
// import frame3 from '../../images/frame3.svg'
// const Contact = () => {
//     return (
//         <>
//             <div>
//                 <Navbar />
//             </div>
//             <Contact1>
//                 <div className='contact-main-1'>
//                     <div className='contact-2'>
//                         <div className='card'>
//                             <div style={{ display: "flex", flexDirection: "column" }}>
//                                 <p className='inform'>Contact Information</p>
//                                 <p className='para-1'>Fill up the form and our Team will get back <br />to you within 24 hours.</p>
//                             </div>
//                             <div className='frame-2'>
//                                 <div class="frame0ne">
//                                     <img src={frame} className='frame-1' />

//                                 </div>
//                                 <p className='number-1'>+91 98765 43210</p>
//                             </div>

//                         </div> 
//                         <div>
//                         <div className='head-drive-1'>
//               <h3 className='driving'>Driving Licence</h3>
//               <input type="text" name="" placeholder=' ' className='driving-2' />
//             </div>
//             </div>

//                     </div>
//                 </div>


//             </Contact1>
//         </>
//     )
// }

// export default Contact
import React from 'react';
import { Contact1 } from './style';
import Navbar from '../../component/navbar/Index';
import frame from '../../images/Frame.svg';
import frame2 from '../../images/Frame2.svg';
import frame3 from '../../images/frame3.svg';
import Index from '../footer/Index'

const Contact = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <Contact1>

                <div className='contact-main-1'>
                    <div className='contact-2'>
                        <div style={{ display: "flex" ,marginBottom:"4%"}}>
                            <div className='card' style={{ marginTop: "5%", marginInline: "4%" }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <p className='inform'>Contact Information</p>
                                    <p className='para-1'>Fill up the form and our Team will get back <br />to you within 24 hours.</p>
                                </div>
                                <div className=''>
                                    <div className='frame__1' >
                                        <img src={frame} className='frame-1' />
                                        <p className='number-1'>+91 98765 43210</p>
                                    </div>
                                    <div className='frame__2' >
                                        <img src={frame2} className='frame-3' />
                                        <p className='number-1'>domain@paypal.com</p>
                                    </div>
                                    <div className='frame__2' >
                                        <img src={frame2} className='frame-3' />
                                        <p className='number-1'>https://paypal.com</p>
                                    </div>
                                    <div className='frame__2' >
                                        <img src={frame3} className='frame-4' />
                                        <p className='number-1'>Location</p>
                                    </div>
                                    
                                </div>
                                {/* <div className='frame-2'>
                                    <div class="frame0ne">
                                        <img src={frame2} className='frame-1' />
                                    </div>
                                    <p className='number-1'>domain@paypal.com</p>
                                </div> */}
                                {/* <div className='frame-2'>
                                    <div class="frame0ne">
                                        <img src={frame} className='frame-1' />
                                    </div>
                                    <p className='number-1'>domain@paypal.com</p>
                                </div> */}
                                {/* <div className='frame-2'>
                                    <div class="frame0ne">
                                        <img src={frame3} className='frame-1' />
                                    </div>
                                    <p className='number-1'>+91 98765 43210</p>
                                </div> */}



                            </div>
                            <div className='card-2'>
                                <div style={{ display: 'flex', gap: "15%" }}>
                                    <div className='head-drive-1' style={{ marginTop: "3%", marginInline: "3%" }}>
                                        <label className='driving'>First Name</label> <br />
                                        <input type="text" name="" placeholder=' ' className='driving-2' />
                                    </div>
                                    <div className='head-drive-1' style={{ marginInline: "13%", marginTop: "3%" }}>
                                        <label className='driving'>Last Name</label> <br />
                                        <input type="text" name="" placeholder=' ' className='driving-2' />
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: "15%" }}>
                                    <div className='head-drive-1' style={{ marginTop: "5%", marginInline: "3%" }}>
                                        <label className='driving'>Email</label> <br />
                                        <input type="text" name="" placeholder=' ' className='driving-2' />
                                    </div>
                                    <div className='head-drive-1' style={{ marginTop: "5%", marginInline: "13%" }}>
                                        <label className='driving'>Phone</label> <br />
                                        <input type="text" name="" placeholder=' ' className='driving-2' />
                                    </div>
                                </div>

                                <div className='message-1'>
                                    <div style={{ marginTop: "2%" }}>
                                        <label htmlFor='' className='driving' >Message</label>
                                    </div>

                                    <br />
                                    <textarea name="" id="" cols="80" rows="19" className='text-area'></textarea>
                                </div>
                                <div className='btn-8'>
                                    <button className='btn-7'>Get a Quote</button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div>
          <Index />
        </div>
            </Contact1>
        </>
    );
}

export default Contact;

