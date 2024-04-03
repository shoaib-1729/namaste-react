import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true)

    // online status should be executed only once (this can be done via useEffect with empty dependency array)
    useEffect(() => {
            //  if  offline, set online status to false
            window.addEventListener('offline', () => {
                setOnlineStatus(false)
            })

            // if online set online status to true
            window.addEventListener('online', () => {
                setOnlineStatus(true);
            })    }, [])
    // return online status (a boolean value)
    return onlineStatus;
}

export default useOnlineStatus;