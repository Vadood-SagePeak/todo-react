import { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isEmpty = name.trim() === "";
  const showError = isTouched && isEmpty;

  function handleSubmit(event) {
    event.preventDefault();
    if (isEmpty) {
      setIsTouched(true);
      return;
    }
    props.addTask(name.trim());
    setName("");
    setIsTouched(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleBlur() {
    setIsTouched(true);
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
        onBlur={handleBlur}
        aria-describedby={showError ? "new-todo-error" : undefined}
        aria-invalid={showError || undefined}
      />
      {showError && (
        <p id="new-todo-error" className="error-message" role="alert">
          Please enter a task name.
        </p>
      )}
      <button
        type="submit"
        className="btn btn__primary btn__lg"
        disabled={isEmpty}
        aria-disabled={isEmpty}
      >
        Add
      </button>
    </form>
  );
}

export default Form;
