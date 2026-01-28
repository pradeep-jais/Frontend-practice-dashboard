import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const appData = {
        name: "Project hub",
        version: "1.0.0",
        theme,
        setTheme,
    }
    return (
        <GlobalContext.Provider value={appData}>
            {children}
        </GlobalContext.Provider>
    )
}
export default AppContext;