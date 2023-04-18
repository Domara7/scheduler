export function getAppointmentsForDay(state, day) {
  const getDays = state.days.find((id) => id.name === day);
  if (!getDays) {
    return [];
  }
  const total = [];
  for (let i of getDays.appointments) {
    total.push(state.appointments[i]);
  }

  return total;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewData = state.interviewers[interview.interviewer];
  return {
    student: interview.student,
    interviewer: interviewData,
  };
}

export function getInterviewersForDay(state, day) {
  const getDays = state.days.find((id) => id.name === day);
  if (!getDays) {
    return [];
  }
  const total = [];
  for (let i of getDays.appointments) {
    total.push(state.appointments[i]);
  }

  return total;
}
