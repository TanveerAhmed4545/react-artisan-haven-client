import { useLoaderData } from "react-router-dom";


const AllArtItems = () => {
    const allArts = useLoaderData();
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold py-9">AllArtItems : {allArts.length}</h2>

            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Item Name</th>
        <th>Subcategory Name</th>
        <th>price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        allArts.map((art,idx)=> <tr key={art._id}>
        <th>{idx+1}</th>
        <td>{art.item_name}</td>
        <td>{art.subcategory_Name}</td>
        <td>{art.price}</td>
        <th><button className="btn">View Details</button></th>
      </tr>)
      }
     
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllArtItems;