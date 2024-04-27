import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex  flex-col ">
            
        <div className="w-2/3 h-2/3 mx-auto">
            <img className="rounded-2xl" src={'https://i.ibb.co/vch0GFp/error-Image.jpg'}  />
        </div>

        <div className="mx-auto">
            <Link to='/'> <button className="btn bg-[#9BECC5]">Go Back to Home</button></Link>
        </div>
    </div>
    );
};

export default ErrorPage;