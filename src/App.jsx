import { useState } from 'react';
import './App.css';
import FetchData from './projects/00_data_fetch';
import BlogCard from './projects/01_blog_card';
import { projectMenu } from './projectData';
import CardUI from './projects/02_card_ui';

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [activeProject, setActiveProject] = useState('00_data_fetch');

  const selectProject = (path) => {
    console.log(path);
    setActiveProject(path);
  };

  return (
    <>
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
      <div className="layout">
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
        <main>
          <h1>Explore my practice project app</h1>
          <hr />
          {/* <FetchData /> */}
          {activeProject === '00_data_fetch' && <FetchData />}
          {activeProject === '01_blog_card' && <BlogCard />}
          {activeProject === '02_card_ui' && <CardUI />}
        </main>
      </div>
    </>
  );
}

export default App;
