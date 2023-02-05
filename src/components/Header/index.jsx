import StyledHeader from "./header"
import {FaShoppingCart, FaSearch} from "react-icons/fa";
import Logo from "./Logo";
import Theme from "./Theme";
import Input from "./InputSearch";


function Header({theme, setTheme, setCart, setSearch, setFilteredItems, totalItemsInCart}){

    return(
        <StyledHeader>
           <div className="container">
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
                            <div className="cartTotal">
                                <span>{totalItemsInCart}</span>
                                <FaShoppingCart onClick={() => setCart("aberto")}/>
                            </div>
                            <FaSearch  onClick={() => {
                                setSearch(true)
                                setFilteredItems("Todos")

                            }}/>
                        </>
                    ) : (
                            <>
                            <div className="cartTotal">
                                <span>{totalItemsInCart}</span>
                                <FaShoppingCart color="#f5f5f5" onClick={() => setCart("aberto")}/>
                            </div>                           
                            <FaSearch color="#f5f5f5"  onClick={() => {
                                setSearch(true)
                                setFilteredItems("Todos")
                                }}/>
                            </>
                        )
                    }
                </nav>           
                {/* <Input/> */}
           </div>
        </StyledHeader>
    )
}

export default Header