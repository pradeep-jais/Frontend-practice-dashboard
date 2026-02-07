import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "./firebase";

const GlobalContext = createContext();

// custom hook
export const useGlobalContext = () => useContext(GlobalContext);

const authProvider = new GoogleAuthProvider();

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
};

const reducer = (state, action) => {
  if (action.type === "CHANGE_THEME") {
    return {
      ...state,
      theme: action.payload.theme,
    };
  }
  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  return state;
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, appData);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "SET_USER", payload: { user: user || null } });
    });

    return () => unsubscribe();
  }, []);

  // Auth Actions
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, authProvider);
      console.log("Logged in successfully: ", result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{ ...state, dispatch, handleGoogleSignIn, handleLogout }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
