import React, { useState, useEffect } from 'react';
import './App_jtp.css';
import axios from 'axios';

function App() {
  const [jobTitles, setJobTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [recommendedJobs, setRecommendedJobs] = useState([]);

  useEffect(() => {
   
    const fetchJobTitles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/job_titles');
        setJobTitles(response.data);
      } catch (error) {
        console.error('Error fetching job titles:', error);
      }
    };

    fetchJobTitles();
  }, []);

  

  const handleGetRecommendations = async () => {
    try {
        const response = await axios.post('http://localhost:5000/recommend', { title: selectedTitle });
        setRecommendedJobs(response.data);
    } catch (error) {
        console.error('Error fetching recommendations:', error);
    }
};

const clearRecommendations = () => {
  setRecommendedJobs([]);
};
  

  return (
    <div className='home'>
      <h1>Job Recommendation System</h1>
      <label className='label'>Select Job Title:</label>
      <select className='selectoption' onChange={(e) => setSelectedTitle(e.target.value)}>
        {/* Populate dropdown with job titles */}
        {jobTitles.map((title) => (
          <option key={title} value={title}>{title}</option>
        ))}
      </select>
      <button onClick={() => { clearRecommendations(); handleGetRecommendations(); }}>
        Get Recommendations
      </button>
      <div className='showlist'>
        <h2>Recommended Jobs:</h2>
        <ul>
          {/* Display recommended jobs */}
          {recommendedJobs.map((job) => (
            <li key={job}>{job}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default App;