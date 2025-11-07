import { useState } from 'react';
import axios from 'axios';

export default function AddProject() {
  const [formData, setFormData] = useState({
    projectid: '',
    projectname: '',
    description: '',
    projecttype: '',
    studentname: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCase = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.toUpperCase() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/project/addproject`,
        formData
      );

      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({
          projectid: '',
          projectname: '',
          description: '',
          projecttype: '',
          studentname: '',
        });
      }
    } catch (err) {
      setMessage('');
      setError(err.response?.data || 'An unexpected error occurred.');
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
        Add Project
      </h3>
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
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project ID</label>
          <input
            type="number"
            id="projectid"
            value={formData.projectid}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Project Name</label>
          <input
            type="text"
            id="projectname"
            value={formData.projectname}
            onChange={handleChange}
            onKeyUp={handleCase}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Project Type</label>
          <input
            type="text"
            id="projecttype"
            value={formData.projecttype}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Student Name</label>
          <input
            type="text"
            id="studentname"
            value={formData.studentname}
            onChange={handleChange}
            onKeyUp={handleCase}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
