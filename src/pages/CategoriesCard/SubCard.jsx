import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const SubCard = ({allArt}) => {
    // eslint-disable-next-line react/prop-types
    const {_id,item_name,subcategory_Name,short_description,price,rating,image} = allArt
    return (
        <div>
            <div className="card card-compact h-auto md:min-h-[570px]  bg-base-100 shadow-xl">
  <figure><img className="max-h-80 w-full" src={image} /></figure>
  <div className="card-body">
    <h2 className="card-title">{item_name}</h2>
    <p><span className="font-semibold">Description : </span> {short_description}</p>
    <div className="flex">
    <p className="font-semibold flex items-center gap-2">Price : {price} <BsCurrencyDollar className="text-[#59E5A8]"/></p>
    <p className="font-semibold flex items-center gap-2">Rating : {rating} <span className="text-[#59E5A8]"><MdOutlineStarBorderPurple500 /></span></p>
    </div>
    <p className="font-semibold">Subcategory Name : {subcategory_Name}</p>
    <div >
    <Link to={`/viewDetails/${_id}`}><button className="btn  w-full text-white border-none bg-[#59e5a8]">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default SubCard;