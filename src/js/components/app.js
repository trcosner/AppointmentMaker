import React, { Component } from 'react';
import '../../css/app.css';
import AppointmentTimes from './appointmentTimes';
import Modal from './modal';

class App extends Component{


  render() {
    return (
      <div>
        <AppointmentTimes />
      </div>
    );
  }
}

export default App;
