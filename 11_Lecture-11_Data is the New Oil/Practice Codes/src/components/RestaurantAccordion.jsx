import RestaurantAccordionBody from './RestaurantAccordionBody'

const RestaurantAccordion = ({ data, setShowAccordion, showItemList }) => {
// console.log('Accordion Data: ', data)
// console.log('Restaurant Accordion called.')
const arrowIcon = "^"
const handleClick = () => {
        setShowAccordion()
}
return (
<div className=" text-white flex flex-col items-center mb-4 w-[50rem] max-w-[100rem] mx-auto">
    {/*Accordion Header */}
    <div onClick={handleClick} className="w-full flex justify-between items-center m-4 p-3 gap-32 border-[#FFEBCD] border border-b-2 rounded-xl shadow-lg shadow-[#FFEBCD]-500/40 hover: cursor-pointer">
        <span>{data?.title} ({data?.itemCards.length}) </span>
        <button onClick={
            (e) => {
            e.currentTarget.style.transform = 'rotate(180deg)'
            e.currentTarget.style.transition = 'all 0.5s ease-in-out'
        }
    }
        className=' text-lg font-medium rotate-[180deg]'>{arrowIcon}
        </button>
    </div>

    {/* Accordion Body */}
    <div className="w-full mx-auto ">
        {
            data?.itemCards?.map( (item) => {
                    return showItemList && <RestaurantAccordionBody data={item?.card} />
            })
        }
    </div>
</div>
)

}

export default RestaurantAccordion