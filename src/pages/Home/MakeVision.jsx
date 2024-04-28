import { IoMdChatboxes } from "react-icons/io";
import { IoIosImages } from "react-icons/io";
import { RiImageEditFill } from "react-icons/ri";
import { FaPaintbrush } from "react-icons/fa6";
const MakeVision = () => {
    return (
        <div>
            <div className="text-center py-8 ">
             <h2 className=" text-2xl lg:text-4xl font-extrabold">
             Let,s make your vision a reality.
             </h2>
              <p className=" pt-6 w-full mx-auto lg:w-9/12">
              Transform your dreams into reality. Let,s bring your vision to life together.{" "}
               </p>
      </div>
            <div className="px-5 my-5 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 flex justify-center flex-col items-center shadow-lg rounded-lg">
            <div className="max-w-32 max-h-32 rounded-xl">
            <IoMdChatboxes className="w-32 h-32 text-[#59E5A8]" />
            </div>
            
            <h3 className="font-semibold text-xl mt-2 hover:text-[#59E5A8]">Consultation & Concept</h3>
            <p className=" text-center mt-2">Unlock your creative potential with us. From concept to creation, we guide you through every step to realize your artistic vision.</p>
            
            </div>
        <div className="p-5 flex justify-center flex-col items-center shadow-lg rounded-lg">
            <div className="max-w-32 max-h-32 rounded-xl">
            <IoIosImages  className="w-32 h-32 text-[#59E5A8]" />
            </div>
            <h3 className="font-semibold text-xl mt-2  hover:text-[#59E5A8]">Choose Style Painting</h3>
            <p className=" text-center mt-2">Your style with us.From impression to realism, our artists capture your vision, your space with a custom masterpiece. </p>
            
            </div>
        <div className="p-5 flex justify-center flex-col items-center shadow-lg rounded-lg">
        <div className="max-w-32 max-h-32 rounded-xl">
            <FaPaintbrush className="w-32 h-32 text-[#59E5A8]" />
            </div>
            <h3 className="font-semibold text-xl mt-2 hover:text-[#59E5A8]">Receive Your Supplies</h3>
            <p className=" text-center mt-2">Explore a wide selection of creative tools. Get them delivered to your doorstep and start your artistic journey hassle-free.</p>
            
            </div>
        <div className="p-5 flex justify-center flex-col items-center shadow-lg rounded-lg">
        <div className="max-w-32 max-h-32 rounded-xl">
            <RiImageEditFill className="w-32 h-32 text-[#59E5A8]" />
            </div>
            <h3 className="font-semibold text-xl mt-2 hover:text-[#59E5A8]">Paint a Masterpiece</h3>
            <p className="text-center  mt-2">Let us craft your masterpiece. With skill and passion, we will bring your vision to life on canvas, creating art that speaks volumes.</p>
            
            </div>
        
    </div>
        </div>
    );
};

export default MakeVision;