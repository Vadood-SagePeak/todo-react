import { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const isEmpty = name.trim() === '';

  function handleSubmit(event) {
    event.preventDefault();
    if (isEmpty) {
      setError('Please enter a task name.');
      return;
    }
    props.addTask(name);
    setName("");
    setError('');
  }

  function handleChange(event) {
    setName(event.target.value);
    if (event.target.value.trim() !== '') {
      setError('');
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
        aria-describedby={error ? "new-todo-error" : undefined}
      />
      {error && (
        <p id="new-todo-error" className="todo-input-error" role="alert">
          {error}
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
