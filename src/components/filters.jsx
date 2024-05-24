import { useState } from 'react'

export function Filters () {
  const [minPrice, setMinPrice] = useState(0)

  const handleMinPriChange = (e) => {
    setMinPrice(e.target.value)
  }

  return (
    <>
      <section id='filter-container'>
        <div id='price-filter-container'>
          <div className='price-filter'>
            <label htmlFor='price'>Price</label>
            <input
              type='range' id='price'
              value={minPrice} onChange={handleMinPriChange}
              min='0' max='1000'
            />
            <span>$ {minPrice} </span>
          </div>
        </div>
        <div className='categories-filter'>
          <span>Categories</span>
          <select name='' id=''>
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
