import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;  
    padding: 1rem 1rem;
    background-color: ${({theme}) => theme.colors.colorGrey1};
    margin-bottom: 1.25rem;

    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    nav{
        display: flex;
        align-items: center;
        gap: .875rem;
    }

    .cartTotal{
        position: relative;
        width: .9375rem;
        height:.9375rem;

        span{
            width: .9375rem;
            height:.9375rem;
            position: absolute;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content:center;
            top: -10px;
            right: -5px;
            background-color: ${({theme}) => theme.colors.colorPrimary200};
            border-radius: 50%;
            color: ${({theme}) => theme.colors.colorGrey0};
            font-size: var(--font3);
            font-weight: 700;
        }
    }

    @media(min-width: 600px){
        .container{
            width: 80%;
            margin: 0 auto;
            padding: 0 1rem;
            
        }
    }

    @media(min-width: 1000px){
        .container{
            width: 70%;
            
            
        }
    }

`

export default StyledHeader