import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantAccordion from "./RestaurantAccordion"

const RestaurantMenu = () => {

console.log('Restaurant Menu Called.')

const {resId} = useParams();
const resInfo =  useRestaurantMenu(resId)

// state for index, which is passed in to the Restaurant Category (child of Restaurant Menu) as prop, to control the display of accordion body of the child i.e. Restaurant Categories
const [showAccordionWithIndex, setShowAccordionWithIndex] = useState(null)

// if resInfo is null, return Shimmer
if(!resInfo){
    return <Shimmer />
}
const {name, cuisines, cloudinaryImageId} = resInfo?.data?.cards?.[0]?.card?.card?.info;
const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`
const itemCards = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;
// console.log(itemCards);
// console.log('Menu Categories :',resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

// filtering out item categories from Res Menu Api Data
const categories = resInfo?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
.filter(
    (category) => (category?.card?.card?.['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
)

// console.log('Categories Length : ', categories.length);

    return (
        <div className="font-bold text-center">
            <h1 className=" mb-4 text-2xl">{name}</h1>
            <p className=" mb-4 text-lg">{cuisines.join(', ')}</p>
                    {
                    categories.map( (category, index) => {
                        return(
                            // controlled component (since, its state is controlled by the parent i.e. Restaurant Menu, it does not have to manage it own state (which is the case of uncontrolled components) , it is managed by its Parent, in
                            <RestaurantAccordion
                                key={category?.card?.card?.itemCards?.[0]?.card?.info?.id}
                                data={category?.card?.card}
                                // handle the accordion display via click
                                setShowAccordion={() => setShowAccordionWithIndex(index)}
                                // setting which accordion to show, with the help of state based on index of the accordion (agar next code line nahi likhege to click karne se koi affect nahi hoga, hard-code kar diya hai basically)
                                showItemList={index === showAccordionWithIndex ? true: false}
                            />
                                )
                        })
                }

        </div>
    )
            }
export default RestaurantMenu