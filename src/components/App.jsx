import React, { useState } from "react";

function App() {
  const [fullName, changeFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleOnChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    changeFullName((prevValue) => {
      if (inputName === "fName") {
        return { fName: newValue, lName: prevValue.lName };
      } else if (inputName === "lName") {
        return { fName: prevValue.fName, lName: newValue };
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName + " " + fullName.lName} </h1>
      <form>
        <input
          onChange={handleOnChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleOnChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
