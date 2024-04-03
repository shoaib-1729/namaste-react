import { useSelector, useDispatch } from "react-redux";
import RestaurantAccordionBody from "./RestaurantAccordionBody";
import {clearCart} from '../utils/cartSlice'

const Cart = () => {
    // dispatch an action
    const dispatch = useDispatch();
    // function to clear cart items
    function handleClearItems(){
        // when the clear cart button is clicked, dispatch 'clearCart' action
        dispatch(clearCart())
    }

    //
    // reading the store (subscribe to the store again)
    const cartItems = useSelector((store) => store.cart.items);
    console.log('Cart Items: ', cartItems);
    return(
        <div>
            {/* heading and button */}
            <div className="w-[15rem] flex flex-col items-center justify-center gap-4 mx-auto">
                    <h1 className='text-center text-3xl font-bold'>Cart</h1>
                    {/* clear cart button */}
                    <button
                        onClick={handleClearItems}
                        className="bg-black text-white p-6 hover:cursor-pointer rounded-lg"
                        >
                        Clear Cart</button>
            </div>
            {/* cart items */}
            <div className="w-6/12 mx-auto p-4">
                {cartItems.map((item, index) => (
                    <RestaurantAccordionBody key={index} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Cart;
