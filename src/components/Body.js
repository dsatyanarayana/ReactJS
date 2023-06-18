import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import {useState} from "react";

const topRatedRestaurants = ()=>{
    //console.log(filterRestaurants);
}
const Body = ()=>{
    const [listOfRestaurants,setrestaurantList] = useState(restaurantList);

    return (
        <div className="body">
            <div className="body-search">
                <input type="button" value="topRatedRestaurants" onClick={()=>{
                        console.log("topRatedRestaurants");
                        filterRestaurants = listOfRestaurants.filter((res)=>res.data.avgRating>=4)
                        setrestaurantList(filterRestaurants);                    
                }}/>
            </div>
            <div className="body-res-container">
			{listOfRestaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.id} RestList={restaurant}/>
			))}
            </div>
        </div>
    );
}
export default Body;