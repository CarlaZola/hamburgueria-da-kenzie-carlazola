import { useState, useEffect } from "react";
import RoutesMain from "./routes";
import api from "./services/api"
import { ThemeProvider } from 'styled-components';
import { ThemeLigth, ThemeDark } from "./styles/theme";
import Global from "./styles/globalStyles";
// import MaskGroup from "./assets/MaskGroup.svg";
// import MaskGroupDark from "./assets/MaskGroupDark.svg";

function App() {

  const productsInLocal = localStorage.getItem("@products")
  const themePreference = JSON.parse(localStorage.getItem("@themePreference"))

  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState(productsInLocal ? JSON.parse(productsInLocal) : [])
  const [theme, setTheme] = useState(themePreference ? themePreference : "ligth")
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    async function getProdcuts(){
      try {
        const response = await api.get("/products")
        setProducts(response.data)

      } catch (error) {
          console.log(error)
      }
      finally{
        setLoading(false)
      }
    }
    getProdcuts()
  }, [])

  useEffect(() => {
    localStorage.setItem("@products", JSON.stringify(currentSale))
  }, [currentSale])
  
  useEffect(() => {
    localStorage.setItem("@themePreference", JSON.stringify(theme))
  }, [theme])

  function addProductsInCart(product){
      if(!currentSale.some((currentProduct) => currentProduct.id === product.id)){
          product.quantities = 1
          setCurrentSale([...currentSale, product])
      }
      else{
          product.quantities = product.quantities + 1
          setCurrentSale([...currentSale])
      }
  }

  function removeProductsInCart(product){
      if(product.quantities > 1){
        if(currentSale.some((currentProduct) => currentProduct.id === product.id)){
          product.quantities = product.quantities - 1
          setCurrentSale([...currentSale])
        }
      }
      else{
        const newCurrentSale = currentSale.filter((currentProduct) => currentProduct.id !== product.id)
        setCurrentSale([...newCurrentSale])
      }
  
  }

  function removeAllPrductsSame(product){
      const newCurrentSale = currentSale.filter((currentProduct) => currentProduct.id !== product.id)
      setCurrentSale([...newCurrentSale])
  }

  function clearCart(){
      return setCurrentSale([])
  }

  console.log(currentSale)
  return (
    <>
      <Global/>
      <ThemeProvider theme={theme === "ligth" ?  ThemeLigth : ThemeDark}>
          <RoutesMain          
          setTheme={setTheme}
          products={products}
          addProductsInCart={addProductsInCart}
          removeProductsInCart={removeProductsInCart}
          removeAllPrductsSame={removeAllPrductsSame}
          />       
      </ThemeProvider>
    </>
  )
}

export default App
