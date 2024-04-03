
import Card from './Card'
// import {API_DATA_LIST} from '../components/../constants'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus'
// import {useState} from 'react'
// import { Link } from 'react-router-dom';
// ismein Card Component hoga
const Body = () => {
   const [restList, setRestList] = useState([]);
   const [filteredRestList, setFilteredRestList] = useState([]);
   const [searchText, setSearchText] = useState("");
   useEffect(()=> {
    fetchData();
}, [])
// if online status is false, return custom error
const onlineStatus = useOnlineStatus()
if(!onlineStatus) {
    return(
        <div className='common-container'>
            <h1>Looks like you're offline!!! Please check your Internet Connection...</h1>
        </div>
    )
}
console.log('Body Rendered.');
//    event handler callback function (passed on onClick state event)
function eventHandler(){
    const filteredList = restList.filter(
        (res) => res?.info?.avgRating > 4.5
)
    setFilteredRestList(filteredList)
    // console.log('First')
    // console.log(filteredList)
}
// if, nothing to show (rest data is not fetched)
console.log(restList);
// console.log("First")
// console.log("Second")

if(restList.length === 0){
    return<Shimmer/>
    
}

    async function fetchData() {
            const url = "https://www.swiggy.com/mapi/homepage/getCards?lat=28.570317&lng=77.3218196";
            const data = await fetch(url)
            const jsonData = await data.json()
            console.log(jsonData);
            // update the restList state variable with the actual data using set
            const restData = jsonData?.data?.success?.cards?.[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
            console.log(restData)
            setRestList(restData);
            setFilteredRestList(restData);
}
// console.log("Third")
    return (
        <div className='card-container'>
             {/* <CardComponent key={ApiDataList?.[0]?.id} resData ={ApiDataList[0]}/>
             <Card key={ApiDataList?.[1]?.id} resData={ApiDataList[2]}/>
             <Card key={ApiDataList?.[2]?.id} resData={ApiDataList[1]} />
             <Card key={ApiDataList?.[3]?.id} resData={ApiDataList[3]}/>
             <Card key={ApiDataList?.[4]?.id} resData={ApiDataList[4]}/>
             <Card key={ApiDataList?.[5]?.id} resData={ApiDataList[5]}/>
             <Card key={ApiDataList?.[6]?.id} resData={ApiDataList[6]}/>
             <Card key={ApiDataList?.[7]?.id} resData={ApiDataList[7]}/>
             <Card key={ApiDataList?.[8]?.id} resData={ApiDataList[8]}/>
             <Card key={ApiDataList?.[9]?.id} resData={ApiDataList[10]}/>
             <Card key={ApiDataList?.[10]?.id} resData={ApiDataList[9]}/>
             <Card key={ApiDataList?.[11]?.id} resData={ApiDataList[11]}/>
             <Card key={ApiDataList?.[12]?.id} resData={ApiDataList[12]}/>
             <Card key={ApiDataList?.[13]?.id} resData={ApiDataList[13]}/>
             <Card key={ApiDataList?.[14]?.id} resData={ApiDataList[14]}/>
             <Card key={ApiDataList?.[15]?.id} resData={ApiDataList[15]}/> */}
             <div className='search-container'>
                <input type="text" id="search" value={searchText} onChange={
                (e) => {
                        setSearchText(e.target.value);
                        console.log(searchText);
                }}/>
                <button onClick= {
                    () => {
                               const filteredList = restList.filter(
                                (restItem) => restItem?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                                )
                               console.log(filteredList)
                              setFilteredRestList(filteredList)
                }
            }
             className='search-btn'>Search</button>
             </div>
       
             <button className="filter-btn" onClick={eventHandler}>Top Restaurants ⭐</button>

             {/* doing the same thing using map (Magical code lines) */}
             {/* {console.log("Second")}
            { console.log(restList)} */}
             {filteredRestList.map(
                (item, index) =>{
                    return(
                <Link className="menu-link" to={`/restaurants/${item?.info?.id}`} key={item?.info?.id}>
                         <Card  resData={item}/>
                </Link>
                    )
                })}
                {/* Ruler Line */}
                <hr className="ruler"/>
             
        </div>

       
    )
}
export default Body;