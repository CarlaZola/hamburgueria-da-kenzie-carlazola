import styled from "styled-components";

const StyledLogo = styled.h1`
    color: ${({theme}) => theme.colors.colorGrey100};
    letter-spacing: 1.5px;
    font-size: var(--title2);   
    display: flex;
    align-items: baseline;

    span{
        margin-left: .125rem;
        font-size: var(--title4);
        letter-spacing: 0;
        color: ${({theme}) => theme.colors.colorPrimary200};
    }

`

export default StyledLogo