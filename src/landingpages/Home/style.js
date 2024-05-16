import styled from "styled-components";
import Background from '../../images/subscribe.svg'

export const Homediv = styled.div`

.big-iamge{
    width: 80%;
    margin-right: 2%;
    margin-top: 3%;
}

@media (max-width: 540px) {
    .big-iamge{
        margin-left: 3%;
    }
    
}
.div-one{
    position: absolute;
    right: 12%;
    top: 55%;
    text-align: start;
}
@media (max-width:1182px) {
    .div-one{
        position: absolute;
    right: 17%;
    top: 53%;
    text-align: start;
    }
    
}
@media (max-width:768px) {
    .div-one{
        right: 14%;
    top: 51%;
    }
    
}
@media (max-width:662px) {
    
    .div-one{
        right: 16%;
    top: 55%;
    }
}
@media (max-width:540px) {
    .div-one{
        .div-one {
    right: 9%;
    top: 55%;
}
    }
    
}
@media (max-width:470px) {
        .div-one {
    right: 5%;
    top: 55%;
}
    
    
}
.main-head{
    color: #000000;
    font-family: poppins;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    font-weight: 700;
    /* margin-left: 44%; */
    margin-top: -3%;
     /* width: 99%; */
}
@media (max-width:1182px) {
    .main-head{
        font-size: 18px;
    line-height: 24px;
    }
    
}
@media (max-width: 662px) {

.main-head {
font-size: 14px;
line-height: 16px;
}
}
@media (max-width: 470px) {

.main-head {
    font-size: 11px;
    line-height: 13px;
}
}
.para-head{
    font-weight: 400;
    font-size: 26px;
    line-height: 30.47px;
    color: #000000;
    /* margin-left: 39%; */
    margin-top: -12%;
    font-family: roboto;
}
@media (max-width:1182px) {
    .para-head{
        font-size: 15px;
    line-height: 17.47px;
    }
    
}
@media (max-width: 662px) {

    .para-head {
    font-size: 9px;
    line-height: 11.47px;
}
}
@media (max-width: 470px) {

.para-head {
    font-size: 8px;
    line-height: 8.47px;
    margin-top: -6%;
}
}
.btn1{
    background-color: #3563E9;
    color: #FFFFFF;
    font-weight: 400;
    font-family: roboto;
    font-size: 20px;
    border-radius: 18px;
    padding: 11px 40px;
    /* margin-left: 25%; */
    margin-top: -10px;
    border: #3563E9;
    cursor: pointer;
}
@media (max-width:1182px) {
    .btn1{
        font-size: 10px;
 
    }
    
}
@media (max-width: 662px) {

.btn1 {
    font-size: 8px;
}
}
@media (max-width: 470px) {

.btn1 {
    font-size: 7px;
}
}

  /* Adjust styles for elements inside Homediv */
  /* .big-iamge {
    width: 100%;
    height: auto;
  }
  .main-head {
    font-size: 24px;
  }
  .para-head {
    font-size: 16px;
  }
  .btn1 {
    font-size: 14px;
  } */


`
export const Home2= styled.div`
/* @media (max-width:850px) {
    .image-4 {
    width: 100%;
    height: auto;
  }
} */
.h1{
    background-color: #F6F7F9;
}
.container{
    background-color: #F6F7F9;
    margin-top: 2%;
    @media (max-width: 530px) {
        margin-top: 5%;
    }
    
}
.group-3{
    display: flex;
    align-items: center;
}
@media (max-width: 684px) {
    .group-3{
        display: flex;
    align-items: center;
    flex-direction: column;
    }
    
}
.image-4{
    width: 47%;
}
@media (max-width: 684px) {
    .image-4{
        width: 41%;
    }
    
}
.main__heading{
    font-size: 56px;
    font-family: poppins;
    line-height: 84px;
    font-weight: 600;
    margin: 0;
}
@media (max-width: 994px) {
    .main__heading{
        font-size: 38px;
    }
    
}
@media (max-width: 462px) {
    .main__heading{
        font-size: 30px;
    }
    
}

.paragraph{
    font-family: poppins;
    font-weight: 400;
    font-size: 16px;
    color: #90A3BF;
    margin: 0;
}
@media (max-width: 994px) {
    .paragraph{
        font-size: 14px;
        line-height: 18px;
    }
    
}
@media (max-width: 462px) {
    .paragraph{
        font-size: 14px;
        line-height: 14px;
        margin-right: 19px;
    }
    
}
.main__div{
    text-align: start;
    margin-inline: 11%;
}
@media (max-width: 684px) {
    .main__div{
        margin-top: -3%;
    margin-left: 21%;
    }
    
}

`
export const Home3 = styled.div`
/* @media (max-width:850px) {
    .main-card {
    width: 100%;
  }
} */
.card-1{
    background-color: #F6F7F9;
    padding: 10px 68px;
}
.main-card{
    border: 1px solid white;
    width: 22%;
    height: auto;
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1284px) {
        width: 31%;
    }
    @media (max-width: 1024px) {
        width: 30%;
    }
    @media (max-width: 980px) {
        width: 47%;
    }
    @media (max-width: 980px) {
        width: 64%;
    }
    @media (max-width: 534px) {
        width: 83%;
    }
    @media (max-width: 446px) {
        width: 100%;
    }
    @media (max-width: 396px) {
        width: 110%;
    }
}


.map-item{
    display: flex;
    gap: 36px;
    flex-wrap: wrap;
    @media (max-width: 1284px) {
        align-items: center;
    justify-content: center;

    }
}

.card__4{
    display: flex;
    justify-content: space-between;
    @media (max-width: 808px) {
        justify-content: space-around;
    }

}
.card--9{
     display: flex; 
    justify-content: space-between;
    /* width: 92%; */
    padding: 0px 18px;
}
.swift{
    color: #1A202C;
    font-family: sans-serif;
    font-weight: 700;
    size: 18px;
    line-height: 30px;
}
.sport{
    align-items: start;
}
.gasoline{
    display: flex;
    align-items: center;
    gap: 6px;
}
.card--10{
    display: flex;
    justify-content: space-between;
    /* align-items: unset; */
    margin-inline: 6px;
    /* gap: 6px; */
    /* width: 53%; */
    padding: 13px 0px;
}
.color{
    color:#90A3BF;
}
.day-1{
    color: #90A3BF;
    font-size: 12px;
}
.price-2{
    color: #1A202C;
    font-size: 20px;
    font-weight: 700;
}
.pkr{
    color: #1A202C;
    font-weight: 700;
    font-size: 12px;
}
.pakistani{
    text-align: start;
    margin-inline: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btn2{
    background-color: #3563E9;
    padding: 12px 27px;
    border-radius: 6px;
    color: white;
    border: #3563E9;
}
`
export const Home4 = styled.div`
/* @media (max-width: 850px) {
    .experience-div {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
    
} */

.exp-div{
    @media (max-width:1024px) {
        flex-wrap: wrap;
    }
}

.experience-div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    text-align: center;
}
.home5{
    width: 100%;
}
.div-1{
    background-color: #F6F7F9;
    padding: 10px 68px;
}
.card-12{
    border: 1px solid white;
    width: 99%;
    height: auto;
    background-color: white;
    border-radius: 2px;
    margin-top: 8%;
    
}
.Heading__7{
    color: #000000;
    font-family: poppins;
    font-size: 45px;
    font-weight: 600;
    text-align: center;
    @media (max-width: 1152px) {
        font-size: 35px;
    }
    @media (max-width: 1024px) {
        font-size: 29px;
    }
    @media (max-width: 468px) {
        font-size: 21px;
    }
    @media (max-width: 468px) {
        font-size: 17px;
    }
}
.book{
    color: #3563E9;
    font-family: poppins;
    font-weight: 600;
    font-size: 30px;
    white-space: nowrap;
    @media (max-width: 1152px) {
        font-size: 26px;
    }
    @media (max-width: 468px) {
        font-size: 22px;
    }
    @media (max-width: 412px) {
        font-size: 14px;
    }
}
.main-para{
        color: #00000099;
        font-family: Roboto;
        font-size: 20px;
        margin-top: -8%;
    font-weight: 400;
    @media (max-width: 1024px) {
        margin-top: -4%;
    }
}
.image__9{
    width: 41%;
}

`
export const Home5 = styled.div`

/* @media (max-width: 850px) {
    .driver-para {
    text-align: center;
  }
    
} */
width: 100%;
.subscrib-backgrond{
    width: 100%;
   height: 72vh;
   background-image:url(${Background});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   margin-top: 6%;
  

};


.driver-para{
    color: #FFFFFF;
    font-weight: poppins;
    font-size: 40px;
    font-weight: 600;
    text-align: start;
    margin-inline: 3%;
    font-family: 'Poppins';
    line-height: 46px;
    display: flex;
    align-items: center;
    padding-top: 0%;
    @media (max-width: 856px) {
        font-size: 26px;
        line-height: 39px;
    }
    @media (max-width: 554px) {
        font-size: 20px;
        line-height: 31px;
    }
    

    

} 
.main_div1{
    background-color: #F6F7F9;
    padding: 10px 68px;
    padding-bottom: 9%;
    @media (max-width: 554px) {
        background-color: #F6F7F9;
    /* padding: 10px 68px; */
    padding-bottom: 9%;
    /* width: 100%; */

    }
}
.paragrah-3{
    color:#FFFFFF;
    font-size: 30px;
    font-weight: 400;
    font-family:Roboto;
    line-height: 35px;
    @media (max-width: 856px) {
        font-size: 23px;
        line-height: 35px;
    }
    @media (max-width: 554px) {
        font-size: 21px;
    line-height: 29px;
    }
}
.email-2{
    background-color: white;
    width: 73%;
    display: flex;
    justify-content: space-between;
    border-radius: 17px;
    padding: 2px;
    @media (max-width: 856px) {
        width: 87%;
        padding: 1px;
    }

}
.email_1{

    width: 70%;
    border: 0px;
    outline: none;
    padding-left: 2%;
    border-radius: 17px;
    font-size: 30px;
    font-weight: 500;
    color: #00000059;
}
    /* height: 67px;
    
    width: 74%;
    border-radius: 17px;
    margin-top: -20px;
    
    font-family: 'Poppins';
    font-size: 21px;
    font-weight: 500; */
    

.join{
    margin-inline: 3%;
    padding-top: 0%;
    
}
.upload-button{
    background-color: #21408E;
    padding: 30px 43px;
    border-radius: 17px 17px 17px 17px;
    border: 1px solid #F0F1F7;
    color: white;
    padding-block: 7px 12px;
    border-left: 0px;
    margin-inline: 0%;
    font-size: 30px;
    font-family: 'Poppins';
    font-weight: 500;
    @media (max-width: 554px) {
        padding-block: 0px 3px;
    }
}
.goals{
    display: flex;
    align-items: center;
}
`
