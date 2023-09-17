import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes.jsx'

import {Planets} from 'react-preloaders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
    <Planets color={'#fbfbfc'} background="linear-gradient(180deg, #f95759 0%, #a62022 100%)" animation="slide-down"/>
  </React.StrictMode>,
)
