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
        min-height: 50%;
        max-height: 28.125rem;
        background-color: ${({theme}) => theme.colors.colorGrey10};
        border-radius: 0.25rem 0.25rem 0 0;
    }

    .modalHeader{
        display: flex;
        justify-content: space-between;
        padding: 13px 22px;
        background-color: var(--color-primary);
        color: var(--color-grey-0);
        font-weight: 700;
        border-radius: 0.25rem 0.25rem 0 0;
        height: 3rem;
    }

    .modalBody{
        height: 20.25rem;
        min-height: 9.875rem;
    }

    ul{
        height: 240px;
        width: 95%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        overflow-y: scroll;
        max-height: 60%;
        
    }

    ul::-webkit-scrollbar {
        margin-top:1rem;
        width: 0.625rem;
        height: 0.25rem;
    }

        /* Track */
        ul::-webkit-scrollbar-track {
            background: var(--color-grey-20);
            border-radius: .25rem;
        }

        /* Handle */
        ul::-webkit-scrollbar-thumb {
            background: var(--color-primary-50);
            border-radius: .25rem;
        }

        /* Handle on hover */
        ul::-webkit-scrollbar-thumb:hover {
            background: var(--color-primary);
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