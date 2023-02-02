import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";


function RoutesMain({setTheme, products, addProductsInCart, removeProductsInCart, removeAllPrductsSame}){

    return(
        <Routes>
            <Route path="/" element={ 
            < Dashboard 
            setTheme={setTheme}
            products={products}
            addProductsInCart={addProductsInCart}
            removeProductsInCart={removeProductsInCart}
            removeAllPrductsSame={removeAllPrductsSame}
             /> 
            }/>
            {/* <Route path="*" element={ <NotFound/> }/> */}
        </Routes>
    )
}

export default RoutesMain