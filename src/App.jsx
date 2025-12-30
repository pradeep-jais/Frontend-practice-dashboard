import { useState } from 'react';
import './App.css';
import { projectMenu } from './projectData';
import FetchData from './projects/01_data_fetch';
import BlogCard from './projects/02_blog_card';
import CardUI from './projects/03_card_ui';

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [activeProject, setActiveProject] = useState('01_data_fetch');

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
        <main className="main-content">
          <h1>Explore my practice project app</h1>
          <hr />
          {/* <FetchData /> */}
          {activeProject === '01_data_fetch' && <FetchData />}
          {activeProject === '02_blog_card' && <BlogCard />}
          {activeProject === '03_card_ui' && <CardUI />}
        </main>
      </div>
    </>
  );
}

export default App;
