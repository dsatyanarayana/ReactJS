import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { RES_MENU } from "../utils/constants";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantMenu = () => {
    const params = useParams();
    const resid = params.resid;
    console.log(resid);
    
//  const [resInfo, setResInfo] = useState(null);
const resInfo = useRestaurantInfo(resid);
  const [offersInfo, setOffersInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const menu_data = await fetch(
      RES_MENU+resid
    );
    const menu_json = await menu_data.json();
    //setResInfo(menu_json?.data?.cards[0]?.card?.card?.info);
    setOffersInfo(
      menu_json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
    setResMenu(menu_json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

  };
  if (resInfo == null) {
    return <Shimmer />;
  }

  return (
    <div className="menu-container">
      <div className="menu-res-info">
        <p>{resInfo.name}</p>
        <div>{resInfo.cuisines}</div>
        <div>
          {resInfo.city} {resInfo.sla.lastMileTravelString}
        </div>
      </div>

      <div className="menu-res-offers">
        {offersInfo.map((offer) => (
          <div key={offer.info.id} className="menu-res-offer">
            <p>{offer.info.header}</p>
            <p>
              {offer.info.couponCode} | {offer.info.description}
            </p>
          </div>
        ))}
      </div>

      <div className="res-menu">
        {console.log(resMenu.length)}
        {resMenu.map((item,i) => (
          <div key={i} className="res-item">
            <p>{item?.card?.info?.name}</p>
            <p>&#8377;{item?.card?.info?.price/100}</p>
            <div>{item?.card?.info?.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
