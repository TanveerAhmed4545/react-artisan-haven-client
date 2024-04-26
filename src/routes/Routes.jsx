import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllArtItems from "../pages/AllArtItems/AllArtItems";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import MyArtList from "../pages/MyArtList/MyArtList";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import MyCardUpdate from "../pages/MyArtList/MyCardUpdate";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allArtItems',
                element: <AllArtItems></AllArtItems>,
                loader: ()=> fetch('http://localhost:5000/craftItems')
            },
            {
               path: '/viewDetails/:id',
               element: <PrivateRoute>
                <ViewDetails></ViewDetails>
               </PrivateRoute>,
               loader: ()=> fetch('http://localhost:5000/craftItems')
            },
            {
                path: '/addCraftItem',
                element: <PrivateRoute>
                    <AddCraftItem></AddCraftItem>
                </PrivateRoute>
            },
            {
                path: '/myCardUpdate/:id',
                element: <PrivateRoute>
                    <MyCardUpdate></MyCardUpdate>
                </PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/craftItem/${params.id}`)
            },
            {
                path: '/myArtList',
                element: <PrivateRoute>
                    <MyArtList></MyArtList>
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    }
]);

export default router;