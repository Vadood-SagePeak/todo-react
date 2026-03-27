import { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');
  const [showError, setShowError] = useState(false);

  const trimmedName = name.trim();
  const isInvalid = trimmedName === '';

  function handleSubmit(event) {
    event.preventDefault();
    if (isInvalid) {
      setShowError(true);
      return;
    }
    props.addTask(trimmedName);
    setName("");
    setShowError(false);
  }

  function handleChange(event) {
    setName(event.target.value);
    if (showError && event.target.value.trim() !== '') {
      setShowError(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
        aria-describedby={showError ? "new-todo-error" : undefined}
        aria-invalid={showError || undefined}
      />
      {showError && (
        <p id="new-todo-error" className="form-error" role="alert">
          Please enter a task name.
        </p>
      )}
      <button
        type="submit"
        className="btn btn__primary btn__lg"
        disabled={isInvalid}
      >
        Add
      </button>
    </form>
  );
}

export default Form;
