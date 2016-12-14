import React, { Component } from 'react';
import '../../css/app.css';
import SelectTop from './selectTop';
import AppointmentTimes from './appointmentTimes';

class App extends Component {
  render() {
    return (
      <div>
        <SelectTop />
        <AppointmentTimes />
      </div>
    );
  }
}

export default App;
