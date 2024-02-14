import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
    Home,
    People,
    Films,
    Planets, 
    ErrorPage,
    Root,
    PeopleItem,
    FilmItem,
    PlanetItem
} from './App'
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Root><ErrorPage /></Root>,
        children: [
            { index: true, element: <Home /> },
            { path: "people", 
            element: <People />,
            children: [{path: 'id', element: <PeopleItem></PeopleItem>}] },
            { path: "planets", 
            element: <Planets />,
            children: [{path: 'id', element: <PlanetItem></PlanetItem>}] },
            { path: "films", element: <Films />,
            children: [{path: 'id', element: <FilmItem></FilmItem>}] }
        ]
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
