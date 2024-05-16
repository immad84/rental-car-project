import React from 'react'
import { Profile1, Input } from './style'
import Navbar from '../../component/navbar/Index'
import image from '../../images/Ellipse 82.svg'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import Index from '../footer/Index'

const Profile = () => {
  const [value, setValue] = useState()
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Profile1 className='main-profile'>
        <div className='main-profile-1'>
          <div className='main-profile-2'>

            <div className='image-1'>
              <img src={image} style={{ width: "8%", marginTop: "3%" }} />
              <button className='btn2'>  Upload Picture</button>
            </div>
            <div className='btn3-main'>
              <button className='btn3'>Saved Profile</button>


            </div>
            <div style={{ display: "flex", justifyContent: "stretch", marginTop: "2%", marginInline: "3%" }}>
              <div style={{ marginLeft: "2%" }}>
                <h3 className='First-name'>FULL NAME</h3>
                <Input type="text" name="" placeholder='  jhon' />
                <h3 className='First-name'>Post Code</h3>
                <Input type="text" name="" placeholder='  CB4600' />
              </div>
              <div className='date-1'>
                <h3 className='First-name'> Email</h3>
                <Input type="email" name="" placeholder='  Jhon@gmail.com ' />
                <br />
                <h3 className='First-name'> Address</h3>
                <Input type="email" name="" placeholder='  New York ' />
              </div>
              <div className='date-1'>
                <h3 className='First-name'> Phone</h3>
                <PhoneInput name="" placeholder=' Enter Your Phone no  ' onChange={setValue} className='main-email' />
                <br />
                <h3 className='First-name-1'> Gender</h3>
                <div style={{ display: "flex", gap: "5%" }}>
                  <div className='male'>
                    <label style={{ color: "#4B506D" }}>  Male  </label>
                    <br />
                    <input type='radio' />
                  </div>
                  <div className='male'>
                    <label style={{ color: "#4B506D" }}>  Female  </label>
                    <input type='radio' />
                  </div>
                </div>


              </div>
            </div>

          </div>
          <div className='main-card2' style={{ display: "flex", marginTop: "3%", marginBottom: "3%" }}>
            <div className='head-drive-1'>
              <h3 className='driving'>Driving Licence</h3>
              <input type="text" name="" placeholder=' ' className='driving-2' />
            </div>


            <div className='head-drive'>
              <h3 className='driving'>Car Licence Back Image</h3>
              <input type="file" name="" placeholder=' Upload your licence back image Supported Formats: JPG, PNG,; Max File Size:5MB.  ' className='driving-3' />

              <div>
                <button className='btn5'>Upload Picture</button>
              </div>
            </div>
            <div className='head-drive'>
              <h3 className='driving'>Car Licence Back Image</h3>
              <input type="file" name="" placeholder=' Upload your licence back image, Supported Formats: JPG, PNG,; Max File Size:5MB.  ' className='driving-4' />
              <div>
                <button className='btn6'>Upload Picture</button>
              </div>
            </div>

          </div>

        </div>








        <div>
          <Index />
        </div>



      </Profile1>
    </>
  )
}

export default Profile;
