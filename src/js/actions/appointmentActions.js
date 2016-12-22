import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../constants/appConstants';

const appointmentActions = {
  updateAppointment(appointment){
    AppDispatcher.handleAction({
      actionType: appConstants.UPDATE_APPOINTMENT,
      data: appointment
    });
  }
};

export default appointmentActions;
