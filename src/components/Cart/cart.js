import styled from "styled-components";

const StyledCart = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 2.5rem;
    background-color: rgba(0, 0, 0, 0.3);

    .modal{
        width: 95%;
        max-width: 31.25rem;
        border-radius: .25rem;
    }

    .modalHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3.375rem;
        padding: .625rem 1.375rem;
        background-color: ${({theme}) => theme.colors.colorPrimary200};    
        border-radius: .25rem .25rem 0 0;
        color: var(--color-grey-0);
        font-weight: 700;

        .btnClose{
            cursor: pointer;
        }
    }

    .modalBody{
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        min-height: 9.875rem;
        max-height: 22.5rem;
        padding: .25rem 1rem;
        background-color: var(--color-grey-5);
        border-radius: 0 0 .25rem .25rem;

        h3{
            margin-top: 1rem;
            text-align: center;
        }
    }

    ul{
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        max-height: 12.5rem;
    }

    ul::-webkit-scrollbar {
        width: 7.5px;
    }

    /* Track */
    ul::-webkit-scrollbar-track {
        background: var(--color-grey-20);
    }

    /* Handle */
    ul::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.colorPrimary200};
        border-radius: 4px;
    }
   
`

export default StyledCart