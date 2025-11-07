import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/project/viewall`);
      setProjects(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch projects. ' + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm(`Are you sure you want to delete Project ID ${id}?`)) return;

    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/project/delete/${id}`);
      setMessage(response.data);
      setError('');
      fetchProjects();
    } catch (err) {
      setMessage('');
      setError(err.response?.data || 'Failed to delete project.');
    }
  };

  return (
    <div className="project-table-container">
      <h3 className="project-heading">All Projects</h3>

      {message && (
        <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>
          {message}
        </p>
      )}
      {error && (
        <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>
          {error}
        </p>
      )}

      <div className="table-responsive">
        <table className="project-table" style={{ textAlign: "center", width: "100%" }}>
          <thead>
            <tr>
              <th>Project ID</th>
              <th>Project Name</th>
              <th>Description</th>
              <th>Project Type</th>
              <th>Student Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.projectid}</td>
                <td>{project.projectname}</td>
                <td>{project.description}</td>
                <td>{project.projecttype}</td>
                <td>{project.studentname}</td>
                <td>
                  <button
                    onClick={() => handleDelete(project.projectid)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      borderRadius: "5px"
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllProjects;
