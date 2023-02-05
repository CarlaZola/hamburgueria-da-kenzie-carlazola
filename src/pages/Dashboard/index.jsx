// import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Cart from "../../components/Cart";
import Header from "../../components/Header";
import StyledDashboard from "./dashboard";
import SectionProducts from "../../components/ProductList";
import IconsNav from "../../components/Nav";
import Input from "../../components/Header/InputSearch";

// import useResizeObserver from "@react-hook/resize-observer"

function Dashboard({theme, setTheme, products, addProductsInCart, removeProductsInCart, removeAllPrductsSame, cart, setCart,currentSale, setFilteredItems, selectedItems, setSearch, search, itemTotal, totalCart, totalItemsInCart}){

    return(
     <StyledDashboard>
        <Header
            setTheme={setTheme}
            theme={theme}
            setCart={setCart}
            setSearch={setSearch}
            setFilteredItems={setFilteredItems}
            totalItemsInCart={totalItemsInCart}
        />

        <Input 
        search={search}
        setSearch={setSearch}
        setFilteredItems={setFilteredItems}
        />
        <IconsNav
        setFilteredItems={setFilteredItems}
        />
        <>
           { cart === "aberto" && < Cart 
                            currentSale={currentSale}  
                            setCart={setCart} 
                            cart={cart}
                            addProductsInCart={addProductsInCart}
                            removeProductsInCart={removeProductsInCart}
                            itemTotal={itemTotal}
                            />}
            <SectionProducts            
                products={products}
                addProductsInCart={addProductsInCart}
                selectedItems={selectedItems}


             />          
        </>
     </StyledDashboard>
    )
}

    

export default Dashboard