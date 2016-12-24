import React, {Component, PropTypes} from 'react';
import Modal from './modal';
import appointmentStore from '../stores/appointmentStore';
import ReactDOM from 'react-dom';

class TimeSlot extends Component{
  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
      hover: false,
      appointment: appointmentStore.getAppointmentById(this.props.appointmentId)
    };

    this._toggleModal = this._toggleModal.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    this.setState({mounted: true});
    appointmentStore.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    appointmentStore.removeChangeListener(this._onChange);
  }

  _onChange(){
    this.setState({appointment: appointmentStore.getAppointmentById(this.props.appointmentId)});
  }

  _toggleModal(){
    if(!this.state.isOpen){
      ReactDOM.render(
        <Modal
          isOpen={this.state.isOpen}
          toggleModal={this._toggleModal}
          appointmentId={this.props.appointmentId}
        />, document.getElementById('modal'));
    }
    else{
        ReactDOM.unmountComponentAtNode(document.getElementById('modal'));
    }

    this.setState({isOpen: !this.state.isOpen});
  }

  render(){
    const styles = {
      container: {
        width: '298px',
        align: 'center',
        height: '60px',
        margin: 'auto',
        border: '1px solid',
        borderTop: 'none',
        borderColor: 'hsl(0,0%,85%)',
        cursor: 'pointer'
      },
      text:{
        paddingTop: '15px'
      }
    };

    if(this.state.appointment.name && this.state.appointment.phone){
     styles.container.backgroundColor = 'hsla(360, 100%, 70%, 1)'
    }

    return(
      <div>
        <div id="modal"></div>
        <div style={styles.container} className="timeSlot">
          <div style={styles.text} onClick={this._toggleModal}>
            {this.state.appointment.value}
          </div>
        </div>
      </div>
    )
  }
}

TimeSlot.propTypes = {
  appointmentId: PropTypes.number.isRequired
}

export default TimeSlot;
