import { projectMenu } from '../projectData';

const Sidebar = ({ toggleSidebar, selectProject }) => {
  return (
    <aside className={`sidebar ${toggleSidebar ? '' : 'hide'}`}>
      <h3>projects</h3>
      <ul>
        {projectMenu.map((project) => {
          const { id, name, path } = project;
          return (
            <li key={id} onClick={() => selectProject(path)}>
              {name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
