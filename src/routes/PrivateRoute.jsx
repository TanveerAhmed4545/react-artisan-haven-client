import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader.json";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation(); 

    if(loading){
        return <div className="flex justify-center items-center ">
             {/* <span className="loading loading-infinity loading-lg md:w-14 lg:w-20  text-blue-900"></span> */}
             <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
           </div>
     }
 
     if(user){
         return children;
     }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;