import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyCard from "./MyCard";


const MyArtList = () => {
    const {user} = useContext(AuthContext);
    const [myData,setMyData] = useState([]);
    // const [myArt,setMyArt] = useState(myData);
    // console.log(myArt);

    useEffect(()=>{
        fetch(`http://localhost:5000/craftItems/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            
            setMyData(data);
        })
    },[user])

    return (
        <div className="mx-5 md:mx-10 my-5 md:my-10">
            <h2 className="text-center text-2xl md:text-5xl font-bold text-[#59E5A8] mb-10">My Art List</h2>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {
                myData.map((myCard,idx) => <MyCard key={idx} myCard={myCard} myData={myData} setMyData={setMyData}></MyCard>)
              }
           </div>

        </div>
    );
};

export default MyArtList;
