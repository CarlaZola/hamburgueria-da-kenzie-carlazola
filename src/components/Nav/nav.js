import styled from "styled-components";

const StyledNav = styled.nav`
    width: 90%;
    display: flex;
    justify-content: flex-start;
    max-width: 56.25rem;
    margin: 0 auto;

    ul{       
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .685rem;
        height: 5rem;       
    }

    li{
        display: flex;
        flex-direction: column;
        gap: .25rem;
        height: 1.75rem;
        width: 1.75rem;
        align-items: center;
        justify-content: center;
        padding: 0 2rem 1.75rem;
        border-top: 1.5625rem solid var(--color-primary);
        background-color: ${({theme}) => theme.colors.colorGrey10};
        border-radius: .25rem;
        cursor: pointer;
        transition: .4s;
    
        p{
            font-size: var(--font3);
            font-weight: 600;
        }
      
    }

    li:hover{
        border: 1px solid var(--color-primary);
        transition: .4s;
       
        p{
            color: var(--color-primary);
        }
    }

    .icons{
        width: 28px;
        height:28px;
    }

    @media(min-width: 600px){
        padding: 0 3.5rem;
    }
`

export default StyledNav