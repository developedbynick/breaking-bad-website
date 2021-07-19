import React from "react";

function Form(props) {
  const onInputChange = (e) => {
    props.setValue(e.target.value.trim());
    props.filterCharacters(e.target.value.trim().toLowerCase());
  };
  return (
    <header>
      <form>
        <input
          type="text"
          onChange={onInputChange}
          value={props.value}
          placeholder="Filter by characters by name"
        />
      </form>
    </header>
  );
}

export default Form;
