import { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');
  const [touched, setTouched] = useState(false);

  const isInvalid = name.trim() === '';
  const showError = touched && isInvalid;

  function handleSubmit(event) {
    event.preventDefault();
    setTouched(true);
    if (isInvalid) return;
    props.addTask(name.trim());
    setName("");
    setTouched(false);
  }

  function handleChange(event) {
    setName(event.target.value);
    if (!touched) setTouched(true);
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
        className={`input input__lg${showError ? " input--error" : ""}`}
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
        aria-describedby={showError ? "new-todo-error" : undefined}
        aria-invalid={showError || undefined}
      />
      {showError && (
        <p id="new-todo-error" className="todo-input-error" role="alert">
          Please enter a task name.
        </p>
      )}
      <button
        type="submit"
        className="btn btn__primary btn__lg"
        disabled={isInvalid}
        aria-disabled={isInvalid}
      >
        Add
      </button>
    </form>
  );
}

export default Form;
