import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
const Body = () => {
    let listOfRestraunts = [{

        "id": "paradise-secunderabad",
        "name": "Paradise Biryani",
        "cloudinaryImageId": "",
        "locality": "Secunderabad",
        "areaName": "Secunderabad",
        "costForTwo": "₹1400",
        "cuisines": [
            "Biryani",
            "Hyderabadi",
            "Mughlai"
        ],
        "avgRating": 3.1,
        "parentId": "paradise",
        "deliveryTime": "30-35 mins",
        "address": "Sarojini Devi Road, Ramgopalpet, Secunderabad, Hyderabad",
        "isOpen": true

    },
    {

        "id": "KFC",
        "name": "KFC",
        "cloudinaryImageId": "",
        "locality": "Secunderabad",
        "areaName": "Secunderabad",
        "costForTwo": "₹1400",
        "cuisines": [
            "Biryani",
            "Hyderabadi",
            "Mughlai"
        ],
        "avgRating": 4.1,
        "parentId": "paradise",
        "deliveryTime": "30-35 mins",
        "address": "Sarojini Devi Road, Ramgopalpet, Secunderabad, Hyderabad",
        "isOpen": true

    },
    {
        "id": "pista-house-kondapurr",
        "name": "Pista House",
        "cloudinaryImageId": "",
        "locality": "Kondapur",
        "areaName": "Kothaguda",
        "cuisines": [
            "Biryani",
            "Mughlai",
            "Bakery"
        ],
        "address": "Ground Floor, D. No. 2-36, Kothaguda X Roads, beside Apollo Hospital, Kondapur, Hyderabad",
        "avgRating": 4.4,
        "priceRange": "₹200–₹1200",
        "isOpen": true
    }
    ];
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    listOfRestraunts = listOfRestraunts.filter((res) =>
                        res.avgRating > 4
                    );
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