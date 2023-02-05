import StyledCartProduct from "./CartProduct"
import {GrFormAdd, GrFormSubtract} from "react-icons/gr"
import {FaTrashAlt} from "react-icons/fa"


function ProductCart({sale, addProductsInCart, removeProductsInCart, itemTotal, removeAllPrductsSame}){
    const value = itemTotal(sale)
    
    return (
        <StyledCartProduct>
           <div className="contentLeft">
                <div>
                    <img src={sale.img} alt="" className="imageProduct"/>
                </div>
                <div className="contentNameAndProdcut">
                    <p className="nameProduct">{sale.name}</p>
                    <p className="priceProduct">{value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                </div>
           </div>
            <div className="controlSale">
                <div className="contentQuantitites">               
                    <GrFormAdd onClick={() => addProductsInCart(sale)}/>
                    <p>{sale.quantities}</p>
                    <GrFormSubtract onClick={() => removeProductsInCart(sale)}/>
                </div>
                <p className="btnDetele" onClick={() => removeAllPrductsSame(sale)}>Excluir</p>
            </div>
        </StyledCartProduct>
    )
}

export default ProductCart