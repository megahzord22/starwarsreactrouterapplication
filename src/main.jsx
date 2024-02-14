import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

import {
    Home,
    People,
    Films,
    Planets, 
    ErrorPage
} from './App'
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Root><ErrorPage /></Root>,
        children: [
            { index: true, element: <Home /> },
            { path: "people", element: <People /> },
            { path: "planets", element: <Planets /> },
            { path: "films", element: <Films /> }
        ]
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        {/* <App /> */}
    </React.StrictMode>,
)
