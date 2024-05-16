import styled from "styled-components";
export const Footer = styled.div`
 background-color:#081630;
 padding-bottom: 30px;
 @media (max-width:532px) {
    width: 100%;
    
    }
 .main-footer{
   
    display: flex;
    
    @media (max-width:532px) {
        display: flex;
    width: 100%;
    
    }
    /* width: 100%; */
}



.foter-1{
    color: #FFFFFF;
    font-family: plus Jakarta;
    font-weight: 500;
    line-height: 24px;
    font-size: 15px;
    white-space: nowrap;
}
.Main-f{
    display: flex;
    width: 75%;
    margin: 2%;
    justify-content: space-around;
    margin-left: 12%;
    @media (max-width:802px) {
        display: flex;
    width: 75%;
    margin: 2%;
    justify-content: space-around;
    }
    @media (max-width:532px) {
        display: flex;
    width: 75%;
    flex-direction: column;
    
    justify-content: space-around;
    }
    @media (max-width:400px) {
        margin-left: 18%;
    }
    /* @media (max-width:722px) {
        display: flex;
        justify-content: space-around;
        width: 75%;
    } */
}
.main-fot2{
   
    width: 25%;
    margin: 2%;
    margin-inline: 5%;
     @media (max-width:731px) {
        margin: 2%;
        width: 31%;
    
    } 
    @media (max-width:659px) {
        margin: 2%;
        width: 46%;
    
    } 
} 
.foter-2{
    /* width: 25%; */
    margin-inline: 2%;
}
.about{
    color: #FFFFFF;
    font-family:Plus Jakarta Sans;
    font-weight: 700;
    font-size: 20px;
    line-height: -2%;
}
.main-about{
    color: white;
    font-size: 16px;
    font-weight: 500;
    font-family: Plus Jakarta sans-serif;
    line-height: 15px;
}
.foter-3{
    /* width: 25%; */
    margin-inline: 2%;
}
.foter-4{
    /* width: 25%; */
    margin-inline: 2%;
}
.about-4{
    color: #FFFFFF;
    font-family:Plus Jakarta Sans;
    font-weight: 700;
    font-size: 20px;
    line-height: -2%;
}
.about-social{
    color: #FFFFFF;
    font-family:Plus Jakarta Sans;
    font-weight: 700;
    font-size: 20px;
    line-height: -2%;
}
`