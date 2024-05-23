import './Products.css'
import { AddToCartIcon } from './icons'

export function Products ({ products }) {
  return (
    <>
      <main className='products'>
        <ul>
          {products.slice(0, 8).map((product) => (
            <li key={product.id} className='product'>
              <img
                src={`https://dummyimage.com/200x100&text=${product.title}`}
                alt={`image of product ${product.title}`}
              />

              <div>
                <h3>
                  <strong>{product.title}</strong>
                </h3>
                <span>- {product.price}</span>
              </div>
              <div>
                <AddToCartIcon />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
