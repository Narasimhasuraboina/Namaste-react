import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {

    const { name, areaName, cuisines, avgRating, costForTwo, deliveryTime } = props.resdata;
    console.log(props);
    return (
        <div className="res-card" style={{ backgroundColor: "yellow" }}>
            <img className="res-logo" src={CDN_URL} alt="Res image" />
            <h3>
                {name}
            </h3>

            <h4>{areaName}</h4>
            <h6> {cuisines.join(' ,')}</h6>
            <h6>{avgRating}</h6>
            <h6>{costForTwo}</h6>
            <h6>{
                deliveryTime}</h6>
        </div>
    );
}
export default RestaurantCard;