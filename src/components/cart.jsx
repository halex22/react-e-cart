import { useId } from 'react'
import './cart.css'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon} from './icons'

export function Cart () {
  const cartCheckBoxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input type='checkbox' hidden id={cartCheckBoxId} />

      <aside className='cart'>
        <ul>
          <li>
            <img
              src='https://dummyimage.com/200x100&amp;text=Key Holder'
              alt='image of product Key Holder'
            />
            <div>
              <strong>Key Holder</strong> - $999
            </div>

            <footer>
              <small>
                Qty: 1
              </small>
              <button>+</button>
            </footer>

          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
