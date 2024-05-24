import { createRoot } from 'react-dom/client'
import App from './src/app'
import { FiltersProvider } from './src/context/filterContext'

const root = createRoot(document.getElementById('app'))

root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
