import React, { useState } from "react";

function LoginForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" />
      <button type="submit">Login</button>
      {submitted && <p>Login submitted</p>}
    </form>
  );
}

export default LoginForm;
