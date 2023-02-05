import { useEffect } from "react"
import StyledCart from "./cart"
import ProductCart from "./CartProduct"


function Cart({currentSale,  setCart, cart, addProductsInCart, removeProductsInCart, itemTotal}){
    
    useEffect(() => {
        if(cart === "aberto"){
            window.addEventListener("keyup" , (keyCode) => {
                 if(keyCode.which === 27){
                     setCart("fechado")
                 }         
            })
         }
    }, [cart])

    return (
        <StyledCart>
            <div className="modal">
                <div className="modalHeader">
                    <p>Carriho de compras</p>
                    <p onClick={() => setCart("fechado")}>X</p>
                </div>
                <div className="modalBody">
                    {
                        currentSale.length === 0 ? (
                            <h3>Seu sacola está vazia</h3>
                        ): (
                            <ul>
                                {
                                    currentSale.map((sale) => {
                                        return < ProductCart key={sale.id} sale={sale} addProductsInCart={addProductsInCart} removeProductsInCart={removeProductsInCart} itemTotal={itemTotal}/>
                                    })
                                }
                            </ul>
                          
                        )
                    }
                </div>
            </div>
        </StyledCart>
    )
}

export default Cart