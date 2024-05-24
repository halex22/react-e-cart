import './index.css'
import { Products } from './components/Products'
import { Header } from './components/header'
import { Footer } from './components/footer'
import products from './mocks/products.json'
import { FiltersContext } from './context/filterContext'
import { useContext } from 'react'

const data = products.products

function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filterProducts, setFilters }
}

export default function App () {
  const { filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(data)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}
