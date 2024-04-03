import {useState, useEffect} from 'react'
import {MENU_API }from './constants'

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        // fetch api
        fetchMenuData();
    })
    async function fetchMenuData() {
        const url = MENU_API + resId;
        const data = await fetch(url)
        const jsonData = await data.json()
        // set json data to state variable
        setResInfo(jsonData)
    }

    return resInfo;
}

export default useRestaurantMenu