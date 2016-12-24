import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../constants/appConstants';
import objectAssign from 'object-assign';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let store = {
  appointments: [
          {id: 0, value: '9:00 am', name: undefined, phone: undefined},
          {id: 1, value: '10:00 am', name: undefined, phone: undefined},
          {id: 2, value: '11:00 am', name: undefined, phone: undefined},
          {id: 3, value: '12:00 pm', name: undefined, phone: undefined},
          {id: 4, value: '1:00 pm', name: undefined, phone: undefined},
          {id: 5, value: '2:00 pm', name: undefined, phone: undefined},
          {id: 6, value: '3:00 pm', name: undefined, phone: undefined},
          {id: 7, value: '4:00 pm', name: undefined, phone: undefined},
          {id: 8, value: '5:00 pm', name: undefined, phone: undefined},
        ]
};

const updateAppointment = (item) => {
  let index = store.appointments.map((appt) => {return appt.id;}).indexOf(item.id);
  if(index < 0){
    return;
  }
  store.appointments[item.id] = item;
};

const appointmentStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getAppointments(){
    return store.appointments;
  },
  getAppointmentById(id){
    return store.appointments[id];
  }
});

AppDispatcher.register(function(payload){
  const action = payload.action;
  switch(action.actionType){
    case appConstants.UPDATE_APPOINTMENT:
      updateAppointment(action.data);
      appointmentStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

export default appointmentStore;
