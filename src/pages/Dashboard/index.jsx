import  {FaMoon , FaSun}  from "react-icons/fa";
import SectionProducts from "../../components/ProductList";
import StyledDashboard from "./dashboard";

function Dashboard({setTheme, products, addProductsInCart, removeProductsInCart, removeAllPrductsSame}){
    return(
        <StyledDashboard>
            <FaMoon onClick={() => setTheme("dark")}/>
            <FaSun color="var(--color-grey-20)" onClick={() => setTheme("ligth")}/>

            <SectionProducts
             products={products}
             addProductsInCart={addProductsInCart}
             removeProductsInCart={removeProductsInCart}
             removeAllPrductsSame={removeAllPrductsSame}
             />
        </StyledDashboard>
    )
}

export default Dashboard