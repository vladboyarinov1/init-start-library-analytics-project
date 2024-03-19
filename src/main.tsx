import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/app/store'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
// Supports weights 100-900
import '@fontsource-variable/roboto-slab'

import { App } from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      {/*<BreadcrumbsProvider>*/}
      <App />
      {/*</BreadcrumbsProvider>*/}
    </BrowserRouter>
  </Provider>
)
