import { createContext, useContext, useReducer, useState } from "react";

const GlobalContext = createContext();

// custom hook
export const useGlobalContext = () => useContext(GlobalContext);

// Reducer + Context = Global State Management(like Redux)
// Reducer - manages complex state logic
// Context - provides a way to pass data through the component tree

const appData = {
    appName: "Project hub",
    version: "1.0.0",
    user: null,
    isLoading: false,
    error: null,
    theme: "dark",
}

const reducer = (state, action) => {
    if (action.type === 'CHANGE_THEME') {
        return {
            ...state,
            theme: action.payload.theme
        }
    }
    return state;
}

const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, appData);

    return (
        <GlobalContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default AppContext;