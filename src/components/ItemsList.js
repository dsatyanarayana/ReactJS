//import { RES_MENU_LOGO_URL } from "../utils/constants";

const ItemList = (props)=>{
    console.log(props);
    const {name,imageId,price,description,defaultPrice} = props.item.card.info;
    return(
        <div>
            <div className="bg-gray-100 border-b-2 py-5 px-4 flex">
                <div className="w-9/12">
                <div className="font-bold">{name}</div>
                <div>₹{price?price/100:defaultPrice/100}</div>
                <div className="text-sm font-light text-gray-400">{description}</div>
                </div> 
                <div className="w-3/12">
                {imageId &&<button className="border bg-gray-50 text-black absolute ">Add +</button>}
                    {imageId && <img className="w-44" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+imageId} />}
                </div>
            </div>
        </div>
    )
}
export default ItemList;