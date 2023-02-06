import { useState, useEffect } from 'react';
import RoutesMain from './routes';
import api from './services/api';
import { ThemeProvider } from 'styled-components';
import { ThemeLigth, ThemeDark } from './styles/theme';
import Global from './styles/globalStyles';
import NotFound from './pages/NotFound';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const themePreference = JSON.parse(localStorage.getItem('@themePreference'));
const productsInLocal = localStorage.getItem('@products');


function App() {
  	const openOrClose = JSON.parse(localStorage.getItem("@openAndClose"))

	const [products, setProducts] = useState([]);
	const [currentSale, setCurrentSale] = useState(productsInLocal ? JSON.parse(productsInLocal) : []);
	const [theme, setTheme] = useState(themePreference ? themePreference : 'ligth');
	const [loading, setLoading] = useState(false);
	const [cart, setCart] = useState(openOrClose ? openOrClose : "fechado");
	const [filteredItems, setFilteredItems] = useState("Todos")
	const [search, setSearch] = useState(false);


	const categories = [
		"Sanduíches", 
		"Bebidas",
		"Doces"
	]

	useEffect(() => {
		setLoading(true);
		async function getProdcuts() {
			try {
				const response = await api.get('/products');

				const responseIfQuantities = response.data.map((item) => {
					const filterAddItem = JSON.parse(productsInLocal)?.filter((product) => product.id === item.id)[0];
					if (filterAddItem) {
						return {
							...filterAddItem,
							quantities: Number(filterAddItem.quantities)
						};
					} else {
						return { ...item, quantities: 0 };
					}
				});

				setProducts(responseIfQuantities);
			} catch(error) {
				toast.error("Ops, parece que algo saiu errado! :(", {
					theme: `colored`,
					position: "top-center",
				})
			} finally {
				setLoading(false);
			}
		}
		getProdcuts();
	}, []);

	useEffect(() => {		
		localStorage.setItem("@products", JSON.stringify(currentSale));
	}, [currentSale]);

	useEffect(() => {
		localStorage.setItem("@themePreference", JSON.stringify(theme));
	}, [theme]);

  	useEffect(() => {
      localStorage.setItem("@openAndClose", JSON.stringify(cart));
  	}, [cart])


	function addProductsInCart(product) {
		if (!currentSale.some((currentProduct) => currentProduct.id === product.id)) {
			product.quantities = 1;
			setCurrentSale([...currentSale, product]);
		} else {
			const response = currentSale.map((current) => {
				if (current.id === product.id) {
					product.quantities++;
					return product;
				}
				return current;
			});
			setCurrentSale(response);
		}
	}

	function removeProductsInCart(product) {
		if (product.quantities > 1) {
			if (currentSale.some((currentProduct) => currentProduct.id === product.id)) {
				product.quantities = product.quantities - 1;
				setCurrentSale([...currentSale]);
			}
		} else {
			const newCurrentSale = currentSale.filter((currentProduct) => currentProduct.id !== product.id);
			setCurrentSale([...newCurrentSale]);
		}
	}

	function removeAllPrductsSame(product) {
		const newCurrentSale = currentSale.filter((currentProduct) => currentProduct.id !== product.id);
		setCurrentSale([...newCurrentSale]);
	}

	function clearCart() {
		return setCurrentSale([]);
	}

	const selectedItems = products
	.filter((item) => filteredItems === "Todos" ? item : item.category === filteredItems || item.name.trim().toLowerCase().includes(filteredItems.toLowerCase()) || item.category.normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim().toLowerCase().includes(filteredItems))
	
	const totalCart = currentSale.reduce((acummulador, currentValue) =>  acummulador + (currentValue.price * currentValue.quantities), 0)
	const totalItemsInCart = currentSale.reduce((acummulador, currentValue) =>  acummulador + currentValue.quantities,  0)

	function itemTotal(item){
		const totalValue = currentSale.filter((sale) => sale.id === item.id)
		.reduce((acummulador, currentValue) => {
			return acummulador = (currentValue.price * currentValue.quantities)
		 }, 0)  
		 
		return totalValue
	}

	return (

		<>		
			<ThemeProvider theme={theme === 'ligth' ? ThemeLigth : ThemeDark}>
        	<Global />
				<RoutesMain			
					setTheme={setTheme}
					products={products}
					addProductsInCart={addProductsInCart}
					removeProductsInCart={removeProductsInCart}
					removeAllPrductsSame={removeAllPrductsSame}
					theme={theme}
					setCart={setCart}
					cart={cart}
					currentSale={currentSale}
					setFilteredItems={setFilteredItems}
					selectedItems={selectedItems}
					setSearch={setSearch}
					search={search}
					itemTotal={itemTotal}
					totalCart={totalCart}
					totalItemsInCart={totalItemsInCart}
					clearCart={clearCart}
					ToastContainer={ToastContainer}
				/>
				
			</ThemeProvider>
		</>
	);
}

export default App;
