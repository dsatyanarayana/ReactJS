import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props)=>{
    const restaurant = props.RestList;
    const {name,area,cuisines,address,avgRating,cloudinaryImageId} = restaurant.data;
    return (
        <div className="res-card">
            <div className="res-img">
                <img alt="res-img" src={CDN_LINK+cloudinaryImageId}/>
            </div>
            <div className="res-info">
                <h4>{name}</h4>
                <p>{cuisines}</p>
                <h4>{avgRating}*</h4>
                <span>{address}</span>
            </div>
        </div>
    )
}
export default RestaurantCard;