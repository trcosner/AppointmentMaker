import React, {Component} from 'react';
import TimeSlot from './timeSlot';

class AppointmentTimes extends Component{
  constructor(props){
    super(props);
    this.state = {
      times: [
        {id: 1, value: '9:00 am'},
        {id: 2, value: '10:00 am'},
        {id: 3, value: '11:00 am'},
        {id: 4, value: '12:00 pm'},
        {id: 5, value: '1:00 pm'},
        {id: 6, value: '2:00 pm'},
        {id: 7, value: '3:00 pm'},
        {id: 8, value: '4:00 pm'},
        {id: 9, value: '5:00 pm'},
      ]
  }
}
  render() {

    let timeSlots = this.state.times.map((timeObj) => {
      return (
          <TimeSlot key={timeObj.id} time={timeObj} />
      );
    });

    return(
      <div>
        {timeSlots}
      </div>
    )
  }
}

export default AppointmentTimes;
