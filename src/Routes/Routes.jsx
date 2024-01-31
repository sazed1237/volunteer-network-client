import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddEvent from "../Pages/AddEvent/AddEvent";
import AdminLayout from "../Layout/AdminLayout";
import Event from "../Pages/Home/Event/Events";
import RegisterEvent from "../Pages/RegisterEvent/RegisterEvent";
import Login from "../Pages/LogIn/Login";
import SingUp from "../Pages/SingUp/SingUp";
import UserSpecificReg from "../Pages/UserSpecificEventReg/UserSpecificReg";
import PrivateRoute from "./PrivateRoute";
import HomeAdmin from "../Pages/Admin/HomeAdmin";
import RegisterAllEvents from "../Pages/Admin/RegisterAllEvents/RegisterAllEvents";



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
        path: '/events',
        element: <Event></Event>,
        // loader: () => fetch('http://localhost:5000/events')
      },
      {
        path: '/registerevent/:id',
        element: <PrivateRoute><RegisterEvent></RegisterEvent></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/events/${params.id}`)
      },
     
      {
        path: '/user-specific-reg',
        element: <PrivateRoute><UserSpecificReg></UserSpecificReg></PrivateRoute>,
        
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


  {
    path: 'admin',
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: '/admin',
        element: <HomeAdmin></HomeAdmin>
      },
      {
        path: '/admin/registerallevents',
        element: <RegisterAllEvents></RegisterAllEvents>,
        loader: () => fetch('http://localhost:5000/registerevets')
      },
      {
        path: '/admin/addevent',
        element: <AddEvent></AddEvent>
      },

    ]
  }
]);

export default router;