import { Suspense, StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";

import './index.css'
import App from './App'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
    <Suspense fallback="Loading...">
    <App />
    </Suspense>
      
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)
