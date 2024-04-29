import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddCraftItem = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const handleArtItem = (event) => {
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
      item_name,
      subcategory_Name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
      image,
      userEmail,
      userName,
    };
    // console.log(newArtItem);

    // send data to the server
    fetch("https://react-artisan-haven-server.vercel.app/craftItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newArtItem),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Art and craft added successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
          // Reset the form after successful submission
          form.reset();
        } else {
          Swal.fire({
            title: "Error!",
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#E3F9ED] p-7 md:p-20">
        <Helmet>
                <title>Artisan Haven || Add Craft Items</title>
            </Helmet>
      <h2 className="text-center text-2xl md:text-5xl font-bold text-[#59E5A8]">
        Add Art Item
      </h2>
      <form onSubmit={handleArtItem}>
        {/* item and subcategory name */}
        <div className="md:flex gap-5 mb-5 md:my-8">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Item Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="item_name"
                placeholder="Item Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2">
            {/* <label className="label">
                            <span className="label-text font-semibold">Subcategory Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory_Name" placeholder="Subcategory Name" className="input input-bordered w-full" required/>
                        </label> */}
            <label className="label">
              <span className="label-text font-semibold">Subcategory Name</span>
            </label>
            <label className="input-group">
              <select
                name="subcategory_Name"
                id="subcategory_Name"
                className="select select-bordered w-full "
                required
              >
                <option disabled selected>
                Select a subcategory
                </option>
                <option>Landscape Painting</option>
                <option>Portrait Drawing</option>
                <option>Watercolour Painting</option>
                <option>Oil Painting</option>
                <option>Charcoal Sketching</option>
                <option>Cartoon Drawing</option>
              </select>
            </label>
          </div>
        </div>

        {/* short description and price */}
        <div className="md:flex gap-5 mb-5 md:mb-8">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">
                Short description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="short_description"
                placeholder="Short description"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>

        {/* rating and customization */}
        <div className="md:flex gap-5 mb-5 md:mb-8">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Customization</span>
            </label>
            {/* <label className="input-group">
              <input
                type="text"
                name="customization"
                placeholder="Customization"
                className="input input-bordered w-full"
                required
              />
            </label> */}
            <label className="input-group">
              <select
                name="customization"
                id="customization"
                className="select select-bordered w-full "
                required
              >
                <option disabled selected>
                Select a customization
                </option>
                <option>Yes</option>
                <option>No</option>
                
              </select>
            </label>
          </div>
        </div>

        {/* processing time and stockStatus */}

        <div className="md:flex gap-5 mb-5 md:mb-8">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Processing Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="processing_time"
                placeholder="Processing Time"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Stock Status</span>
            </label>
            {/* <label className="input-group">
              <input
                type="text"
                name="stockStatus"
                placeholder="Stock Status"
                className="input input-bordered w-full"
                required
              />
            </label> */}
             <label className="input-group">
              <select
                name="stockStatus"
                id="stockStatus"
                className="select select-bordered w-full "
                required
              >
                <option disabled selected>
                Select a StockStatus
                </option>
                <option>In stock</option>
                <option>Made to Order</option>
                
              </select>
            </label>
          </div>
        </div>

        <div className="mb-5 md:mb-10">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Image Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Image Url"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-block bg-[#59E5A8] text-white border-none"
          value="Add Art"
        />
      </form>
    </div>
  );
};

export default AddCraftItem;
