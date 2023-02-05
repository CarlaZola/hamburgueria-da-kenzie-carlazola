import StyledCardProduct from "./cardProduct"
// import { GrFormSubtract, GrFormAdd } from "react-icons/gr"

function CardProduct({product, addProductsInCart}){
    return(
        <StyledCardProduct>
            <div className="content_img">
                <img src={product.img} alt={product.name}/>
            </div>
            <div className="content">
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <p>{product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                <button type="button" onClick={() => addProductsInCart(product)}>Adicionar</button>
            </div>
        </StyledCardProduct>
    )
}   

export default CardProduct