import React from 'react'
import ReactDOM from 'react-dom/client'
//importar las funcionces

import {App} from './App.jsx'
import './index.css'

//Un componente es una funcion que devuelve un elemento
//Los componentes deben ser PascalCase

//Para crear los componentes utilizamos App.jsx
const root = ReactDOM.createRoot(document.getElementById('root'))



root.render( 
<App/>

)



