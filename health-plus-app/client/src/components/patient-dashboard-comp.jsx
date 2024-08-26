import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientDashboard = () => {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/patients/:id', {
          headers: {
            'x-auth-token': token,
          },
        });
        setPatientData(res.data);
      } catch (err) {
        console.error(err.response.data.msg);
      }
    };

    fetchPatientData();
  }, []);

  if (!patientData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Patient Dashboard</h2>
      <p>Name: {patientData.name}</p>
      <p>Age: {patientData.age}</p>
      <p>Contact Info: {patientData.contactInfo}</p>
      <h3>Medical History:</h3>
      <ul>
        {patientData.medicalHistory.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
      <h3>Assigned Doctor:</h3>
      <p>{patientData.assignedDoctor.name}</p>
    </div>
  );
};

export default PatientDashboard;
