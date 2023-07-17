import { useState,useEffect } from "react";
import { RES_MENU } from "./constants";

const useRestaurantInfo = (resId)=>{
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchRestaurantInfo();
    },[]);
    const fetchRestaurantInfo =  async()=>{
        const data = await fetch(RES_MENU+resId);
        const json = await data.json();
        console.log(json.data);
        setResInfo(json?.data?.cards[0]?.card?.card?.info);
    }
    return resInfo;
}

export default useRestaurantInfo;