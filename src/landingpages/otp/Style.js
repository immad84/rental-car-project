import styled from "styled-components";
export const Otp1 = styled.div`
.log-div{
    display: flex;
}
.log_div2{
    width: 50%;
    height: 100vh;
    
}
@media (max-width:950px) {
    .log_div2{
        display: none;
    }
    
}
.cover{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}

.log_div3{
    width: 50%;
    margin-top: 5%;
}
@media (max-width:950px) {
    .log_div3{
        width: 80%;
    margin: auto;
    } 
}
@media (max-width:600px) {
    .log_div3{
        width: 90%;
    margin: auto;
    } 
}
@media (max-width:478px) {
    .log_div3{
        width: 100%;
    margin: auto;
    } 
}
.logo_1{
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-bottom: 4%; */
    /* margin: 2%; */
    margin-top: 7%;
}
.acount{
    color: #333333;
    font-size: 24px;
    font-weight: 700;
    font-family: poppins;
    line-height: 30px;
}
.paragraph{
    color: #64748B;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Poppins';
    margin-top: -2%;

}
.heading{
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-wrap: nowrap; */
    flex-direction: column;

}

    .otp-input {
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    width: 47px !important;
    margin-top: 6%;
    margin-right: 3%;
    text-align: center;
    height: 48px;
    border-radius: 5px;
}
@media (max-width:550px) {
    .otp-input{
        width: 32px !important;
    }
    
}
.timer{
    font-size: 24px;
    font-weight: 700;
    font-family: Plus jakarta sans-serif;
    margin-left: 7%;
}
.btn1{
    background-color: #3563E9;
    border: 1px solid;
    border-radius: 10px;
    padding: 8px, 16px, 8px, 16px;
    width: 60%;
    padding: 15px 17px 17px 45px;
    color: #FFFF;
    /* margin-inline: 1%; */
    margin-left: 10%;
    margin-top: 2%;
    cursor: pointer;
}
    .button{
        display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
    }
    .resend{
        margin-left: 16%;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Plus Jakarta Sans';
    color: #333333;
   
    }
    .resend-1{
        display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    }


`