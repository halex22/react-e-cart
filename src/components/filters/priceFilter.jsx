import { useState } from 'react'

export default function PriceFilter ({ price }) {
  const [filter, setFilter] = useState(price)

  const handlePriceFilterChange = (e) => {
    setFilter(e.target.value)
  }
  return (
    <>
      <label htmlFor='price-filter'>Price</label>
      <input
        type='range' name='' id='price-filter-input'
        min='0' max='1000'
        onChange={handlePriceFilterChange}
        value={filter}
      />
      <span>${filter}</span>

    </>
  )
}
