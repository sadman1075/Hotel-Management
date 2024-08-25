import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Pages/Home/Home";
import Resturent from "../Pages/Resturent/Resturent";

import Singin from "../Pages/Singin/Singin";
import Registration from "../Pages/Registration/Registration";
import PrivateRouter from "../privateRouter/PrivateRouter";
import Booking from "../Pages/Booking/Booking";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: 'registration',
                element: <Registration></Registration>
            },

            {
                path: 'singin',
                element: <Singin></Singin>
            },
            {
                path:'/booking',
                element:<PrivateRouter><Booking></Booking></PrivateRouter>
            }
        ]

    }

])

