// import React from 'react'
// import { SIGN } from './Style'
// import cover from '../../images/Cover.svg'
// import logo from '../../images/Group.svg'
// import google from '../../images/google-icon.svg'
// import fb from '../../images/Vector.svg'
// import apple from '../../images/Black.svg'
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
// import { useState } from 'react'
// import { FaEyeSlash } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";
// const Signup = () => {
//     const [value, setValue] = useState()
//     const [showPassword, setShowPassword] = useState()
//     return (
//         <SIGN>
//             <div className='log-div'>
//                 <div className='log_div2'>
//                     <img src={cover} className=" cover" />
//                 </div>
//                 <div className='log_div3'>
//                     <div className='logo_1'>
//                         <img src={logo} />
//                     </div>
//                     <div className='heading'>
//                         <p className='acount'>Sign Up to your Account</p>
//                         <p className='paragraph'>Welcome! please enter your detail</p>
//                     </div>
//                     <div className='head-email'>
//                         <p className='email'>Name</p>
//                         <input type='email' placeholder='Enter Your Full name' className='main-email' />
//                     </div>
//                     <div className='head-email'>
//                         <p className='email'>Phone</p>
//                         <PhoneInput placeholder='Enter Your Phone no' value={value}
//                             onChange={setValue} className='main-email' />
//                     </div>
//                     <div className='head-email'>
//                         <p className='email'>Email</p>
//                         <input type='email' placeholder='Enter Your Email' className='main-email' />
//                     </div>
//                     <div className='head-email'>
//                         <p className='email'>Password</p>
//                         <div className='main-email-1'>
//                             <input  type={showPassword ? "text" : "password"} placeholder='Enter Your Password' className='input-2' />

//                             <span  onClick={() => setShowPassword(!showPassword)}>
//                                 {showPassword ? <FaEye id='eye'  /> : <FaEyeSlash  />}
//                             </span>

//                         </div>

//                     </div>
//                     <div>

//                     </div>

//                     <div className='button'>
//                         <button className='btn1'>Sign Up</button>

//                     </div>
//                     <div className='account'>
//                         <p className='para1'>Already have an account?<span style={{ color: "blue" }}> Sign Up</span></p>
//                     </div>
//                     <div className='orange'>
//                         <p>OR</p>
//                     </div>
//                     <div className='google1'>
//                         <img src={google} style={{ marginRight: "3%" }} />
//                         <p className='google'>Sign in with Google</p>
//                     </div>
//                     <div className='google1'>
//                         <img src={fb} style={{ marginRight: "3%" }} />
//                         <p className='google'>Sign in with Google</p>
//                     </div>
//                     <div className='google1'>
//                         <img src={apple} style={{ marginRight: "3%" }} />
//                         <p className='google'>Sign in with Google</p>
//                     </div>

//                 </div>
//             </div>

//         </SIGN>
//     )
// }

// export default Signup;
import React, { useState } from 'react';
import { SIGN } from './Style';
import * as Yup from 'yup'; // Import Yup
import cover from '../../images/Cover.svg';
import logo from '../../images/Group.svg';
import google from '../../images/google-icon.svg';
import fb from '../../images/Vector.svg';
import apple from '../../images/Black.svg';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form data
      await validationSchema.validate(
        {
          name,
          phone,
          email,
          password,
        },
        { abortEarly: false }
      ); // abortEarly: false will ensure all validations are run and not stop at the first error

      // If validation passes, you can proceed with form submission or further processing
      console.log('Form submitted successfully');
    } catch (error) {
      // If validation fails, set errors state with error messages
      if (error instanceof Yup.ValidationError) {
        const newErrors = {};
        error.inner.forEach((validationError) => {
          newErrors[validationError.path] = validationError.message;
        });
        setErrors(newErrors);
      }
    }
  };
  const login = useNavigate();
  const login1 = (state) => {
    login('/login', { state });
  };

  return (
    <SIGN>
      <div className="log-div">
        <div className="log_div2">
          <img src={cover} className=" cover" alt="cover" />
        </div>
        <div className="log_div3">
          <div className="logo_1">
            <img src={logo} alt="logo" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="heading">
              <p className="acount">Sign Up to your Account</p>
              <p className="paragraph">Welcome! please enter your detail</p>
            </div>
            <div className="head-email">
              <p className="email">Name</p>
              <input
                type="text"
                placeholder="Enter Your Full name"
                className="main-email"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="head-email">
              <p className="email">Phone</p>
              <PhoneInput
                placeholder="Enter Your Phone no"
                value={phone}
                onChange={setPhone}
                className="main-email"
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="head-email">
              <p className="email">Email</p>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="main-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="head-email">
              <p className="email">Password</p>
              <div className="main-email-1">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Your Password"
                  className="input-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <div className="button">
              <button type="submit" className="btn1">
                Sign Up
              </button>
            </div>
          </form>
          <div className="account">
            <p className="para1">
              Already have an account?
              <span
                style={{ color: 'blue', cursor: 'pointer' }}
                onClick={() => login1()}
              >
                {' '}
                Sign in
              </span>
            </p>
          </div>
          <div className="orange">
            <p>OR</p>
          </div>
          <div className="google1">
            <img src={google} style={{ marginRight: '3%' }} alt="google" />
            <p className="google">Sign in with Google</p>
          </div>
          <div className="google1">
            <img src={fb} style={{ marginRight: '3%' }} alt="fb" />
            <p className="google">Sign in with Facebook</p>
          </div>
          <div className="google1">
            <img src={apple} style={{ marginRight: '3%' }} alt="apple" />
            <p className="google">Sign in with Apple</p>
          </div>
        </div>
      </div>
    </SIGN>
  );
};

export default Signup;
