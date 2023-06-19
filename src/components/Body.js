import RestaurantCard from "./RestaurantCard";
//  import { restaurantList } from "../utils/mockData";
import Shimmer from "./Shimmer";
import {useEffect, useState} from "react";

const topRatedRestaurants = ()=>{
    //console.log(filterRestaurants);
}


const Body = ()=>{
    useEffect(()=>{
        fetchRestaurants();
    },[])
    const [listOfRestaurants,setrestaurantList] = useState([]);
        const fetchRestaurants = async()=>{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //Optional chaining
        setrestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    }
    
    if(listOfRestaurants.length===0){
        return <Shimmer/>
    }

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