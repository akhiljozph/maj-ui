import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import Majui from './components/maj-ui/MajUi'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Majui backgroundColor="#644040" color="#ffad0d" />
  </React.StrictMode>,
)
