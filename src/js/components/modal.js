import React, {Component, PropTypes} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import appointmentActions from '../actions/appointmentActions';
import appointmentStore from '../stores/appointmentStore';

class Modal extends Component{
  constructor(props){
    super(props);

    this.state = {
      //deep copy hack for simplicity
      appointment: JSON.parse(JSON.stringify(appointmentStore.getAppointmentById(this.props.appointmentId))),
      mounted: false
    }

    this._saveModal = this._saveModal.bind(this);
    this._changeName = this._changeName.bind(this);
    this._changePhone = this._changePhone.bind(this);
  }

  componentDidMount(){
    this.setState({mounted: true});
  }

  _changeName(event){
    let appointment = this.state.appointment;
    appointment.name = event.target.value;
    this.setState({appointment: appointment});
  }

  _changePhone(event){
    let appointment = this.state.appointment;
    appointment.phone = event.target.value;
    this.setState({appointment: appointment});
  }

  _saveModal(event){
    event.preventDefault();
    appointmentActions.updateAppointment(this.state.appointment);
    this.props.toggleModal();
  }

  render() {
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
        padding: '15px'
      },
      footer: {
        position: 'absolute',
        bottom: '15px',
        right: '15px',
        align: 'right'
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
      },
      form: {
        marginTop: '15px'
      }
    };

    let content;

    if(this.state.mounted){
      content = (
        <div style={styles.container} className="flexContainer">
          <div style={styles.header}>
            <h2>{this.state.appointment.value}</h2>
          </div>
          <div style={styles.body}>
            <form name="form" onSubmit={(e) => this._saveModal(e)}>
              <div>
                <label>Name:</label> <br />
                <input type="text" name="name" maxLength="25" required={this.state.appointment.phone}
                  defaultValue={this.state.appointment.name}
                  onChange={this._changeName}
                />
              </div>
              <div>
                <label>Phone:</label><br />
                <input type="text" name="phone" required={this.state.appointment.name}
                  placeholder="555-555-5555"
                  pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                  defaultValue={this.state.appointment.phone}
                  onChange={this._changePhone}
                />
                </div>
                <div style={styles.footer}>
                  <button type="button" style={styles.button} onClick={this.props.toggleModal}>Close</button>
                  <button type="submit" style={styles.button}>Save</button>
                </div>
            </form>
          </div>
        </div>
      );
    }

    return (
      <div id="modal">
        <div style={styles.shader}></div>
        <ReactCSSTransitionGroup
          transitionName="modal-transition"
          transitionEnterTimeout={500}
          transitionLeave={false}>
          {content}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  appointmentId: PropTypes.number.isRequired,
  toggleModal: PropTypes.func.isRequired,
}
