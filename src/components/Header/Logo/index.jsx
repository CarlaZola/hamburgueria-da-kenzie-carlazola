import StyledLogo from "./logo"

function Logo({theme}){

    return (
        <>
        { 
        theme === "ligth" ? (
            <StyledLogo>
                Burguer<span>Kenzie</span>
            </StyledLogo>
        ):(
            <StyledLogo>
                Burguer<span>Kenzie</span>
            </StyledLogo>
        )
        }
        </>
    )
}

export default Logo
