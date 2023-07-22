import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props)=>{
    const restaurant = props.RestList;
    const {name,area,cuisines,address,avgRating,cloudinaryImageId} = restaurant.data;
    return (
        <div className="w-64 px-5 m-1 bg-gray-50 hover:bg-gray-100 rounded-lg">
            <div className="py-4">
                <img className="rounded-lg" alt="" src={CDN_LINK+cloudinaryImageId}/>
            </div>
            <div className="res-info">
                <h4 className="font-bold">{name}</h4>
                <p>{cuisines}</p>
                <span className="font-bold">{avgRating}*</span>
            </div>
        </div>
    )
}


export const RestaurantCardPromoted = (RestaurantCard)=>{
    return(props)=>{
        return(
         <div>
            <label className="absolute bg-black text-white mt-3 ">PROMOTED</label>
            <RestaurantCard {...props}/>
         </div>   
        );
    }
}
export default RestaurantCard;