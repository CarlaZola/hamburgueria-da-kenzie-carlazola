import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";


function RoutesMain({theme, setTheme, products, addProductsInCart, removeProductsInCart, removeAllPrductsSame}){

    return(
        <Routes>
            <Route path="/" element={ 
            < Dashboard 
            setTheme={setTheme}
            products={products}
            addProductsInCart={addProductsInCart}
            removeProductsInCart={removeProductsInCart}
            removeAllPrductsSame={removeAllPrductsSame}
            theme={theme}
             /> 
            }/>
            {/* <Route path="*" element={ <NotFound/> }/> */}
        </Routes>
    )
}

export default RoutesMain