import styled from "styled-components";
export const LoginDiv = styled.div`


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


.input-2{
    border: 0;
    outline: none;
}
.main-email-1{
    border: 1px solid;
    border-radius: 10px;
    padding: 8px, 16px, 8px, 16px;
    width: 72%;
    padding: 15px 12px 11px 13px;
    color: #E2E8F0;
    display: flex;
    justify-content: space-between;

}
.cover{ 
  width: 100%;
    
    object-fit: cover;
}
    

.log_div3{
    width: 50%;
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
.heading{
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-wrap: nowrap; */
    flex-direction: column;

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
.email{
color: #333333;
font-family: Poppins;
font-size: 14px;
font-weight: 600;
line-height: 22px;
letter-spacing: 0.20000000298023224px;
text-align: left;
margin-bottom: 5px;
}
.main-email{
    border: 1px solid;
    border-radius: 10px;
    padding: 8px, 16px, 8px, 16px;
    /* color: red; */
    width: 72%;
    /* height: 27%; */
    padding: 16px 15px 15px 13px;
    /* margin-inline: 1%; */
    /* margin: 1%; */
    color: #E2E8F0;
}
.head-email{
    
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    /* margin-inline: 14%; */
    margin-left: 25%;
    margin-top: 1%;
}
.checkbox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: 25%;
    width: 58%;
    margin-top: 1%;
    
}
@media (max-width:478px) {
    .checkbox{
        width: 62%;
    
    } 
}
@media (max-width: 408px){
.checkbox {
    width: 63%;
    white-space: nowrap;
}}
.forget{
    color: #3563E9;
    font-size: 14px;
    font-family: 'Poppins';
    font-weight: 500;
    cursor: pointer;
}
.flex-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.remember{
    color: #333333;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Poppins';
}
.box{
    height: 43px;
}
.btn1{
    background-color: #3563E9;
    border: 1px solid;
    border-radius: 10px;
    padding: 8px, 16px, 8px, 16px;
    width: 58%;
    padding: 15px 17px 17px 21px;
    color: #FFFF;
    margin-left: 11%;
    margin-top: 4%;
}
    .button{
        display: flex;
    align-items: center;
    justify-content: center;
    /* margin-top: 1%; */
    }
    .account{
        display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
    /* margin-inline: 2%; */
    margin-left: 19%;
    }
    .para1{
        color: black;
        font-size: 16px;
        font-weight: 500;
        font-family: DM Sans;

    }
    .google{
        color: #333333;
    background-color: light gray;
    /* border: 1px solid; */
    /* border-radius: 10px; */
    padding: 8px, 16px, 8px, 16px;
    /* width: 36%; */
    /* padding: 15px 17px 17px 31px; */
    /* color: #FFFF; */
    font-size: 14px;
    font-weight: 500;
    font-family: 'Poppins';
    line-height: 21px;
    }
    .google1{
        display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0px 24px; */
    background-color: lightgray;
    /* padding: 2px 161px; */
    width: 59%;
    margin-left: 26%;
    border-radius: 10px;
    margin-top: 3%;
    }
    .orange{
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0px 24px; */
    /* background-color: lightgray; */
    /* padding: 2px 161px; */
    /* width: 100%; */
    margin-left: 18%;
    /* border-radius: 10px; */
    /* gap: 1%; */
    color: #90A3BF;
    font-size: 14px;
    font-weight: 500;
    font-family: inter;
    margin-top: -1%;
}
    
`