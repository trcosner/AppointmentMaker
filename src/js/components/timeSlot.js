import React, {Component} from 'react';
import Modal from './modal';

class TimeSlot extends Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(){
    this.setState({isOpen: !this.state.isOpen});
  }

  render(){
    const styles = {
      container: {
        width: '298px',
        backgroundColor: 'hsl(0,0%,98%)',
        align: 'center',
        height: '60px',
        margin: 'auto',
        border: '1px solid',
        borderTop: 'none',
        borderColor: 'hsl(0,0%,85%)'
      },
      text:{
        textAlign: 'center',
        fontSize: '18pt',
        paddingTop: '15px'
      }
    };

    return(
      <div>
        <Modal
          isOpen={this.state.isOpen}
          toggleModal={this.toggleModal}
          headerVal={this.props.appointment.value}
          appointment={this.props.appointment}
          />
        <div style={styles.container}>
          <div style={styles.text} onClick={this.toggleModal}>
            {this.props.appointment.value}
          </div>
        </div>
      </div>
    )
  }
}

export default TimeSlot;
