import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Home from './Components/Home';
import SearchBox from './Components/SearchBox';
import Random from './Components/Random';
import Contact from './Components/Contact';
import App from './App';


import {createBrowserRouter, RouterProvider } from 'react-router-dom';


const appRouter = createBrowserRouter([
    {
        path :"/",
        element: <App />,
        children:[
            {
                path:"/",
                element:<Home />,
            },
            {
                path:"/SearchBox",
                element:<SearchBox />,
            },
            {
                path:"/Random",
                element:<Random />,
            },
            {
                path:"/Contact",
                element:<Contact/>,
            }
        ]
    }
   
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={appRouter} />
  
);


