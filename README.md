# Appointment Maker


The purpose of the Appointment Maker application is to explore a technology stack including the following technologies:

    1 NodeJS
    2 ReactJS
    3 Flux


While this is not my dominant stack (I come from a mostly angular background) I felt that it was important to learn and understand the technologies mentioned. Plus ReactJS is just plain fun.

The Appointment Maker application accomplishes the following goals:

  1 Build a screen which shows a list of hour long slots from 9am to 5pm.

  2 When one time slot is clicked, pop up a modal which asks for name and phone number.

  3 When the name and phone number is submitted, the time slot selected should change to red, indicating the time slot is no longer available.

  4 If the red time slot is clicked on again, the modal will pop up with the name and phone number for that appointment pre-populated. Users will be able to edit the name and phone number to change the user for the appointment.

My previous experience with NodeJS includes small web servers purposed for hosting applications.
Using ReactJS, I have built some small applications involving little data manipulation and logic.
I have never used Flux.


Leveraging Technologies:

React: Front-end library used for views. component driven architecture.
Flux: state management using actions, constants, stores, and a dispatcher
Node: used within store via EventEmitter

Download and extract the [latest version](https://github.com/trcosner/AppointmentMaker).

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ npm start
```
