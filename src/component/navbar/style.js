import Styled, { styled } from 'styled-components'
export const NavDiv = styled.div`
.container{
  
    padding: 10px 25px;
}
.logo{
    margin-left:3%
}
.sig-in{
    display: flex;
    align-items: center;
    margin-right: 8%;
}
.main-div{
    justify-content: space-between;
}
.home-1{
    margin-left: 20%;
}
/* Add this CSS to your style file */
.container {
  display: none;
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 950px) {
  .container {
    display: block;
  }

  .nav-list {
    display: flex;
  }
}

.navbar-style {
    color: #000000;
    font-family: poppins;
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
}
.nav-link {
    display: block;
    padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
    font-size: var(--bs-nav-link-font-size);
    font-weight: var(--bs-nav-link-font-weight);
    color: var(--bs-nav-link-color);
    text-decoration: none;
    background: 0 0;
    border: 0;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out;
}

.navbar-style.active {
    border-bottom: 4px solid blue;
}

.awais{
    color: #222222;
    font-size: 15px;
    font-weight: 600;
    font-family: 'Poppins';
}
.edit{
    margin-left: 0%;
    font-size: 8px;
    font-weight: 400;
    font-family: poppins;
    color: black;
    margin-top: -14%;
}
.awais-1{
    margin-inline: 8%;
    margin-top: -5%;
}
.taimor{
    height: 60px;
}
.main-model{
    display: flex;
    align-items: center;
    /* justify-content: space-evenly; */
    padding: 1px 5px;
}
.profile-1{
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: -8%;

    


}
/* .profile-3{
    display: flex;
    align-items: center;
    justify-content: start;
    
} */
.prof{
    color: #222222;
    font-size: 18px;
    font-weight: 400;
    font-family: 'Poppins';
    margin-inline: 7%;
    cursor: pointer;
}
.img-prof{
    height: 23px;
}
/* @media (min-width: 950px) {
  .burger-button {
    display: none;
  }
  .nav-links {
    display: flex;
  }
} */
/* CSS for the burger button and responsive navbar */
.burger-menu {
  display: none; /* Hide burger menu by default */
  cursor: pointer;
}

.burger-line {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 5px;
}

@media (max-width: 1000px) {
  .nav-list {
    display: none; /* Hide navbar by default */
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 9px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-list.show {
    display: flex; /* Show navbar when showNavbar state is true */
  }

  .burger-menu {
    display: block; /* Show burger menu for smaller screens */
  }
}

`
export const ModalContent = styled.div`
/* .taimoor{
    color: #222222;
    font-family: poppins;
    font-size: 13px;
    font-weight: 600;
    line-height: 18px;
    
}
.taimoor2{
    color: #222222;
    font-size: 8px;
    font-family: poppins;
    font-weight: 400;
    margin-left: 27px;
    margin-top: -11px
}
.main-t{
    display: flex;
}
.model-1{
    display: flex;
    flex-direction: column;
}
.modal-content{
    margin-left: 2%;

} */

`