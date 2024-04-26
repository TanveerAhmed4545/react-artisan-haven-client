import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'

const AddCraftItem = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);

    const handleArtItem = event =>{
        event.preventDefault();

        const form = event.target;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const image = form.image.value;
        const userName = user.displayName;
        const userEmail = user.email;

        const newArtItem = {
            item_name,subcategory_Name,short_description,price,rating,customization,processing_time,stockStatus,image,userEmail,userName
        }
        console.log(newArtItem);

        // send data to the server
        fetch('http://localhost:5000/craftItems',{
              method: 'POST',
              headers: {
                'content-type':'application/json'
              },
              body: JSON.stringify(newArtItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Art and craft added successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        

    }

    return (
        <div className="bg-slate-500 p-7 md:p-20">
            <h2 className="text-center text-3xl font-semibold">Add Art Item</h2>
            <form onSubmit={handleArtItem}>
                {/* item and subcategory name */}
                <div className="md:flex gap-5 mb-5 md:my-8">
                <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="item_name" placeholder="Item Name" className="input input-bordered w-full" required/>
                        </label>

                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory_Name" placeholder="Subcategory Name" className="input input-bordered w-full" required/>
                        </label>

                    </div>
                </div>


                {/* short description and price */}
                <div className="md:flex gap-5 mb-5 md:mb-8">
                <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="short_description" placeholder="Short description" className="input input-bordered w-full" required/>
                        </label>

                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" required/>
                        </label>

                    </div>
                </div>
                

                 {/* rating and customization */}
                 <div className="md:flex gap-5 mb-5 md:mb-8">
                <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" required/>
                        </label>

                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="customization" placeholder="Customization" className="input input-bordered w-full" required/>
                        </label>

                    </div>
                </div>

                {/* processing time and stockStatus */}

                <div className="md:flex gap-5 mb-5 md:mb-8">
                <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processing_time" placeholder="Processing Time" className="input input-bordered w-full" required/>
                        </label>

                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="stockStatus" placeholder="Stock Status" className="input input-bordered w-full" required/>
                        </label>

                    </div>
                </div>

                <div className="mb-5 md:mb-10">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image Url" className="input input-bordered w-full" required/>
                        </label>

                    </div>
                    
                </div>
                  
                <input type="submit" className="btn btn-block bg-slate-800 text-white border-none" value='Add Art'/>


            </form>

        </div>
    );
};

export default AddCraftItem;