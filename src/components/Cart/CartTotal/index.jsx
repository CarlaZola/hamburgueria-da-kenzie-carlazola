import StyledSectionTotalCart from "./cartTotal";

function CartTotal({totalCart, clearCart}){

    console.log(totalCart)
    return(
        <StyledSectionTotalCart>
                <div className="contentTotalValue">
                    <p>Total: </p>
                    <h2>{totalCart.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h2>
                </div>
                <div className="contentButtons">
                    <button className="btnFinally" type="button">Finalizar compra</button>
                    <button className="btnRemoveAll" type="button" onClick={() => clearCart()}>Remover tudo</button>                    
                </div>
        </StyledSectionTotalCart>
    )
}

export default CartTotal