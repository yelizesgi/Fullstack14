// Theme Context

import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({children}) =>{
    const[myTheme, setMyTheme]= useState("ligth")

    return(
        <ThemeContext.Provider value = {{myTheme,setMyTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useThemeContext = () => {
    return useContext(ThemeContext)
}

export default ThemeContextProvider;