import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext()

const DarkModeContextProvider = ({children}) => {
    const [IsDarkMode, SetIsDarkMode] = useState(() => JSON.parse(localStorage.getItem('theme')) || false)

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(IsDarkMode))
    }, [IsDarkMode])

    return (
        <DarkModeContext.Provider value={{IsDarkMode, SetIsDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkMode = () => useContext(DarkModeContext);
export default DarkModeContextProvider;