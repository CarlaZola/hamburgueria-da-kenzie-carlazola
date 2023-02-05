import styled from "styled-components";

const StyledInputSearch = styled.div`
    width: 100%;
    height: 80px;
    position: absolute;
    right: 10px;
    display: flex;
    justify-content: end;
    align-items: end;


    form{
        display: flex;
        justify-content: center;
        padding: .5rem;
        background-color: ${({theme}) => theme.colors.colorGrey5};
        border-radius: .25rem;
        width: 60%;
        max-width: 12.5rem;
        gap: .25rem;
        

        input{
            width: 90%;
            border-radius: .25rem;
            border: 1px solid transparent;
           padding-left: .5rem;

            &:focus{
                outline: 1px solid ${({theme}) => theme.colors.colorPrimary200};
            }

            ::placeholder{
                font-size: var(--font2);
            }
        }

        button{
            border: none;
            padding: .25rem;
            border-radius: .25rem;
            background-color: ${({theme}) => theme.colors.colorPrimary200};
        }
    }

    @media(min-width: 600px){
        width: 48%;
       justify-content:center;
       
       form{
        width: 80%;
       }
    }
`

export default StyledInputSearch