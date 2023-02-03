
import Header from "../../components/Header";
import SectionProducts from "../../components/ProductList";
import StyledDashboard from "./dashboard";

function Dashboard({theme, setTheme, products, addProductsInCart, removeProductsInCart, removeAllPrductsSame}){
    return(
     <>
        <Header
            setTheme={setTheme}
            theme={theme}
        />
        <StyledDashboard>
          

            <SectionProducts
             products={products}
             addProductsInCart={addProductsInCart}
             removeProductsInCart={removeProductsInCart}
             removeAllPrductsSame={removeAllPrductsSame}
             />
        </StyledDashboard>
     </>
    )
}

    

export default Dashboard