const Navbar = ({ setToggleSidebar, toggleSidebar }) => {
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
