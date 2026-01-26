import { useContext } from "react";
// import { ThemeContext } from "../App";
import { useThemeContext } from "../App";

const Navbar = ({ setToggleSidebar, toggleSidebar }) => {

  // const data = useContext(ThemeContext);
  // console.log(data);

  const { themeData } = useThemeContext();
  console.log(themeData);



  return (
    <nav className="navbar">
      <div className="max-width">
        <button
          className="sidebar-toggle-btn"
          onClick={() => setToggleSidebar(!toggleSidebar)}
        >
          &#9776;
        </button>
        <span>☯ Project hub</span>
      </div>
    </nav>
  );
};
export default Navbar;
