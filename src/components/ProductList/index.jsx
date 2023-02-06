import CardProduct from "./Product"
import StyledSectionProducts from "./productList"


function SectionProducts({products, addProductsInCart, selectedItems}){
    
    return(
        <StyledSectionProducts>
            <ul className="list">
                {
                    selectedItems.length === 0 ? (
                        <h3>
                            Produtos indisponíveis no momento :( 
                        </h3>
                    ) : (
                       
                         selectedItems.map((product) => 
                        (<CardProduct
                                key={product.id} 
                                product={product}
                                addProductsInCart={addProductsInCart} 
                                />))
                        
                    )
                 
                }
            </ul>
        </StyledSectionProducts>
    )
}

export default SectionProducts