import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";
import Status from "./Status";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

  const { mode, transition } = useVisualMode(props.interview ? SHOW : EMPTY);
  // console.log("line 17", props);

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    console.log("line 24", SAVING);
    transition(SAVING);
    props.bookInterview(props.id, interview).then(() => {
      console.log("line27", SHOW);
      transition(SHOW);
    });
    console.log("line 27 props", props);
  }
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && <Status message="Saving Appointment" />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => transition(EMPTY)}
          onSave={(name, interviewer) => save(name, interviewer)}
        />
      )}
    </article>
  );
}
