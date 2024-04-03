// Accordion Body

const RestaurantAccordionBody = ({data}) => {
// console.log('Accordion Body', data)

const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data?.info?.imageId}`

return(

        <div className="w-[9/12] flex justify-between gap-x-28 border-b border-[#ffebcd] mb-4 ">
            {/* Item List Data */}
            <div className="w-9/12 flex flex-col items-start mb-4 ">
                <span className="text-green-500 font-extrabold">⊡</span>
                <span className="">{data?.info?.name}</span>
                <span>₹ {data?.info?.price/100 || data?.info?.defaultPrice/100}</span>
            </div>


            {/* Image */}
            <div className="relative w-3/12" >
                   <img className="rounded-lg w-[7rem] mb-4" src={imageUrl} alt="" />
                   <button className="absolute bottom-3.5 left-4 m-1 p-2 rounded-lg text-white bg-black hover:cursor-pointer hover:bg-[#ffebcd] hover:border-black hover:border duration-200 hover:after:content-['+'] hover:after:p-2 hover:after:ml-2 hover:after:text-white-100 hover:text-black">Add</button>
            </div>
        </div>

)

}

export default RestaurantAccordionBody