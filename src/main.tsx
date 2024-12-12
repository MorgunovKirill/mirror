import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ItemsPage from '@/features/table/ui/itemsPage'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ItemsPage />
    </BrowserRouter>
  </React.StrictMode>
)
