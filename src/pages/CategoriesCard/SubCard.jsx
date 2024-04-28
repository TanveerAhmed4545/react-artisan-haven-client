import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const SubCard = ({allArt}) => {
    // eslint-disable-next-line react/prop-types
    const {_id,item_name,subcategory_Name,short_description,price,rating,image} = allArt
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={image} /></figure>
  <div className="card-body">
    <h2 className="card-title">{item_name}</h2>
    <p>{short_description}</p>
    <div className="flex">
    <p>Price : {price}</p>
    <p>Rating : {rating}</p>
    </div>
    <p className="">Subcategory Name : {subcategory_Name}</p>
    <div >
    <Link to={`/viewDetails/${_id}`}><button className="btn  w-full text-white border-none bg-[#59e5a8]">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default SubCard;