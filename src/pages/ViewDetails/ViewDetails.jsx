import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
       const details = useLoaderData();
       const {id} = useParams();
       const detailsArt = details.find(d => d._id == id);
       console.log(detailsArt);  

    return (
        <div>
            <h2>View Details {detailsArt.userEmail} </h2>
        </div>
    );
};

export default ViewDetails;