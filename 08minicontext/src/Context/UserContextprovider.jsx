import React from "react";
import UserConntext from "./UserContext";

const UserContextProider = (children) => {
    const [user,setUser] = React.useState(null)
   return(
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
   )
}

export default UserContextProider