import React from 'react'
import { LoginDiv } from './style'
import cover from '../../images/Cover.svg'
import logo from '../../images/Group.svg'
import google from '../../images/google-icon.svg'
import fb from '../../images/Vector.svg'
import apple from '../../images/Black.svg'
import { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";
// import { useState } from 'react';
const Login = () => {
    const [showPassword, setShowPassword] = useState()
    
    const signup = useNavigate();
      const signup1 = (state) => {
        signup('/Signup', { state })
      };
      const forget = useNavigate();
      const forget1 = (state)=>{
        forget('/forget',{state})
      };
    return (
        <LoginDiv>
        <div>
            <div className='log-div'>
                <div className='log_div2'>
                    <img src={cover} className="cover " />
                </div>
                <div className='log_div3'>
                    <div className='logo_1'>
                        <img src={logo} />
                    </div>
                    <div className='heading'>
                        <p className='acount'>Sign in to your Account</p>
                        <p className='paragraph'>Welcome back! please enter your detail</p>
                    </div>
                    <div className='head-email'>
                        <p className='email'>Email</p>
                        <input type='email' placeholder='Enter Your Email' className='main-email' />
                    </div>
                    <div className='head-email'>
                        <p className='email'>Password</p>
                        <div className='main-email-1'>
                            <input  type={showPassword ? "text" : "password"} placeholder='Enter Your Password' className='input-2' />
                          
                            <span  onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEye id='eye'  /> : <FaEyeSlash  />}
                            </span>
                           
                        </div>

                    </div>
                    
                    <div className='checkbox' >
                    <div className='flex-box'>
                        <input type='checkbox' className='box' />
                        <span className='remember'>Remember Me</span>
                        </div>
                        <p className='forget' onClick={() => forget1()}>Forgot Password?</p>
                        
                    </div>

                    <div className='button'>
                        <button className='btn1'>sign in</button>

                    </div>
                    <div className='account'>
                        <p className='para1'>Dont have an account?<span style={{ color: "blue", cursor:"pointer" }} onClick={() => signup1()}> Sign Up</span></p>
                    </div>
                    <div className='orange'>
                        <p>OR</p>
                    </div>
                    <div className='google1'>
                        <img src={google}  style={{marginRight:"3%"}}/>
                        <p className='google'>Sign in with Google</p>
                    </div>
                    <div className='google1'>
                        <img src={fb}  style={{marginRight:"3%"}}/>
                        <p className='google'>Sign in with Google</p>
                    </div>
                    <div className='google1'>
                        <img src={apple}  style={{marginRight:"3%"}}/>
                        <p className='google'>Sign in with Google</p>
                    </div>

                </div>
            </div>
            </div>


        </LoginDiv>


    )
}

export default Login;
// import React, { useState } from 'react';
// import * as Yup from 'yup';
// import { LoginDiv } from './style';
// import cover from '../../images/Cover.svg';
// import logo from '../../images/Group.svg';
// import google from '../../images/google-icon.svg';
// import fb from '../../images/Vector.svg';
// import apple from '../../images/Black.svg';
// import { FaEyeSlash, FaEye } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [values, setValues] = useState({
//     email: '',
//     password: '',
//   });

//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Email is required' ),
//     password: Yup.string().required('Password is required'),
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       await validationSchema.validate(values, { abortEarly: false });
//       // Validation passed
//       console.log('Form values:', values);
//     } catch (validationErrors) {
//       // Validation failed
//       const errors = {};
//       validationErrors.inner.forEach(error => {
//         errors[error.path] = error.message;
//       });
//       setErrors(errors);
//     }
//   };
//   const signup = useNavigate();
//   const signup1 = (state) => {
//     signup('/Signup', { state })
//   };

//   return (
//     <LoginDiv>
//       <div className='log-div'>
//         <div className='log_div2'>
//           <img src={cover} className='cover' alt='Cover' />
//         </div>
//         <div className='log_div3'>
//           <div className='logo_1'>
//             <img src={logo} alt='Logo' />
//           </div>
//           <div className='heading'>
//             <p className='acount'>Sign in to your Account</p>
//             <p className='paragraph'>Welcome back! please enter your detail</p>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className='head-email'>
//               <p className='email'>Email</p>
//               <input
              
//                 type='email'
//                 placeholder='Enter Your Email'
//                 className='main-email'
//                 name='email'
//                 value={values.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <div className='error'>{errors.email}</div>}
//             </div>
//             <div className='head-email'>
//               <p className='email'>Password</p>
//               <div className='main-email-1'>
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder='Enter Your Password'
//                   className='input-2'
//                   name='password'
//                   value={values.password}
//                   onChange={handleChange}
//                 />
//                 {errors.password && <div className='error'>{errors.password}</div>}
//                 <span onClick={() => setShowPassword(!showPassword)}>
//                   {showPassword ? <FaEye id='eye' /> : <FaEyeSlash />}
//                 </span>
//               </div>
//             </div>
//             <button type='submit' className='btn1'>
//               Sign in
//             </button>
//           </form>
//           <div className='account'>
//             <p className='para1'>
//               Don't have an account?<span style={{ color: 'blue', cursor:"pointer"}} onClick={() => signup1()}> Sign Up</span>
//             </p>
//           </div>
//           <div className='orange'>
//             <p>OR</p>
//           </div>
//           <div className='google1'>
//             <img src={google} alt='Google' style={{ marginRight: '3%' }} />
//             <p className='google'>Sign in with Google</p>
//           </div>
//           <div className='google1'>
//             <img src={fb} alt='Facebook' style={{ marginRight: '3%' }} />
//             <p className='google'>Sign in with Facebook</p>
//           </div>
//           <div className='google1'>
//             <img src={apple} alt='Apple' style={{ marginRight: '3%' }} />
//             <p className='google'>Sign in with Apple</p>
//           </div>
//         </div>
//       </div>
//     </LoginDiv>
//   );
// };

// export default Login;
