// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login-comp';
import Register from './components/registration-comp';
import PatientDashboard from './components/patient-dashboard-comp';
import DoctorDashboard from './components/doctor-dashboard-comp';
import AppointmentPage from './pages/appointment-page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/patient-dashboard" component={PatientDashboard} />
        <Route exact path="/doctor-dashboard" component={DoctorDashboard} />
        <Route exact path="/appointments" component={AppointmentPage} />
      </Routes>
    </Router>
  );
};

export default App;
