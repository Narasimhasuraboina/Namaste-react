import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    // let listOfRestraunts = [{

    //    
    // }
    // ];
    const [listOfRestraunts, setListOfRestraunts] = useState(resObj);


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {

                    const filtered = listOfRestraunts.filter((res) =>
                        res.avgRating > 3.8
                    );
                    setListOfRestraunts(filtered);
                    console.log(listOfRestraunts);
                }}

                >
                    Top rated restraunts
                </button>


            </div>
            <div className="res-container ">


                {
                    listOfRestraunts.map(rest => {
                        return <RestaurantCard key={rest.id} resdata={rest} />
                    })
                }


            </div>
        </div>
    );
}
export default Body;