import { createContext } from "react"
// create user context
const UserContext = createContext({
    loggedInUser : "Default"
})

export default UserContext