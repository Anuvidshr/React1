import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

//usercontextprovider ek method h jo user ki state ko manage karta h
//isko export kiya gya h taki isse baaki components me use kiya ja sake