import React, { useState } from 'react';
import axios from 'axios';

const DoctorDashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contactInfo: '',
    medicalHistory: '',
  });

  const [patients, setPatients] = useState([]);

  const { name, age, contactInfo, medicalHistory } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        '/api/patients/register',
        {
          ...formData,
          assignedDoctor: 'doctor_id', // Replace 'doctor_id' with the actual doctor ID
        },
        {
          headers: {
            'x-auth-token': token,
          },
        }
      );
      setPatients([...patients, res.data]);
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Doctor Dashboard</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Patient Name"
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            value={age}
            onChange={onChange}
            placeholder="Patient Age"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="contactInfo"
            value={contactInfo}
            onChange={onChange}
            placeholder="Contact Information"
            required
          />
        </div>
        <div>
          <textarea
            name="medicalHistory"
            value={medicalHistory}
            onChange={onChange}
            placeholder="Medical History"
            required
          />
        </div>
        <input type="submit" value="Register Patient" />
      </form>
      <h3>Patients List:</h3>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            {patient.name} - {patient.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorDashboard;
