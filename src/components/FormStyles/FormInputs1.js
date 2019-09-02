import React from "react";
import Form1 from "./Form1";
import BTN7 from "../buttonStyles/button7";

function FormInputs1(props) {
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const submitHandler = async e => {
    e.preventDefault();
    setLoading(true);
    await setTimeout(() => {
      console.log("submit");
      setLoading(false);
    }, 1000);
  };

  return (
    <Form1 method="post" onSubmit={submitHandler}>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <BTN7 className={loading ? "loading" : ""} type="submit">
          {loading ? "Submitting..." : "Submit"}
        </BTN7>
      </fieldset>
    </Form1>
  );
}

export default FormInputs1;
