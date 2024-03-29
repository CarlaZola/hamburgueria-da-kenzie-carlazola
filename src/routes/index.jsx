import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";


function RoutesMain({theme, setTheme, products, addProductsInCart, removeProductsInCart, removeAllPrductsSame, setCart, cart, currentSale, setFilteredItems, selectedItems, search, setSearch, itemTotal, totalCart, totalItemsInCart, clearCart, ToastContainer, changeQuantityInCart}){

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
            setCart={setCart}
            cart={cart}
            currentSale={currentSale}
            setFilteredItems={setFilteredItems}
            selectedItems={selectedItems}
            search={search}
            setSearch={setSearch}
            itemTotal={itemTotal}
            totalCart={totalCart}
            totalItemsInCart={totalItemsInCart}
            clearCart={clearCart}     
            ToastContainer={ToastContainer} 
            changeQuantityInCart={changeQuantityInCart}     
             /> 
            }/>
            {/* <Route path="*" element={ <NotFound/> }/> */}
        </Routes>
    )
}

export default RoutesMain