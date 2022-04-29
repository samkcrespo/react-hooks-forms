import React, { useState } from "react";
import DisplayData from "./DisplayData";
import Form from "./Form";

function ParentComponent() {
  const [firstName, setFirstName] = useState("Sam");
  const [lastName, setLastName] = useState("Crespo");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <div>
      <Form
        firstName={firstName}
        lastName={lastName}
        onFirstNameChange={handleFirstNameChange}
        onLastNameChange={handleLastNameChange}
      />
      <DisplayData firstName={firstName} lastName={lastName} />
    </div>
  );
}

export default ParentComponent;
