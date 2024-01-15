import React, { useState } from "react";
import FormStyle2 from "./FormStyle2";

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  url: "",
};
const PATTERN =
  "(?:(?:(?:https?|ftp):)?//)(?:S+(?::S*)?@)?(?:(?!(?:10|127)(?:.d{1,3}){3})(?!(?:169.254|192.168)(?:.d{1,3}){2})(?!172.(?:1[6-9]|2d|3[0-1])(?:.d{1,3}){2})(?:[1-9]d?|1dd|2[01]d|22[0-3])(?:.(?:1?d{1,2}|2[0-4]d|25[0-5])){2}(?:.(?:[1-9]d?|1dd|2[0-4]d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:.(?:[a-z\u00a1-\uffff]{2,})))(?::d{2,5})?(?:[/?#]S*)?";

const VALID_URL = [
  "http://www.google-com.123.com",
  "https://www.google-com.com",
  "http://google-com.com",
  "http://google.com",
  "//cdnblabla.cloudfront.net/css/app.css",
];

function Form2() {
  let [loading, setLoading] = useState(false);
  let [state, setState] = useState(INITIAL_STATE);
  let [success, setSuccess] = useState(false);

  let onChangeHandler = (e) => {
    let { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  let onBlurHandler = (e) => {
    let { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value.trim() }));
  };

  let clearForm = () => {
    setLoading(false);
    setState(INITIAL_STATE);
    setSuccess(false);
  };

  let submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    await setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  return (
    <FormStyle2 method="post" onSubmit={submitHandler}>
      <fieldset disabled={loading} aria-busy={loading}>
        <h2>Send Data</h2>
        <label htmlFor="text">
          Name
          <input
            id="text"
            type="name"
            name="name"
            required
            placeholder="name"
            value={state.name}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="email"
            value={state.email}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
        </label>
        <label htmlFor="tel">
          Phone
          <input
            id="tel"
            type="tel"
            name="phone"
            required
            placeholder="phone"
            pattern="[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}"
            title="Valid formats:
            (123) 456-7890
            (123)456-7890
            123-456-7890
            123.456.7890
            1234567890
            +31636363634
            075-63546725"
            value={state.phone}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
        </label>
        <label htmlFor="url">
          Url
          <input
            id="url"
            type="url"
            name="url"
            required
            placeholder="url"
            pattern={PATTERN}
            title={VALID_URL.map((url) => url)}
            value={state.url}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
        </label>
        {success &&
          Object.values(state).map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        <button type="submit">{loading ? "Sending..." : "Send"}</button>
        <button type="reset" onClick={clearForm}>
          Reset
        </button>
      </fieldset>
    </FormStyle2>
  );
}

export default Form2;
