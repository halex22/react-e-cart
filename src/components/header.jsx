import { Filters } from './filters'

export function Header () {
  return (
    <>
      <header>
        <h1 id='shop-name'>React Shop</h1>
        <Filters />
      </header>
    </>
  )
}
