import './index.css'
import { Products } from './components/Products'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Cart } from './components/cart'
import products from './mocks/products.json'
import { useFilters } from './hooks/usefilters'
import { CartProvider } from './context/cartContext'

const data = products.products

export default function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(data)

  return (
    <CartProvider>
      <Cart />
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}
