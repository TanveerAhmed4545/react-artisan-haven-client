import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaHandHoldingUsd } from "react-icons/fa";

const OurService = () => {
    return (
        
        <div>
            <div className="text-center py-5 ">
             <h2 className=" text-2xl lg:text-4xl font-extrabold">
              Our Services
             </h2>
              <p className=" pt-6 w-full mx-auto lg:w-9/12">
              Explore Our Services: Enhancing Your Experience.{" "}
               </p>
      </div>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen my-6">
            
            <div >
            <figure><img className="w-full min-h-screen object-cover object-center" src='https://i.ibb.co/yWqBFt2/latest.jpg'/></figure>
            </div>
            <div className="md:ml-10 ml-5 flex flex-col justify-around gap-5 ">
                 <div className="space-y-3">
                 <div className="max-w-20 max-h-20 rounded-xl">
            <FaShippingFast className="w-20 h-20 text-[#59E5A8]" />
            </div>
                    <h2 className="text-xl font-semibold">Free Shipping</h2>
                    <p className="mr-5">Enjoy Free Shipping on All Artwork!</p>
                 </div>
                 <div className="space-y-3">
                 <div className="max-w-20 max-h-20 rounded-xl">
            <BiSupport className="w-20 h-20 text-[#59E5A8]" />
            </div>
                    <h2 className="text-xl font-semibold">Online Support</h2>
                    <p> Need Assistance? We are Here to Help! </p>
                 </div>
                 <div className="space-y-3">
                 <div className="max-w-20 max-h-20 rounded-xl">
            <FaHandHoldingUsd className="w-20 h-20 text-[#59E5A8]" />
            </div >
                    <h2 className="text-xl font-semibold">Cash On Delivery</h2>
                    <p>Pay with Ease: Cash On Delivery Available!</p>
                 </div>
            </div>
        </div>
        </div>
    );
};

export default OurService;
