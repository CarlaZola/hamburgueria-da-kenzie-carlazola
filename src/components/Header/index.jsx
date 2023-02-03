import StyledHeader from "./header"
import {FaShoppingCart, FaSearch} from "react-icons/fa";
import Logo from "./Logo";
import Theme from "./Theme";
import Input from "./InputSearch";


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
                       <>
                        <FaShoppingCart/>
                        <FaSearch/>
                       </>
                ) : (
                        <>
                        <FaShoppingCart color="#f5f5f5"/>
                        <FaSearch color="#f5f5f5"/>
                        </>
                    )
                }
            </nav>
           
            <Input/>

        </StyledHeader>
    )
}

export default Header