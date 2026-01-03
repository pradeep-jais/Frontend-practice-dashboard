const Sidebar = ({ toggleSidebar, selectProject, projectMenu }) => {
  return (
    <aside className={`sidebar ${toggleSidebar ? '' : 'hide'}`}>
      <h3>projects</h3>
      <ul>
        {projectMenu.map((project) => {
          const { id, name } = project;
          return (
            <li key={id} onClick={() => selectProject(id)}>
              {name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
