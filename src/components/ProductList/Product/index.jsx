import StyledCardProduct from "./cardProduct"
// import { GrFormSubtract, GrFormAdd } from "react-icons/gr"

function CardProduct({product, addProductsInCart, removeProductsInCart, removeAllPrductsSame}){
    return(
        <StyledCardProduct>
            <div className="content_img">
                <img src={product.img} alt={product.name}/>
            </div>
            <div className="content">
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <p>{product.price}</p>
                <button type="button" onClick={() => addProductsInCart(product)}>Adicionar</button>
            </div>
        </StyledCardProduct>
    )
}   

export default CardProduct