import React, { useState } from "react";
import { useLogin } from "./useLogin";

const Login = () => {
  const [email, setEmail] = useState("yosbi52@gmail.com");
  const [password, setPassword] = useState("123456");

  const { login, isLoading } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          defaultValue={email}
          disabled={isLoading}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          defaultValue={password}
          disabled={isLoading}
        />

        <button type="submit" disabled={isLoading}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
