import styled from "styled-components";

const StyledCartProduct = styled.li`
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: .75rem;
        width: 90%;
        max-width: 95%;
        height: 90px;
        border-bottom: 2px solid ${({theme}) => theme.colors.colorPrimary200};

    .contentLeft{
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
        max-width: 10.625rem;
        
    }

    .nameProduct{
        font-size : var(--fontDefault);
        width: 100%;
    }

    .priceProduct{
        font-size: var(--font1);
    }

    .contentQuantitites{
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.25rem;
        height: 2.125rem;
        border: 0.25px solid var(--color-grey-50);
        border-radius: .1875rem;
        width: 4.375rem;
    }

    .imageProduct{
        width: 4.0625rem;
        height: 4.0625rem;
        object-fit: contain;
    }
`

export default StyledCartProduct
