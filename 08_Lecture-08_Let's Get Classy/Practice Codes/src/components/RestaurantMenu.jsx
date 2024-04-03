import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

const {resId} = useParams();
const resInfo = useRestaurantMenu(resId)

// if resInfo is null, return Shimmer
if(!resInfo){
    return <Shimmer />
}


const {name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId} = resInfo?.data?.cards?.[0]?.card?.card?.info;
const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`
const {itemCards} = resInfo?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card;
console.log(itemCards);



    return (
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