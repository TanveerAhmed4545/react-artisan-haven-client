import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { AuthContext } from "../providers/AuthProvider";
import demoUserPic from "../assets/demoUser.png";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);


  const handleSignOut = () =>{
  
    logOut()
    .then(result =>{
      console.log(result);
       toast.success('Logout Completed');
    })
    .catch(error =>{
      console.log(error);
        toast.warn("Error");
    })

  }

  const links = (
    <>
    <li><NavLink  to='/'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border bg-[#59E5A8]  font-semibold border-[#98EDC4] mr-3"
           : isPending
           ? "pending"
           : "mr-3 font-semibold"
       }>Home</NavLink></li>
       <li><NavLink  to="/allArtItems"  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border bg-[#59E5A8]  font-semibold border-[#98EDC4] mr-3"
           : isPending
           ? "pending"
           : "mr-3 font-semibold"
       }>All Art & craft Items</NavLink></li>

<li><NavLink  to="/addCraftItem"  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border bg-[#59E5A8]  font-semibold border-[#98EDC4] mr-3"
           : isPending
           ? "pending"
           : "mr-3 font-semibold"
       }>Add Craft Item</NavLink></li>

<li><NavLink  to="/myArtList"  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border bg-[#59E5A8]  font-semibold border-[#98EDC4] mr-3"
           : isPending
           ? "pending"
           : "mr-3 font-semibold"
       }>My Art&Craft List</NavLink></li>
      
      {
        !user && (
          <>
          <li><NavLink  to="/login"  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border bg-[#59E5A8]  font-semibold border-[#98EDC4] mr-3"
           : isPending
           ? "pending"
           : "mr-3 font-semibold"
       }>Login</NavLink></li>
          <li><NavLink  to="/register"  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border bg-[#59E5A8]  font-semibold border-[#98EDC4] mr-3"
           : isPending
           ? "pending"
           : "mr-3 font-semibold"
       }>Register</NavLink></li>
      
          </>
        ) 
      }
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className=" text-xl">Artisan Haven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div>
         {
          user &&  <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
            <Tooltip id="my-tooltip" />
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                data-tooltip-place="top"
                src={user?.photoURL ? user.photoURL : demoUserPic}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="btn bg-[#59E5A8]" onClick={handleSignOut}>Logout</button>
            </li>
          </ul>
        </div>
         }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
