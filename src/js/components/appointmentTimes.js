import React, {Component} from 'react';
import TimeSlot from './timeSlot';
import appointmentStore from '../stores/appointmentStore';
import appointmentActions from '../actions/appointmentActions';

class AppointmentTimes extends Component{
  constructor(props){
    super(props);
    this.state = {appointments: appointmentStore.getAppointments()};
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    appointmentStore.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    appointmentStore.removeChangeListener(this._onChange);
  }

  _onChange(){
   this.setState({
     appointments: appointmentStore.getAppointments()
   })
 }

  render() {
    const styles = {
      container: {
        width: '300px',
        backgroundColor: 'hsl(0,0%,37%)',
        align: 'center',
        height: '60px',
        margin: 'auto',
        marginTop: '40px'
      },
      text:{
        color: 'white',
        textAlign: 'center',
        fontSize: '28pt',
        padding: '6px'
      }
    };

    let timeSlots = this.state.appointments.map((appt) => {
      return (
          <TimeSlot key={appt.id} appointment={appt}/>
      );
    });

    return(
      <div>
        <div style={styles.container}>
          <div style={styles.text}>Appointments</div>
        </div>
        {timeSlots}
      </div>
    )
  }
}

export default AppointmentTimes;
