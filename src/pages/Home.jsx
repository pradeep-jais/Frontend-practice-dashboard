import { useState } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { projectMenu } from '../projectData';

function Home() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [activeProject, setActiveProject] = useState('01_data_fetch');

  const selectProject = (path) => {
    setActiveProject(path);
  };

  const ActiveProjectComponent = projectMenu.find(
    (project) => project.id === activeProject
  )?.component;

  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <div className="layout">
        <Sidebar
          toggleSidebar={toggleSidebar}
          selectProject={selectProject}
          projectMenu={projectMenu}
        />
        <main className="main-content">
          <h1>Explore my practice project app</h1>
          <hr />
          {ActiveProjectComponent && <ActiveProjectComponent />}
        </main>
      </div>
    </>
  );
}

export default Home;
