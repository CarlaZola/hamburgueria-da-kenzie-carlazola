import { useState, useEffect } from "react";
import RoutesMain from "./routes";
import api from "./services/api"
import { ThemeProvider } from 'styled-components';
import { ThemeLigth, ThemeDark } from "./styles/theme";
import Global from "./styles/globalStyles";

function App() {

  const productsInLocal = JSON.parse(localStorage.getItem("@products"))
  const themePreference = JSON.parse(localStorage.getItem("@themePreference"))

  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState(productsInLocal ? productsInLocal : [])
  const [theme, setTheme] = useState(themePreference ? themePreference : "ligth")
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    async function getProdcuts(){
      try {
        const response = await api.get("/products")
        console.log(response.data) 
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
    localStorage.setItem("@themePreference", JSON.stringify(theme))
  }, [theme])

  return (
    <>
      <Global/>
      <ThemeProvider theme={theme === "ligth" ?  ThemeLigth : ThemeDark}>
          <RoutesMain
          setTheme={setTheme}
          products={products}
          />
      </ThemeProvider>
    </>
  )
}

export default App
