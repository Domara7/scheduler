export function getAppointmentsForDay(state, day) {
  const { days, appointments } = state;
  const appointmentArr = [];

  days.map((dayObject) => {
    if (dayObject.name === day) {
      dayObject.appointments.map((appointment) =>
        appointmentArr.push(appointments[appointment])
      );
    }
  });
  return appointmentArr;
}
