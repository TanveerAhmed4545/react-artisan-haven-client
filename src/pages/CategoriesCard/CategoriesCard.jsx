import { useLoaderData, useParams } from "react-router-dom";
import SubCard from "./SubCard";

const CategoriesCard = () => {
    const detailsAll = useLoaderData();
       const {id} = useParams();
       const detailsAllArt = detailsAll.filter(d => d.subcategory_Name == id);
       console.log(detailsAllArt);
    return (
        <div className="mx-5 md:mx-10 mb-5 mt-5 md:mt-10">
            <h2 className="text-center text-2xl md:text-5xl text-[#59E5A8] font-bold  mb-5">All Card</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {
                detailsAllArt.map(allArt => <SubCard key={allArt._id} allArt={allArt}></SubCard> )
              }
            </div>
        </div>
    );
};

export default CategoriesCard;