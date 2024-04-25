import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {
    const [showPassword,setShowPassword] = useState(false);
    const {signIn} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        // console.log(data);

        signIn(data.email,data.password)
        .then(result =>{
          // console.log(result.user);
          result.user &&  toast.success("Login Successfully");
          
         

        })
        .catch(error =>{
          // console.log(error);
          error && toast.warn("Login Error, email or password incorrect");
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login Now</h1>
      
    </div>
    <div className="card rounded-none shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body pb-0" onSubmit={handleSubmit(onSubmit)}>
       
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered"  
          {...register("email", { required: true })}
          />
          {errors.email && <span className="text-red-500 font-semibold pt-2">This Email field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="w-full relative">
          <input type={showPassword ? 'text' :"password" } placeholder="password" className="w-full input input-bordered" 
          {...register("password", { required: true })}
          />
          <span className="absolute top-4 right-2"  onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ?  <FaEyeSlash></FaEyeSlash>  : <IoMdEye></IoMdEye> 
                    }
                </span>
          </div>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="text-center py-5">
     <p>Do not have an account ? <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
     </div>
    </div>
  </div>
</div>
    );
};

export default Login;