import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./Pages/login";
import Register from "./Pages/register";
import ErrorPage from "./Pages/404";
import ProductPage from "./Pages/product,";
import ProfilePage from "./Pages/profile";
import DetailProduct from "./Pages/detailProduct";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Layouts/Navbar";
import DarkModeContextProvider from "./hooks/DarkMode";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>Hallo Dunia</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/product/:id",
        element: <DetailProduct />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </StrictMode>
);
