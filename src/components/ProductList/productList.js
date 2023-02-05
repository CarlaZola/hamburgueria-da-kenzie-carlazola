import styled from "styled-components";

const StyledSectionProducts = styled.section`  
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 59.375rem;
        padding-left: 1rem;
        padding-right: 1rem;
        
        h3{
            color: ${({theme}) => theme.colors.colorGrey100};
            text-align: center;
        }

        ul{
            display: flex;
            gap: 1rem;
            width: 100%;
            overflow-x: scroll;
            padding-bottom: 1rem;
            margin-top: 2.5rem;
            margin-bottom: 2rem;
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

    @media(min-width:600px){

        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            overflow-x: unset; 
            margin-top: 3rem;
        }
    }
   

`

export default StyledSectionProducts