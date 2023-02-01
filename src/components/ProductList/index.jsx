import CardProduct from "./Product"


function SectionProducts({products}){
   
    return(
        <section>
            <ul>
                {
                    products.map((product) => (<CardProduct key={product.id} product={product}/>))
                }
            </ul>
        </section>
    )
}

export default SectionProducts