import styled from "styled-components";

const StyledCardProduct = styled.li`
        width: 15.9375rem;
        height: 336px;
        min-width:15.9375rem;;
        border: .125rem solid var(--color-grey-20);
        border-radius: .3125rem;
        transition: .3s;

        &:hover{
            border: .125rem solid ${({theme}) => theme.colors.colorPrimary200};
            transition: .3s;

            img{
                border-bottom: 1px solid ${({theme}) => theme.colors.colorPrimary200};
                transition: .3s;
            }
        }

    img{
        width: 15.625rem;
        height: 9.375rem;
        object-fit: contain;
        background-color: ${({theme}) => theme.colors.colorGrey1};
        border-bottom: 1px solid var(--color-grey-20);

    }

    div{
        padding: 0 18px 15px;
        display: flex;
        flex-direction: column;
        gap: 0.875rem;
    }

    .content_img{
        align-items: center;
        justify-content: center;
    }

    h3, span{
        color: ${({theme}) => theme.colors.colorGrey100};
    }

   h3{
        font-size: var( --title3);
    }
    span{
        font-size: var(--font2);
    }

    p{
        color: ${({theme}) => theme.colors.colorPrimary200};
        font-size: var(--font1);
        font-weight: 700;
    }

    button{
        height: 2.5rem;
        width: 6.25rem;
        padding: 0 1.25rem;
        background-color: ${({theme}) => theme.colors.colorPrimary200};
        border: 1px solid ${({theme}) => theme.colors.colorPrimary200};
        border-radius : .25rem;
        color: ${({theme}) => theme.colors.colorGrey0};
        cursor: pointer;

        &:hover{
            opacity: 90%;
        }
    }

` 
export default StyledCardProduct
