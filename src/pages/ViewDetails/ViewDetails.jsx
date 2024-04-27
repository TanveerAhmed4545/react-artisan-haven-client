import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
       const details = useLoaderData();
       const {id} = useParams();
       const detailsArt = details.find(d => d._id == id);
       console.log(detailsArt);  
       const { item_name,subcategory_Name,short_description,price,rating,customization,processing_time,stockStatus,image} = detailsArt;

    return (
        <div className="card    hover:shadow-xl hover:shadow-[#E3F9ED]   my-5 lg:my-10 mx-5">
            
  <div className="">
  <figure><img className="rounded-2xl lg:h-screen lg:w-full" src={image}/></figure>
  </div>
  <div className="p-5 lg:p-10 space-y-5 ">
    <h2 className="font-bold text-xl md:text-2xl lg:text-4xl text-[#59E5A8]">{item_name}</h2>
    <p className="text-xl"><span className="font-semibold ">Subcategory Name : </span> <span className="text-blue-gray-600">{subcategory_Name}</span></p>
    <p className="text-xl"><span className="font-semibold ">Price :</span> <span className="text-blue-gray-600">{price}</span></p>
    <p className="text-xl"><span className="font-semibold ">Stock Status :</span> <span className="text-blue-gray-600">{stockStatus}</span></p>
    
    <p className="text-xl"><span className="font-semibold ">Short Description : </span>  <span className="text-blue-gray-600">{short_description}</span></p>
    <p className="text-xl"><span className="font-semibold ">Rating : </span> <span className="text-blue-gray-600">{rating}</span> <span className="text-blue-gray-600">Star</span></p>
    <p className="text-xl"><span className="font-semibold ">Customization : </span> <span className="text-blue-gray-600">{customization}</span> </p>
    <p className="text-xl"><span className="font-semibold ">Processing Time : </span> <span className="text-blue-gray-600">{processing_time}</span> </p>
    
    
  </div>
</div>
    );
};

export default ViewDetails;