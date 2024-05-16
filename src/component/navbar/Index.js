
import React, { useState } from 'react';
import { NavDiv } from './style';
import logo from '../../images/Group.svg';
import circle from '../../images/account_circle.svg';
import { Link, useNavigate } from 'react-router-dom';
import taimoor from '../../images/taimoor.svg';
import profile from '../../images/CProfile.svg';
import cdil from '../../images/Cdil.svg';
import history from '../../images/Chistory.svg';
import exit from '../../images/Exit.svg';
import Log from '../../landingpages/log-out/Index';

const Navbar = () => {

  // This is a Navnar Component.
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const data = () => {
    navigate('/', { state: {} });
  };

  const item = () => {
    navigate('/Vehicle', { state: {} });
  };

  const contact = () => {
    navigate('/Contact', { state: {} });
  };
  const profile1 = useNavigate();
  const Awais = (state) => {
    profile1('/profile', { state })
  };
  const fvrt1 = useNavigate();
  const malik = (state) => {
    fvrt1('/favourite', { state })
  };
  const his1 = useNavigate();
  const historyy = (state) => {
    his1('/history', { state })
  };

  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };


  return (
    <NavDiv>
      <div className='container'>

        <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }} >
        <div style={{width:"30%"}}> <img src={logo} className='logo' alt='Logo' /></div>
          <li className={activeItem === 'home' ? 'navbar-style active ' : 'navbar-style nav-link'} onMouseEnter={() => handleItemClick('home')} onClick={() => data()} >Home</li>
          <li className={activeItem === 'vehicle' ? 'navbar-style active' : 'navbar-style'} style={{ marginInline: "20px" }} onMouseEnter={() => handleItemClick('vehicle')} onClick={() => item()} >Vehicle Listing</li>
          <li className={activeItem === 'contact' ? 'navbar-style active' : 'navbar-style'} onMouseEnter={() => handleItemClick('contact')} onClick={() => contact()} >Contact Us</li>
          <li className='sig-in navbar-style' style={{ position: 'relative' }}>
            <span style={{ marginRight: '10px' }}>{loggedIn ? "Sign Out" : "Sign In"}</span>
            <img src={circle} alt='Profile' onClick={() => setShowModal(!showModal)} />
            {showModal && (
              <div style={{
                position: 'absolute',
                bottom: '-292px',
                right: '-88px',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '9px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                width: "205px",
                height: "auto",
                zIndex: "999999",
              }}>
                <div className='main-model'>
                  <div>
                    <img src={taimoor} className='taimor' />
                  </div>
                  <div className='awais-1'>
                    <p className='awais'>Awais</p>
                    <p className='edit'>View and Edit you Profile</p>
                  </div>
                </div>


                <hr />
                <div>
                  <div className='profile-1'>
                    <img src={profile} className='img-prof' />
                    <p onClick={() => Awais()} className='prof'>Profile</p>
                  </div>
                  <div className='profile-1'>
                    <img src={cdil} className='img-prof' />
                    <p onClick={() => malik()} className='prof'>Favourite</p>
                  </div>
                  <div className='profile-1'>
                    <img src={history} className='img-prof' />
                    <p onClick={() => historyy()} className='prof'>History</p>
                  </div>
                  <div className='profile-1'>
                    <img src={exit} className='img-prof' />
                    <p className='prof'><Log /></p>

                    <div>

                    </div>
                  </div>
                </div>

              </div>
            )}
          </li>

        </ul>


      </div>
    </NavDiv>
  );
};

export default Navbar;






