import React from "react";
import Form2 from "./Form2";

function FormInputs2() {
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
    <Form2 method="post" onSubmit={submitHandler}>
      <fieldset disabled={loading} aria-busy={loading}>
        <h2>Sign In</h2>
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
        <button type="submit">{loading ? "Signing in..." : "Sign In"}</button>
      </fieldset>
    </Form2>
  );
}

export default FormInputs2;
