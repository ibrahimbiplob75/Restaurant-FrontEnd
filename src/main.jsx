import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import OurMenu from './Components/Menu/OurMenu.jsx';
import OurShop from './Components/OurShop/OurShop.jsx';
import Login from './Components/Login/Login.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import ContextProvider from './ContextProvider/ContextProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

import Dashboard from "./Components/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/shop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/shop/:category",
        element: (
          <PrivateRoute>
            <OurShop></OurShop>
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/home",
        element: <DashHome></DashHome>,
      },
      {
        path: "/dashboard/cart",
        element:<Cart></Cart>,
      },
    ],
  },
]);
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Cart from './Components/Dashboard/Cart.jsx';
import DashHome from './Components/Dashboard/DashHome.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <div className="max-w mx-2">
          <RouterProvider router={router} />
        </div>
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
