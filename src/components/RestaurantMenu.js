import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU } from "../utils/constants";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import CategoriesList from "./CategoriesList";

const RestaurantMenu = () => {
  const params = useParams();
  const resid = params.resid;
  //console.log(resid);

  //  const [resInfo, setResInfo] = useState(null);
  const resInfo = useRestaurantInfo(resid);
  const [offersInfo, setOffersInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const menu_data = await fetch(RES_MENU + resid);
    const menu_json = await menu_data.json();
    //setResInfo(menu_json?.data?.cards[0]?.card?.card?.info);
    setOffersInfo(
      menu_json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
    // setResMenu(
    //   menu_json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    //     ?.card?.card?.itemCards
    // );
    const categories = menu_json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(cd=>cd.card.card.title!=null);
    setResMenu(categories);
  };
  if (resInfo == null || offersInfo == null || resMenu ==null) {
    return <Shimmer />;
  }

  return (
    <div className="">
      <div className="text-center menu-res-info bg-gray-100">
        <p className="font-bold text-xl">{resInfo.name}</p>
        <div className="text-lg">{resInfo.cuisines}</div>
        <div className="text-sm">
          {resInfo.city} {resInfo.sla.lastMileTravelString}
        </div>
      </div>

      <div className="flex flex-wrap w-6/12 m-auto bg-gray-200">
        {offersInfo.map((off) => (
          <div key={off.info.offerIds[0]} className="bg-gray-100 w-44 p-4 m-4">
            <div>{off.info.couponCode}</div>
            <div>{off.info.header}</div>
          </div>
        ))}
      </div>
      
      <div className="b-4">
      {resMenu.map(category=>
        <CategoriesList itemList = {category.card.card}/>
      )};
      </div>
    </div>
  );
};

export default RestaurantMenu;
