import { useState, useEffect } from 'react';
import RoutesMain from './routes';
import api from './services/api';
import { ThemeProvider } from 'styled-components';
import { ThemeLigth, ThemeDark } from './styles/theme';
import Global from './styles/globalStyles';

// import MaskGroup from "./assets/MaskGroup.svg";
// import MaskGroupDark from "./assets/MaskGroupDark.svg";

const themePreference = JSON.parse(localStorage.getItem('@themePreference'));
const productsInLocal = localStorage.getItem('@products');

function App() {
	const [products, setProducts] = useState([]);
	const [currentSale, setCurrentSale] = useState(productsInLocal ? JSON.parse(productsInLocal) : []);
	const [theme, setTheme] = useState(themePreference ? themePreference : 'ligth');
	const [loading, setLoading] = useState(false);
	const [cart, setCart] = useState(false);

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
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
		getProdcuts();
	}, []);

	// console.log(currentSale);

	useEffect(() => {
		// console.log('currentSale', currentSale);
		localStorage.setItem('@products', JSON.stringify(currentSale));
	}, [currentSale]);

	useEffect(() => {
		localStorage.setItem('@themePreference', JSON.stringify(theme));
	}, [theme]);

	// console.log(products);

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

			console.log(response);
			setCurrentSale(response);
		}
	}
	// console.log(productsInLocal)
	// console.log(JSON.parse(productsInLocal))
	// console.log(currentSale)

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

	// function sumOfAmounts(){
	//   const newCurrent = [...currentSale]
	//   const quantitiesInCart = newCurrent.map((sale) => sale.quantities)
	//   console.log(quantitiesInCart)
	// }

	// sumOfAmounts()

	function clearCart() {
		return setCurrentSale([]);
	}

	// function getProductBySearch(letters){
	//   return
	// }
	return (
		<>
			<Global />
			<ThemeProvider theme={theme === 'ligth' ? ThemeLigth : ThemeDark}>
				<RoutesMain
					setTheme={setTheme}
					products={products}
					addProductsInCart={addProductsInCart}
					removeProductsInCart={removeProductsInCart}
					removeAllPrductsSame={removeAllPrductsSame}
					theme={theme}
				/>
			</ThemeProvider>
		</>
	);
}

export default App;
