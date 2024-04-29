import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const HomeArtItem = ({arts}) => {
    // eslint-disable-next-line react/prop-types
    const {_id,item_name,subcategory_Name,price,rating,customization,stockStatus,image} =arts;
    return (
        <div>
            
            <div className="card  p-5 bg-base-100 rounded-tr-none rounded-bl-none border-[#E3F9ED] border-2 hover:border-none hover:shadow-xl hover:shadow-[#98EDC4] transition duration-300 ease-in-out">
  <div className="relative">
  <figure><img className="h-auto md:h-44 lg:h-52 w-full rounded-tr-none rounded-bl-none rounded-xl" src={image} /></figure>
  <button className="absolute top-3 right-3 rounded-tr-none rounded-bl-none  px-3 py-2 text-white rounded-xl bg-[#59E5A8]">{stockStatus}</button>
  </div>
  <div className="mt-3">
    <h2 className="card-title hover:text-[#59E5A8]">{item_name}</h2>
    <p className="flex items-center my-3 font-medium">Price :  {price} <span className="text-[#59E5A8] mr-2"><BsCurrencyDollar /></span></p>
    <div className="flex items-center justify-between">
    <p className="flex items-center gap-2 font-medium">Rating : {rating}<span className="text-[#59E5A8]"><MdOutlineStarBorderPurple500 /></span></p>
    <p className="font-medium">Customizable : {customization}</p>
    </div>
    <p className="my-3 font-semibold hover:text-[#59E5A8]">{subcategory_Name}</p>
    
    <div className="card-actions ">
      <Link to={`/viewDetails/${_id}`}><button className="btn rounded-tr-none rounded-bl-none w-full text-white border-none bg-[#59e5a8]">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeArtItem;