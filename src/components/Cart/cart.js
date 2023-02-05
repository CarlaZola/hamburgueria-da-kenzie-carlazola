import styled from "styled-components";

const StyledCart = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);

   
    .modal{
        width: 95%;
        height: 80%;
        background-color: ${({theme}) => theme.colors.colorGrey10};
    }

    @media(min-width: 700px) {
          
        .modal{
        width: 50%;
        height: 70%;
        top: -1.5625rem;
       
        }  
    }

    @media(min-width: 900px){
        left: unset;
        right: 0;
        

        .modal{
        width: 40%;
        height: 80%;
       
        } 
    }
   

`

export default StyledCart