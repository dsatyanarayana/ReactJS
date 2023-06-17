import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
const Body = ()=>{
    return (
        <div className="body">
            <div className="body-search">
                Search...
            </div>
            <div className="body-res-container">
			{restaurantList.data.cards.map((restaurant)=>(
                <RestaurantCard RestList={restaurant}/>
			))}
            </div>
        </div>
    );
}
export default Body;