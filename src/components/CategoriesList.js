import { useState } from "react";
import ItemList from "./ItemsList";

const CategoriesList = (props)=>{
    const {title,itemCards} = props.itemList;
    console.log(props);
    const [button,SetButton] = useState(false);
    openClose = ()=>{
        console.log("Clicked");
        SetButton(!button);
        console.log(button);
    }
    return(
        <div className="w-6/12 m-auto my-2">
            <div>
            {itemCards?.length && <div className="flex justify-between bg-gray-200 p-4" onClick={openClose}>
                <div>{title} ({itemCards?.length})</div>
                <div>{button?"🔺":"🔻"}</div>
            </div>}
            {button && itemCards.map((item)=><ItemList item={item}/>)}
            </div>  
        </div>
    )
}
export default CategoriesList;