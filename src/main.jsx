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
import ManageItems from './Components/ManageItems/ManageItems.jsx';
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
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/home",
        element: <DashHome></DashHome>,
      },
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/OrderHistory",
        element: <OrderHistory></OrderHistory>,
      },
      //Admin route
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageitems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/item/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://restuarent-server.vercel.app/menu/${params.id}`),
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
import AllUsers from './Components/Dashboard/Admin/AllUsers.jsx';
import AdminRoute from './PrivateRoute/AdminRoute.jsx';
import AddItem from './Components/Dashboard/AddItem/AddItem.jsx';
import UpdateItem from './Components/ManageItems/UpdateItem.jsx';
import Payment from './Components/Dashboard/Payment/Payment.jsx';
import OrderHistory from './Components/Dashboard/Payment/OrderHistory.jsx';


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
