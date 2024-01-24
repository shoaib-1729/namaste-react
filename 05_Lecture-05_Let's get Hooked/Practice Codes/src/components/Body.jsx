
import Card from './Card'
import {API_DATA_LIST} from '../components/../constants'
import {useState} from 'react'
// ismei Card Component hoga
const Body = () => {
    // let filteredData = [];
    let restList = API_DATA_LIST;
    let setRestList;
    [restList, setRestList] = useState(restList);
    return(
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
       
             <button className="filter-btn" onClick={() => {
           const  filteredList = restList.filter(
                     (res) => res?.info?.avgRating > 4.5
       )
       setRestList(filteredList)
               console.log(filteredList)
   }
}
                
             >Top Restaurants ⭐</button>

             {/* doing the same thing using map (Magical code lines) */}
             {restList.map(
                (item, index) =>{
                    return(
                <Card key={item?.id} resData={item}/>
                    )
                })}
             
        </div>

       
    )
}
export default Body;