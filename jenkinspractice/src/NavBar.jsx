import { Routes, Route, Link } from 'react-router-dom';
import AddProject from './AddProject';
import ViewAllProjects from './ViewAllProjects';

export default function ProjectNavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Projects</div>
        <ul className="nav-links">
          <li><Link to="/addproject">Add Project</Link></li>
          <li><Link to="/viewallprojects">View All Projects</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/addproject" element={<AddProject />} />
        <Route path="/viewallprojects" element={<ViewAllProjects />} />
      </Routes>
    </div>
  );
}
