import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    doctorId: '',
    date: '',
    time: '',
  });

  const { doctorId, date, time } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const fetchAppointments = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/appointments', {
        headers: {
          'x-auth-token': token,
        },
      });
      setAppointments(res.data);
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        '/api/appointments',
        { doctorId, date, time },
        {
          headers: {
            'x-auth-token': token,
          },
        }
      );
      setAppointments([...appointments, res.data]);
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Appointments</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="doctorId"
            value={doctorId}
            onChange={onChange}
            placeholder="Doctor ID"
            required
          />
        </div>
        <div>
          <input
            type="date"
            name="date"
            value={date}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="time"
            name="time"
            value={time}
            onChange={onChange}
            required
          />
        </div>
        <input type="submit" value="Book Appointment" />
      </form>
      <h3>Upcoming Appointments:</h3>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            Doctor ID: {appointment.doctorId}, Date: {appointment.date}, Time: {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentPage;
