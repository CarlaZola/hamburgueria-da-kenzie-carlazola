import StyledSectionTotalCart from "./cartTotal";

function CartTotal({totalCart}){

    console.log(totalCart)
    return(
        <StyledSectionTotalCart>
                <h2>{totalCart.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h2>
        </StyledSectionTotalCart>
    )
}

export default CartTotal