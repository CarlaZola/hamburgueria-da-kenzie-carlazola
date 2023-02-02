import StyledCardProduct from "./cardProduct"


function CardProduct({product, addProductsInCart, removeProductsInCart, removeAllPrductsSame}){
    return(
        <StyledCardProduct>
            <div>
                <img src={product.img} alt={product.name}/>
            </div>
            <div className="content">
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <p>{product.price}</p>
                <button type="button" onClick={() => addProductsInCart(product)}>Adicionar</button>
                <button type="Remover" onClick={() => removeAllPrductsSame(product)}>Remover</button>
                <button type="TirarUm" onClick={() => removeProductsInCart(product)}>Remover um item</button>
            </div>
        </StyledCardProduct>
    )
}

export default CardProduct