import CardProduct from "./Product"


function SectionProducts({products, addProductsInCart, removeProductsInCart, removeAllPrductsSame}){
   
    return(
        <section>
            <ul>
                {
                    products.map((product) => 
                    (<CardProduct
                        key={product.id} 
                        product={product}
                        addProductsInCart={addProductsInCart} 
                        removeProductsInCart={removeProductsInCart}
                        removeAllPrductsSame={removeAllPrductsSame}
                        />))
                }
            </ul>
        </section>
    )
}

export default SectionProducts