import { useEffect, useRef } from "react"
import StyledCart from "./cart"
import ProductCart from "./CartProduct"
import CartTotal from "./CartTotal"
import useOutclick from "../../hooks"



function Cart({currentSale,  setCart, cart, addProductsInCart, removeProductsInCart, itemTotal, totalCart, removeAllPrductsSame}){
    
    useEffect(() => {
        if(cart === "aberto"){
            window.addEventListener("keyup" , (keyCode) => {
                 if(keyCode.which === 27){
                     setCart("fechado")
                 }         
            })
         }
    }, [cart])

    const ref =  useOutclick(() => {
        setCart("fechado")
    })

    return (
        <StyledCart>
            <div className="modal" ref={ref}>
                <div className="modalHeader">
                    <p>Carriho de compras</p>
                    <p className="btnClose" onClick={() => setCart("fechado")}>X</p>
                </div>
                <div className="modalBody">
                    {
                        currentSale.length === 0 ? (
                            <h3>Seu sacola está vazia</h3>
                        ): (
                            <ul>
                                {
                                    currentSale.map((sale) => {
                                        return < ProductCart key={sale.id} sale={sale} addProductsInCart={addProductsInCart} removeProductsInCart={removeProductsInCart} itemTotal={itemTotal} removeAllPrductsSame={removeAllPrductsSame}/>
                                    })
                                }
                            </ul>
                          
                        )
                    }
                    <CartTotal totalCart={totalCart}/>
                </div>
            </div>
        </StyledCart>
    )
}

export default Cart