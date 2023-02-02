import StyledHeader from "./header"
import {FaShoppingCart} from "react-icons/fa";
import Logo from "./Logo";
import Theme from "./Theme";

function Header({theme, setTheme}){

    return(
        <StyledHeader>
            <Logo
            theme={theme}
            />           
            <nav>
                <Theme
                theme={theme}
                setTheme={setTheme}
                />
                {
                    theme === "ligth" ? (
                        <FaShoppingCart/>
                ) : (
                        <FaShoppingCart color="#f5f5f5"/>
                    )
                }
            </nav>

        </StyledHeader>
    )
}

export default Header