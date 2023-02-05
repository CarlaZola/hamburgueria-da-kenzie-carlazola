import StyledCartProduct from "./CartProduct"
import {GrFormAdd, GrFormSubtract} from "react-icons/gr"
function ProductCart({sale, addProductsInCart, removeProductsInCart, itemTotal}){
    const value = itemTotal(sale)
    
    return (
        <StyledCartProduct>
            <p>{sale.name}</p>
            <p>{sale.quantities}</p>

            <p>{value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>

            <GrFormAdd onClick={() => addProductsInCart(sale)}/>

            <GrFormSubtract onClick={() => removeProductsInCart(sale)}/>
        </StyledCartProduct>
    )
}

export default ProductCart