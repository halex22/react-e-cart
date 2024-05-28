import { useCart } from '../hooks/useCart'
import './footer.css'

export function Footer () {
  // const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      <h4>Prueba técnica de React ⚛️ － <span>@halex2209</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      <p>{JSON.stringify(cart, null, 2)}</p>
    </footer>
  )
}
