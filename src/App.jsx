import { createContext, useContext } from 'react';
import './App.css';
import Home from './pages/Home';

const ThemeContext = createContext();

export const useThemeContext = () => {

  const themeData = useContext(ThemeContext);
  return { themeData };
}

const data = { theme: 'dark' };

// console.log(ThemeContext);


function App() {
  return (
    <>
      <ThemeContext.Provider value={data}>
        <Home />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
