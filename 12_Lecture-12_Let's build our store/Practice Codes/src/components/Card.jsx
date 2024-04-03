import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Card = (props) => {
    // console.log(props)
    // access context using useContext
    const {loggedInUser} = useContext(UserContext)
    const {resData} = props;
    const name = resData?.info?.name
    const cuisines = resData?.info?.cuisines.join(', ')
    const imageID = resData?.info?.cloudinaryImageId
    const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageID}`
    const starRating = resData?.info?.avgRating
    const deliveryTime = resData?.info?.sla?.deliveryTime
    const price = resData?.info?.costForTwo
// console.log(name);

return(

            <div className='card'>
                    <img className="card-img" src={imageUrl} alt="" />
                    <div className='card-info'>
                        <p>{name}</p>
                        <p>{cuisines}</p>
                        <p>{price}</p>
                        <p>{starRating} ⭐</p>
                        <p>{deliveryTime} mins</p>
                        <p>User: {loggedInUser}</p>
                    </div>
            </div>
)
}
// higher order component
// return ek component

export const withPromotedLabel = (Card) => {
    return (props) => {
        return(
            <div className="label-container ">
                <p>Promoted</p>
                <Card {...props} />
            </div>
        )
    }
}

export default Card