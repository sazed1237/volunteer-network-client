import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddEvent from "../Pages/AddEvent/AddEvent";
import AdminLayout from "../Layout/AdminLayout";
import Event from "../Pages/Home/Event/Events";
import RegisterEvent from "../Pages/RegisterEvent/RegisterEvent";
import RegisterAllEvents from "../Pages/RegisterAllEvents/RegisterAllEvents";
import Login from "../Pages/LogIn/Login";
import SingUp from "../Pages/SingUp/SingUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/events')

      },
      {
        path: '/addevent',
        element: <AddEvent></AddEvent>
      },
      {
        path: '/events',
        element: <Event></Event>,
        // loader: () => fetch('http://localhost:5000/events')
      },
      {
        path: '/registerevent/:id',
        element: <RegisterEvent></RegisterEvent>,
        loader: ({params}) => fetch(`http://localhost:5000/events/${params.id}`)
      },
      {
        path: '/registerallevents',
        element: <RegisterAllEvents></RegisterAllEvents>,
        loader: () => fetch('http://localhost:5000/registerevets')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singup',
        element: <SingUp></SingUp>
      }


    ],

  },
]);

export default router;