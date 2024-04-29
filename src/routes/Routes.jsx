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
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CategoriesCard from "../pages/CategoriesCard/CategoriesCard";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://react-artisan-haven-server.vercel.app/craftItems')
            },
            {
                path: '/allArtItems',
                element: <AllArtItems></AllArtItems>,
                loader: ()=> fetch('https://react-artisan-haven-server.vercel.app/craftItems')
            },
            {
               path: '/viewDetails/:id',
               element: <PrivateRoute>
                <ViewDetails></ViewDetails>
               </PrivateRoute>,
               loader: ()=> fetch('https://react-artisan-haven-server.vercel.app/craftItems')
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
                loader: ({params})=>fetch(`https://react-artisan-haven-server.vercel.app/craftItem/${params.id}`)
            },
            {
                path: '/myArtList',
                element: <PrivateRoute>
                    <MyArtList></MyArtList>
                </PrivateRoute>
            },
            {
                path: '/categoriesCard/:id',
                element: <CategoriesCard></CategoriesCard>,
                loader: ()=> fetch('https://react-artisan-haven-server.vercel.app/craftItems')
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