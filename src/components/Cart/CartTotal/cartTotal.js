import styled from "styled-components";

const StyledSectionTotalCart = styled.section`
    /* max-height: 150px; */

    .contentTotalValue{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.75rem;
        padding: 1rem 1.5rem 1rem;
        border-top: 2px solid ${({theme}) => theme.colors.colorPrimary200};      
    }

    .contentButtons{
        display: flex;
        flex-direction: column;
        gap: .25rem;
        padding-bottom : 1rem;

        .btnRemoveAll, .btnFinally{
            padding: 12px 0;
            border: none;
            color: var(--color-grey-5);
            border-radius: .25rem;
            cursor: pointer;
        }

        .btnRemoveAll{
            background-color: var(--color-grey-50);
        }

        .btnFinally{
            background-color: ${({theme}) => theme.colors.colorPrimary200};
        }
    }


`

export default StyledSectionTotalCart