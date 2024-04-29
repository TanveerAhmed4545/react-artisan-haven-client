import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyCard from "./MyCard";


const MyArtList = () => {
    const {user} = useContext(AuthContext);
    const [myData,setMyData] = useState([]);
    const [filter, setFilter] = useState('all'); 
    // const [filterData,setFilterData] = useState([]);
    
    // console.log(filterData);

    // const [myArt,setMyArt] = useState(myData);
    // console.log(myArt);

    // console.log(myData);
    // const customizedItems = myData.filter(item => item.customization.toLowerCase() === 'yes');
    // console.log(customizedItems);

    // const fetchMyData = () => {
    //     fetch(`http://localhost:5000/craftItems/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setMyData(data);
    //         });
    // };

    // useEffect(() => {
    //     fetchMyData();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [user]);

    // const handleFilter = filter =>{
    //     // console.log(filter);
    //     if(filter === 'all'){

    //         // setMyData(myData);
    //         fetchMyData(); 
    //         }else  if(filter === 'yes'){
            
    //         const customizedItemsYes = myData.filter(item => item.customization.toLowerCase() === 'yes');
    //         // console.log(customizedItemsYes); 
    //          setMyData(customizedItemsYes);
             
             
    //     }else if(filter === 'no'){
            
    //         const customizedItemsNo = myData.filter(item => item.customization.toLowerCase() === 'no');
    //         console.log(customizedItemsNo); 
    //          setMyData(customizedItemsNo);
             
             
    //     }
        
    // }

        

       
    

    useEffect(() => {
        fetch(`https://react-artisan-haven-server.vercel.app/craftItems/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                let filteredData = data;
                if (filter === 'yes') {
                    filteredData = data.filter(item => item.customization.toLowerCase() === 'yes');
                } else if (filter === 'no') {
                    filteredData = data.filter(item => item.customization.toLowerCase() === 'no');
                }
                setMyData(filteredData);
            })
            .catch(error => {
                console.error('Error fetching or filtering data:', error);
            });
    }, [user, filter]); 

    //  handle filter changes
    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter);
    };







    return (
        <div className="mx-5 md:mx-10 mb-5 mt-5 md:mt-10 ">
            <h2 className="text-center text-2xl md:text-5xl text-[#59E5A8] font-bold  mb-5">My Art List</h2>
            <div className="pb-4 text-center">
            <details className="dropdown">
         <summary className="m-1 btn bg-[#59E5A8] text-white">Filter</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {/* <li onClick={()=>handleFilter('all')}><a>All</a></li>
        <li onClick={()=>handleFilter('yes')}><a>Yes</a></li>
        <li onClick={()=>handleFilter('no')}><a>No</a></li> */}

        <li onClick={()=>handleFilterChange('all')}><a>All</a></li>
        <li onClick={()=>handleFilterChange('yes')}><a>Yes</a></li>
        <li onClick={()=>handleFilterChange('no')}><a>No</a></li>
        
        </ul>
        </details>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {
                myData.map((myCard,idx) => <MyCard key={idx} myCard={myCard} myData={myData} setMyData={setMyData}></MyCard>)
              }
           </div>

        </div>
    );
};

export default MyArtList;
