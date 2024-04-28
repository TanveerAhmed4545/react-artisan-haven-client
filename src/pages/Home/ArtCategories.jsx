import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ArtCategories = ({cate}) => {
    // eslint-disable-next-line react/prop-types
    const {image,subcategory_Name} =  cate;
    return (
        <div>
             
             <div className="card  p-5 bg-base-100 rounded-tr-none rounded-bl-none border-[#E3F9ED] border-2 hover:border-none hover:shadow-xl hover:shadow-[#98EDC4] transition duration-300 ease-in-out">
  <div className="relative">
  <figure><img className="h-auto md:h-44 lg:h-52 w-full rounded-tr-none rounded-bl-none rounded-xl" src={image} /></figure>
  
  </div>
  
    <p className="my-3 text-center font-semibold hover:text-[#59E5A8]">{subcategory_Name}</p>
    
    <div >
      <Link to={`/categoriesCard/${subcategory_Name}`}><button className="btn rounded-tr-none rounded-bl-none w-full text-white border-none bg-[#59e5a8]">View All Cards</button></Link>
    </div>
  </div>
</div>
       
    );
};

export default ArtCategories;
