import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Phone from "../Pages/Phone/Phone";


const myRoute = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path: '/',
            element: <Home/>,
            loader: ()=> fetch('/phones.json')
        },
        {
          path: '/favorites',
          element:<Favorites/>
        },
        {
          path: '/login',
          element:<Login/>
        },
        {
          path: '/phones/:id',
          element:<Phone/>,
          loader: ()=> fetch('/phones.json')
        }
      ]
    }
  ])

  export default myRoute;