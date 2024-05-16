// import React from 'react'
// import { Otp1 } from './Style'
// import cover from '../../images/Cover.svg'
// import logo from '../../images/Group.svg'
// import OtpInput from 'react-otp-input';
// import { useState } from 'react'


// const Otp = () => {
//     const [otp, setOtp] = useState('');
//     return (
//         <Otp1>
//             <div className='log-div'>
//                 <div className='log_div2'>
//                     <img src={cover} className=" cover" />
//                 </div>
//                 <div className='log_div3'>
//                     <div className='logo_1'>
//                         <img src={logo} />
//                     </div>
//                     <div className='heading'>
//                         <p className='acount'>OTP Verification</p>
//                         <div style={{ display: "flex", textAlign: "center" }}>
//                             <p className='paragraph'>Please enter the OTP code we have send to your <br />
//                                 Registered email </p>


//                         </div>
//                     </div>
//                     <div style={{ display: 'flex', justifyContent: 'center' }}>
//                         <OtpInput className="otp2"
//                             value={otp}
//                             onChange={setOtp}
//                             numInputs={6}

//                             renderInput={(props) => <input {...props} className='otp-input' />}
//                         />
//                     </div>


//                 </div>
//             </div>
//         </Otp1>
//     )
// }

import React, { useState, useEffect } from 'react';
import { Otp1 } from './Style';
import cover from '../../images/Cover.svg';
import logo from '../../images/Group.svg';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
    const [otp, setOtp] = useState('');
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [minutes, seconds]);
    const navigate = useNavigate()
    const pasword = (state) => {
        navigate("/pasword", { state })
    }

    return (
        <Otp1>
            <div className='log-div'>
                <div className='log_div2'>
                    <img src={cover} className="cover" alt="Cover" />
                </div>
                <div className='log_div3'>
                    <div className='logo_1'>
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className='heading'>
                        <p className='acount'>OTP Verification</p>
                        <div style={{ display: "flex", textAlign: "center" }}>
                            <p className='paragraph'>Please enter the OTP code we have sent to your <br />
                                Registered email </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <OtpInput
                            className="otp2"
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderInput={(props) => <input {...props} className='otp-input' />}
                        />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <p className='timer'>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
                    </div>
                    <div className='button'>
                        <button className='btn1' onClick={()=>pasword()}>Confirm</button>

                    </div>
                    <div className='resend-1'>
                        <p className='resend' >Resend</p>
                    </div>
                </div>
            </div>
        </Otp1>
    );
};

export default Otp;



