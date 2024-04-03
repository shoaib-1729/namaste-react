import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
const [resInfo, setResInfo] = useState(null);
useEffect(() => {
    fetchMenuData();
}, [])

const {resId} = useParams();
async function fetchMenuData(){
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.547875&lng=77.3058772&restaurantId=${resId}`
    const menuData = await fetch(url)
    const jsonMenuData = await menuData.json()
    // set the json data fetched from API to the state variable
    setResInfo(jsonMenuData);
    console.log(resInfo);
}
if(!resInfo){
    return <Shimmer />;
}
const {name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId} = resInfo?.data?.cards?.[0]?.card?.card?.info;
const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`
const {itemCards} = resInfo?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card;
console.log(itemCards);
    return(
<div className="restInfo-container">
    <img src={imageUrl} alt="" />
    <h1>{name}</h1>
    <div className="rating-container">
        <h2>{costForTwoMessage}</h2>
        <h3>{avgRating}⭐</h3>
    </div>
    <p>{cuisines.join(', ')}</p>
    <h3>Menu:</h3>
    <div className="restMenu-container">
        <ul>
            {itemCards.map((item) => (
                <li key={item?.info?.id}>
                    {item?.card?.info?.name} - {"Rs."} {item?.card?.info?.price/100 || item?.card?.info?.regularPrice/100}
                </li>
            ))}
         </ul>
    </div>
</div>
    )
            }
export default RestaurantMenu