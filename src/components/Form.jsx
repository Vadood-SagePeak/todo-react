import { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');
  const [touched, setTouched] = useState(false);

  const trimmedName = name.trim();
  const isInvalid = touched && trimmedName === '';

  function handleSubmit(event) {
    event.preventDefault();
    if (trimmedName === '') {
      setTouched(true);
      return;
    }
    props.addTask(trimmedName);
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
        className={`input input__lg${isInvalid ? ' input__error' : ''}`}
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
        aria-describedby={isInvalid ? "new-todo-error" : undefined}
        aria-invalid={isInvalid || undefined}
      />
      {isInvalid && (
        <p id="new-todo-error" className="error-message" role="alert">
          Please enter a task name.
        </p>
      )}
      <button
        type="submit"
        className="btn btn__primary btn__lg"
        disabled={trimmedName === ''}
        aria-disabled={trimmedName === ''}
      >
        Add
      </button>
    </form>
  );
}

export default Form;
