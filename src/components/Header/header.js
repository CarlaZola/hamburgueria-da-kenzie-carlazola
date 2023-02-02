import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:1rem .75rem;
    background-color: ${({theme}) => theme.colors.colorGrey1};

    nav{
        display: flex;
        align-items: center;
        gap: .875rem;
    }

`

export default StyledHeader