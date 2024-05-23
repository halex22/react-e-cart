import './index.css'
import { Products } from './components/Products'
import { Header } from './components/header'
import products from './mocks/products.json'
import { useState } from 'react'

const data = products.products

export default function App () {
  const [filters, setFilters] = useState({ category: 'all', minPrice: 0 })

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

  const filteredProducts = filterProducts(data)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}
