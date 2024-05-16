import React from 'react'
import { Footer } from './Style'
import logo1 from '../../../src/images/groupp.svg'


const Index = () => {
    return (
        <Footer>
            <div className='main-footer'>
                <div className='main-fot2'>
                    <img src={logo1} />
                    {<p className='foter-1'>   Lorem   ipsum dolor   sit   amet <br />consectetur. Sit mi dolor nullam<br /> faucibus molestie. Quis mauris at eget <br />risus mattis ornare. Nec lorem in et<br /> sapien tristique neque vivamus. Egestas<br /> tempus facilisis in habitant vitae.</p>}
                </div>
                <div className='Main-f'>
                    <div className='foter-2'>
                        <p className='about'>About</p>
                        <div className='main-about'>
                            <p>How it Works</p>
                            <p>Terms and Conditions</p>
                            <p>Privacy and Policy</p>
                            <p>About Us</p>
                        </div>
                    </div>
                    <div className='foter-3'>
                        <p className='about-4'>Important Links</p>
                        <div className='main-about'>
                            <p>Vehicle Listing </p>
                            <p>Contact Us</p>
                        </div>
                    </div>

                    <div className='foter-4'>
                        <p className='about-social'>Socials</p>
                        <div className='main-about'>
                            <p>Instagram</p>
                            <p>Twitter</p>
                            <p>Facebook</p>

                        </div>
                    </div>

                </div>


            </div>
            <div>
                <hr style={{ color: "white", width: "91%" }} />
                {/* <p style={{borderTop:"4px solid white", }}>fuckers</p> */}
            </div>
            <div>
                <p style={{color:"white",marginInline:"4%"}}>@CharterCar.Allrights reserved</p>
            </div>
        </Footer>
    )
}

export default Index;