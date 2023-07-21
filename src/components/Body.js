import RestaurantCard from "./RestaurantCard";
//  import { restaurantList } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  useEffect(() => {
    fetchRestaurants();
  }, []);
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setRestaurantList] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.9890648&lng=82.2474648&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Optional chaining
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-0">
      <div className="m-4 p-4 flex">
        <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-72 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search Restaurant..."
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-gray-500 text-white px-3 py-1  rounded-lg hover:bg-gray-600"
          onClick={() => {
            const filterRestaurants = listOfRestaurants.filter((res) =>
              res.data.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterRestaurants(filterRestaurants);
            console.log(searchText);
          }}
        >
          Search
        </button>
        <button 
          className="bg-gray-500 text-white px-3 py-1  rounded-lg hover:bg-gray-600  ml-2"        
        onClick={()=>{
            setFilterRestaurants(listOfRestaurants);
        }}>
            Clear
        </button>
        <input
          type="button"
          className="bg-gray-500 text-white px-3 py-1  rounded-lg hover:bg-gray-600 ml-2"
          value="Top Rated Restaurant"
          onClick={() => {
            const filterRestaurants = listOfRestaurants.filter(
              (res) => res.data.avgRating >= 4
            );
            setFilterRestaurants(filterRestaurants);
          }}
        />
      </div>
      <div className="flex flex-wrap">
        {filterRestaurants.map((restaurant,i) => (
          <Link to={"/restaurent-menu/"+restaurant.data.id} key={restaurant.data.id}><RestaurantCard  RestList={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
