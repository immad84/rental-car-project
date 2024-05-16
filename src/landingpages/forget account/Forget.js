// import React from 'react'
// import { FORGET } from './Style'
// import cover from '../../images/Cover.svg'
// import logo from '../../images/Group.svg'

// const Forget = () => {
//   return (
//    <FORGET>


// <div className='log-div'>
//                 <div className='log_div2'>
//                     <img src={cover} className=" cover" />
//                 </div>
//                 <div className='log_div3'>
//                     <div className='logo_1'>
//                         <img src={logo} />
//                     </div>
//                     <div className='heading'>
//                         <p className='acount'>Forget your Account?</p>
//                         <p className='paragraph'>Please enter your registered email</p>
//                     </div>
//                     <div className='head-email'>
//                         <p className='email'>Email</p>
//                         <input type='email' placeholder='Enter Your Email' className='main-email' />
//                     </div>
//                     <div className='button'>
//                         <button className='btn1'>Continue</button>

//                     </div>
//                     </div>
//                     </div>

//    </FORGET>
//   )
// }

// export default Forget
// import React from 'react';
// import { FORGET } from './Style';
// import * as Yup from 'yup';
// import cover from '../../images/Cover.svg';
// import logo from '../../images/Group.svg';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Forget = () => {
//     const [errors, setErrors] = useState({});
//     const [email, setEmail] = useState('');

//     const validationSchema = Yup.object().shape({
//         email: Yup.string().email('Invalid email').required('Email is required'),
//     });

//     const handleChange = e => {
//         setEmail(e.target.value);
//     };

//     const handleSubmit = async e => {
//         e.preventDefault();
//         try {
//             await validationSchema.validate({ email }, { abortEarly: false });
//             // Validation passed
//             console.log('Email:', email);
//             setErrors({});
//         } catch (validationErrors) {
//             // Validation failed
//             const errors = {};
//             validationErrors.inner.forEach(error => {
//                 errors[error.path] = error.message;
//             });
//             setErrors(errors);
//         }
//     };
//     const otp = useNavigate();
//     const otp1 = (state)=>{
//       otp('/otp',{state})
//     };

//     return (
//         <FORGET>
//             <div className='log-div'>
//                 <div className='log_div2'>
//                     <img src={cover} className=' cover' alt='Cover' />
//                 </div>
//                 <div className='log_div3'>
//                     <div className='logo_1'>
//                         <img src={logo} alt='Logo' />
//                     </div>
//                     <div className='heading'>
//                         <p className='acount'>Forget your Account?</p>
//                         <p className='paragraph'>Please enter your registered email</p>
//                     </div>
//                     <form onSubmit={handleSubmit}>
//                         <div className='head-email'>
//                             <p className='email'>Email</p>
//                             <input
//                                 type='email'
//                                 placeholder='Enter Your Email'
//                                 className={`main-email ${errors.email ? 'input-error' : ''}`}
//                                 value={email}
//                                 onChange={handleChange}
//                             />
//                             {errors.email && <div className='error'>{errors.email}</div>}
//                         </div>
//                         <div className='button'>
//                             <button type='submit' className='btn1' onClick={()=>otp1()} >
//                                 Continue
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </FORGET>
//     );
// };

// export default Forget;
import React, { useState } from 'react';
import { FORGET } from './Style';
import * as Yup from 'yup';
import cover from '../../images/Cover.svg';
import logo from '../../images/Group.svg';
import { useNavigate } from 'react-router-dom';

const Forget = () => {
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    const handleChange = e => {
        setEmail(e.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await validationSchema.validate({ email }, { abortEarly: false });
            // Validation passed
            console.log('Email:', email);
            setErrors({});
            navigateToOTP();
        } catch (validationErrors) {
            // Validation failed
            const errors = {};
            validationErrors.inner.forEach(error => {
                errors[error.path] = error.message;
            });
            setErrors(errors);
        }
    };

    const navigateToOTP = () => {
        navigate('/otp');
    };

    return (
        <FORGET>
            <div className='log-div'>
                <div className='log_div2'>
                    <img src={cover} className=' cover' alt='Cover' />
                </div>
                <div className='log_div3'>
                    <div className='logo_1'>
                        <img src={logo} alt='Logo' />
                    </div>
                    <div className='heading'>
                        <p className='acount'>Forget your Account?</p>
                        <p className='paragraph'>Please enter your registered email</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='head-email'>
                            <p className='email'>Email</p>
                            <input
                                type='email'
                                placeholder='Enter Your Email'
                                className={`main-email ${errors.email ? 'input-error' : ''}`}
                                value={email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className='error'>{errors.email}</div>}
                        </div>
                        <div className='button'>
                            <button type='submit' className='btn1'>
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </FORGET>
    );
};

export default Forget;


