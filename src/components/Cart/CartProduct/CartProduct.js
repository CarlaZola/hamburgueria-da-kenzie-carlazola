import styled from "styled-components";

const StyledCartProduct = styled.li`
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: .75rem;
        width: 95%;
        padding: .5rem 0;
        height: 90px;
        border-bottom: 2px solid ${({theme}) => theme.colors.colorPrimary200};

    .contentLeft{
        display: flex;
        align-items: center;
        gap: .875rem;
        width: 100%;
        max-width: 10.625rem;
        
    }
    .contentNameAndProduct{
        display: flex;
        flex-direction: column;
        gap: .25rem;
        align-items: flex-start;
       
    }

    .nameProduct{
        font-size : var(--fontDefault);
        width: 100%;
    }

    .priceProduct{
        font-size: var(--font1);
        font-weight : 700;
        color: var(--color-primary);
    }

    .contentQuantitites{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.25rem;
        height: 2.125rem;
        border: 0.25px solid var(--color-grey-50);
        border-radius: .1875rem;
        width: 4.375rem;
    }

    .imageProduct{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4.0625rem;
        height: 4.0625rem;
        object-fit: contain;
        background-color: var(--color-grey-20);
        border-radius: .25rem;

    }

    .controlSale{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .25rem;
    }

    .btn{
        cursor: pointer;
        font-weight: 600;
    }

    .btnDetele{
        cursor: pointer;
    }
`

export default StyledCartProduct
