
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const MyCard = ({ myCard }) => {
  // eslint-disable-next-line react/prop-types
  const {_id , item_name, image, price, rating, customization, stockStatus } =
    myCard;

    

    const handleDelete = id =>{
         console.log(id);



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
            

            fetch(`http://localhost:5000/craftItems/${id}`,{
               method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                     Swal.fire({
                title: "Deleted!",
                text: "Your Art has been deleted.",
                icon: "success"
              }); 
                }
            })


            }
          });

    }
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img className="max-h-80 w-full" src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item_name}</h2>
        <p>
          <span>Price :</span> {price}
        </p>
        <p>
          <span>Rating :</span> {rating}
        </p>
        <p>
          <span>Customization :</span> {customization}
        </p>
        <p>
          <span>Stock Status :</span> {stockStatus}
        </p>
        <div className="card-actions ">
          <Link><button className="btn btn-primary">Update</button></Link>
          <button 
          onClick={()=> handleDelete(_id)}
          className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
