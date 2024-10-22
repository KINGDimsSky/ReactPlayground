import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/login'
import Register from './Pages/register'
import ErrorPage from './Pages/404'
import ProductPage from './Pages/product,'

const router = createBrowserRouter([
  {
    path: "/",
    element : <div>Hello World</div>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element : <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/products",
    element: <ProductPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
