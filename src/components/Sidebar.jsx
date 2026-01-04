const Sidebar = ({
  toggleSidebar,
  selectProject,
  projectMenu,
  activeProject,
}) => {
  return (
    <aside className={`sidebar ${toggleSidebar ? '' : 'hide'}`}>
      <h3>projects</h3>
      <ul>
        {projectMenu.map((project) => {
          const { id, name } = project;
          return (
            <li key={id}>
              <button
                className={`project-menu-btn ${
                  activeProject === id ? 'active' : ''
                }`}
                onClick={() => selectProject(id)}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
