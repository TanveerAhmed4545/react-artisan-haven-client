
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const MyCard = ({ myCard ,setMyData,myData }) => {
  // eslint-disable-next-line react/prop-types
  const {_id , item_name, image, price, rating, customization, stockStatus } =
    myCard;

    

    const handleDelete = id =>{
        //  console.log(id);



         Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            

            fetch(`https://react-artisan-haven-server.vercel.app/craftItems/${id}`,{
               method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.deletedCount > 0){
                     Swal.fire({
                title: "Deleted!",
                text: "Your Art has been deleted.",
                icon: "success"
              }); 
              // eslint-disable-next-line react/prop-types
              const remaining = myData.filter(art => art._id !== _id);
              setMyData(remaining);
                }
            })


            }
          });

    }
  return (
    <div className="card card-compact  bg-[#E3F9ED] hover:shadow-xl hover:shadow-[#59E5A8]">
      <figure>
        <img className="max-h-80 w-full" src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item_name}</h2>
        <p className="flex  items-center gap-3">
          <span className="font-medium">Price :</span> {price} <BsCurrencyDollar className="text-[#59E5A8]"/>
        </p>
        <p className="flex  items-center gap-3">
          <span className="font-medium">Rating :</span> {rating} <span className="text-[#59E5A8]"><MdOutlineStarBorderPurple500 /></span>
        </p>
        <p>
          <span className="font-medium">Customization :</span> {customization}
        </p>
        <p>
          <span className="font-medium">Stock Status :</span> {stockStatus}
        </p>
        <div className="card-actions ">
          <Link to={`/myCardUpdate/${_id}`}><button className="btn border-none text-white bg-[#59E5A8]">Update</button></Link>
          <button 
          onClick={()=> handleDelete(_id)}
          className="btn border-none text-white bg-[#59E5A8]">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
