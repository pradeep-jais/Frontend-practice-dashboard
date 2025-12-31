import { useState } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import FetchData from '../projects/01_data_fetch';
import BlogCard from '../projects/02_blog_card';
import CardUI from '../projects/03_card_ui';

function Home() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [activeProject, setActiveProject] = useState('01_data_fetch');

  const selectProject = (path) => {
    console.log(path);
    setActiveProject(path);
  };

  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <div className="layout max-width">
        <Sidebar toggleSidebar={toggleSidebar} selectProject={selectProject} />
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

export default Home;
