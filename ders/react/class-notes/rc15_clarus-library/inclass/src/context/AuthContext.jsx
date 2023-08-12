// Auth Context// Theme Context

import { useEffect, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({children}) =>{
    const [user, setUser] = useState(sessionStorage.getItem("user") || false);//user bilgisi varsa onu oku yoksa değeri false çevir
    
    useEffect(()=> {
        sessionStorage.setItem("user", user)
    }, [user])//user güncellendiğinde çalışır
    return(
        <AuthContext.Provider value = {{user,setUser}}>
            {children}
        </AuthContext.Provider>
    );
};


export const useThemeContext = () => {
    return useContext(AuthContext)
}//custum Hook

export default AuthContextProvider;