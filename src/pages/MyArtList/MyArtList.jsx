import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyCard from "./MyCard";


const MyArtList = () => {
    const {user} = useContext(AuthContext);
    const [myData,setMyData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/craftItems/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            
            setMyData(data);
        })
    },[user])

    return (
        <div className="mx-5 md:mx-10">
            <h2 className="text-center font-semibold text-3xl my-10">MyArtList</h2>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {
                myData.map((myCard,idx) => <MyCard key={idx} myCard={myCard}></MyCard>)
              }
           </div>

        </div>
    );
};

export default MyArtList;
