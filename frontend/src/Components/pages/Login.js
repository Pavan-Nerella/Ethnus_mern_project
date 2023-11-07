import React, { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState({ username: "", password: "" });

  function updateLogin(event) {
    const { name, value } = event.target;
    setLogin((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <div>
      <p>
        {login.username} {login.password}
      </p>
      <form>
        <input
          type="text"
          placeholder="patient name"
          value={login.username}
          onChange={updateLogin}
          name="username"
        ></input>
        <input
          type="password"
          placeholder="password"
          value={login.password}
          onChange={updateLogin}
          name="password"
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
