// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventList from './components/EventList';
import ServiceList from './components/ServiceList';
import EventForm from './components/EventForm';
import ServiceForm from './components/ServiceForm';
import NavigationBar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <NavigationBar isAuthenticated={!!token} logout={logout} />
      <Switch>
        <Route path="/events" component={EventList} />
        <Route path="/services" component={ServiceList} />
        <PrivateRoute path="/add-event" component={() => <EventForm token={token} />} isAuthenticated={!!token} />
        <PrivateRoute path="/add-service" component={() => <ServiceForm token={token} />} isAuthenticated={!!token} />
        <Route path="/login" component={() => <Login setToken={(token) => { setToken(token); localStorage.setItem('token', token); }} />} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
