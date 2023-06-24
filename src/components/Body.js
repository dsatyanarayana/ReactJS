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
    <div className="body">
      <div className="body-search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
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
        <button onClick={()=>{
            setFilterRestaurants(listOfRestaurants);
        }}>
            Clear
        </button>
        <input
          type="button"
          value="Top Rated Restaurant"
          onClick={() => {
            const filterRestaurants = listOfRestaurants.filter(
              (res) => res.data.avgRating >= 4
            );
            setFilterRestaurants(filterRestaurants);
          }}
        />
      </div>
      <div className="body-res-container">
        {filterRestaurants.map((restaurant,i) => (
          <Link to={"/restaurent-menu/"+restaurant.data.id} key={restaurant.data.id}><RestaurantCard  RestList={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
