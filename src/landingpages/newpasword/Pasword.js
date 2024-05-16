// import React from 'react'
// import { Pasword1 } from './Style'
// import cover from '../../images/Cover.svg'
// import logo from '../../images/Group.svg'
// import { useState } from 'react'
// import { FaEyeSlash } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";
// const Pasword = () => {
//     const [showPassword, setShowPassword] = useState()
//     return (
//         <Pasword1>
//             <div className='log-div'>
//                 <div className='log_div2'>
//                     <img src={cover} className=" cover" />
//                 </div>
//                 <div className='log_div3'>
//                     <div className='logo_1'>
//                         <img src={logo} />
//                     </div>
//                     <div className='heading'>
//                         <p className='acount'>Creat New Password</p>
//                         <p className='paragraph'>Please Enter your Password and Confirm Password</p>
//                     </div>
//                     <div className='head-email'>
//                         <p className='email'>Password</p>
//                         <div className='main-email-1'>
//                             <input type={showPassword ? "text" : "password"} placeholder='Enter Your Password' className='input-2' />

//                             <span onClick={() => setShowPassword(!showPassword)}>
//                                 {showPassword ? <FaEye id='eye' /> : <FaEyeSlash />}
//                             </span>

//                         </div>
//                         <div className='head-email-1'>
//                             <p className='email'>Confim Password</p>
//                             <div className='main-email-1'>
//                                 <input type={showPassword ? "text" : "password"} placeholder='Enter Your Password' className='input-2' />

//                                 <span onClick={() => setShowPassword(!showPassword)}>
//                                     {showPassword ? <FaEye id='eye' /> : <FaEyeSlash />}
//                                 </span>

//                             </div>

//                         </div>

//                     </div>
//                     <div className='button'>
//                         <button className='btn1'>Continue</button>

//                     </div>
//                 </div>
//             </div>
//         </Pasword1>
//     )
// }

// export default Pasword
import React, { useState } from 'react';
import { Pasword1 } from './Style';
import cover from '../../images/Cover.svg';
import logo from '../../images/Group.svg';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import * as Yup from 'yup';

const Password = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validationSchema = Yup.object().shape({
        password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
        confirmPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPassword(value);
        } else {
            setConfirmPassword(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate({ password, confirmPassword }, { abortEarly: false });
            // Validation passed
            console.log('Password:', password);
            console.log('Confirm Password:', confirmPassword);
            setErrors({});
        } catch (validationErrors) {
            // Validation failed
            const errors = {};
            validationErrors.inner.forEach(error => {
                errors[error.path] = error.message;
            });
            setErrors(errors);
        }
    };

    return (
        <Pasword1>
            <div className='log-div'>
                <div className='log_div2'>
                    <img src={cover} className=" cover" alt="Cover" />
                </div>
                <div className='log_div3'>
                    <div className='logo_1'>
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className='heading'>
                        <p className='acount'>Create New Password</p>
                        <p className='paragraph'>Please Enter your Password and Confirm Password</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='head-email'>
                            <p className='email'>Password</p>
                            <div className='main-email-1'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Enter Your Password'
                                    className={`input-2 ${errors.password ? 'input-error' : ''}`}
                                    name='password'
                                    value={password}
                                    onChange={handleChange}
                                />
                                <span onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEye id='eye' /> : <FaEyeSlash />}
                                </span>
                                {errors.password && <div className='error'>{errors.password}</div>}
                            </div>
                        </div>
                        <div className='head-email-1'>
                            <p className='email'>Confirm Password</p>
                            <div className='main-email-1'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Enter Your Password'
                                    className={`input-2 ${errors.confirmPassword ? 'input-error' : ''}`}
                                    name='confirmPassword'
                                    value={confirmPassword}
                                    onChange={handleChange}
                                />
                                <span onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEye id='eye' /> : <FaEyeSlash />}
                                </span>
                                {errors.confirmPassword && <div className='error'>{errors.confirmPassword}</div>}
                            </div>
                        </div>
                        <div className='button'>
                            <button className='btn1' type='submit'>Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </Pasword1>
    );
}

export default Password;

