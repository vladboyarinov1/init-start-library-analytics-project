import { HashRouter } from 'react-router-dom'

import { BreadcrumbsProvider } from '@/components/ui/sidebar'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
// Supports weights 100-900
import '@fontsource-variable/roboto-slab'

import { App } from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <BreadcrumbsProvider>
      <App />
    </BreadcrumbsProvider>
  </HashRouter>
)
