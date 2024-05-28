import { useState, useId } from 'react'
import { useFilters } from '../hooks/usefilters'

export function Filters () {
  const { filters, setFilters } = useFilters()
  // const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPriChange = (e) => {
    setFilters(preveState => ({
      ...preveState, minPrice: e.target.value
    }))
  }

  const handleCatChange = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <>
      <section id='filter-container'>
        <div id='price-filter-container'>
          <div className='price-filter'>
            <label htmlFor={minPriceFilterId}>Price</label>
            <input
              type='range' id={minPriceFilterId}
              value={filters.minPrice} onChange={handleMinPriChange}
              min='0' max='1000'
            />
            <span>$ {filters.minPrice} </span>
          </div>
        </div>
        <div className='categories-filter'>
          <span>Categories</span>
          <select
            name='' id={categoryFilterId}
            onChange={handleCatChange} value={filters.category}>
            <option value='all' selected>All</option>
            <option value='laptops'>Laptops</option>
            <option value='smartphones'>Smartphones</option>
            <option value='fragances'>Fragances</option>
            <option value='skincare'>Skincare</option>
            <option value='home-decoration'>Home Decoration</option>
            <option value='grociries'>Groceries</option>

          </select>
        </div>
      </section>
    </>
  )
}
