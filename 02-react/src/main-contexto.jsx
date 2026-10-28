import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './paginas-extras.css'
import PaginaContexto from './features/contexto/PaginaContexto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaginaContexto />
  </StrictMode>,
)
