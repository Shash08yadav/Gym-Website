import React from 'react'
import ReactDOM from 'react-dom/client'
import Blog from './assets/Components/Blog.jsx'
import Membership from './assets/Components/Membership.jsx'
import Background from './assets/Components/Background.jsx'
import Gallery from './assets/Components/Gallery.jsx'
import Contact from './assets/Components/Contact.jsx'
import './index.css'
import {createBrowserRouter,
  RouterProvider,} from "react-router-dom";
import App from './App.jsx'

  const router=createBrowserRouter([
    {
      path:"",
      element:<App/>,
      children:[
        {path:"Blog",
        element:<Blog/>
        },
        {
          path:"Membership",
          element:<Membership/>
        },
        {
          path:"Gallery",
          element:<Gallery/>
        },
        {
          path:"Registration",
          element:<Contact/>
        },
        {
          path:"/",
          element:<Background/>
        },
        {
          path:"home/Registration",
          element:<Contact/>
        },
        {
          path:'home/Registration',
          element:<Membership/>
        },
        {
          path:'Membership/Registration',
          element:<Contact/>
        },
        {
          path:"home/Registration",
          element:<contact/>
        }
      ]
    }
  ])

  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />

</React.StrictMode>,
)
