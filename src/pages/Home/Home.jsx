import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HomeArtItem from "./HomeArtItem";
import MakeVision from "./MakeVision";
import OurService from "./OurService";
import ArtCategories from "./ArtCategories";
import { useEffect, useState } from "react";


const Home = () => {
    const homeArts = useLoaderData();
    // console.log(homeArts);
    const [category,setCategory] = useState([]);

    useEffect(()=>{
        fetch('https://react-artisan-haven-server.vercel.app/artItems')
          .then(res => res.json())
             .then(data => {
                //  console.log(data);
                 setCategory(data);
             });
    },[])

    return (
        <div>
            <Banner></Banner>
            <h2></h2>
            <div className="my-5 lg:my-10">
            <div className="text-center py-8 ">
             <h2 className=" text-2xl lg:text-4xl font-extrabold">
              Discover Latest Painting and Drawing
             </h2>
              <p className=" pt-6 w-full mx-auto lg:w-9/12">
              Explore the latest in painting and drawing  on our platform.{" "}
               </p>
      </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 px-6">
                         {
                            homeArts.slice(0, 6).map(arts => <HomeArtItem key={arts._id} arts={arts}></HomeArtItem>)
                         }
                </div>

            </div>
                  
                  <div className="my-5 lg:my-10">
                  <div className="text-center py-8 ">
             <h2 className=" text-2xl lg:text-4xl font-extrabold">
              Discover Our Categories
             </h2>
              <p className=" pt-6 w-full mx-auto lg:w-9/12">
              Explore the latest Categories in painting and drawing  on our platform.{" "}
               </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 px-6">
      {
                            category.map(cate => <ArtCategories key={cate._id} cate={cate}></ArtCategories>)
                         }
      </div>
                  </div>
                
                
                <MakeVision></MakeVision>
                <OurService></OurService>
        </div>
    );
};

export default Home;