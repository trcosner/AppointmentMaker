import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import appointmentActions from '../actions/appointmentActions';

class Modal extends Component{
  constructor(props){
    super(props);
    this.saveModal = this.saveModal.bind(this);
  }

  saveModal(){
    let appointment = this.props.appointment;
    appointmentActions.updateAppointment(appointment);
    this.props.toggleModal();
  }

  render(){

    const styles = {
      container: {
        backgroundColor: 'white',
        border: '2px solid',
        position: 'absolute',
        top: '100px',
        bottom: '100px',
        left: '40px',
        right: '40px',
        zIndex: '3'
      },
      header:{
        flex: '1',
        backgroundColor: 'hsl(0,0%,75%)',
        textAlign: 'center'
      },
      body: {
        flex: '4',
        paddingLeft: '15px',
        paddingRight: '15px'
      },
      footer: {
        flex: '1',
        backgroundColor: 'hsl(0,0%,75%)',
      },
      button: {
        float: 'right',
        padding: '5px',
        margin: '10px'
      },
      shader: {
        position: 'fixed',
        top: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: 'grey',
        opacity: '.7',
        zIndex: '2'
      }
    };

    if(this.props.isOpen){
            return (
              <div>
                <div style={styles.shader}></div>
                <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}>
                  <div style={styles.container} className="flexContainer">
                    <div style={styles.header}>
                      <h2>{this.props.headerVal}</h2>
                    </div>
                      <div style={styles.body}>
                        <form name={this.form}>
                          <label>
                            Name:
                            <input type="text" name="name" value={this.props.appointment.name} maxLength="25"/>
                          </label>
                          <label>
                            Name:
                            <input type="number" name="name" value={this.props.appointment.phone} placeholder="555-555-5555" pattern="\d{3}[\-]\d{3}[\-]\d{4}"/>
                          </label>
                        </form>
                      </div>
                      <div style={styles.footer}>
                        <button style={styles.button} onClick={this.props.toggleModal}>Close</button>
                        <button style={styles.button} onClick={this.saveModal}>Save</button>
                      </div>
                  </div>
                </ReactCSSTransitionGroup>
              </div>
            );
        } else {
            return <ReactCSSTransitionGroup transitionName="example"
                      transitionEnterTimeout={500}
                      transitionLeaveTimeout={300}/>;
        }
  }
}

export default Modal;
