import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../reducers/user";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "darshan", age: 22, email: "dpatel@gmail.com" })
          );
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        LogOut
      </button>
    </div>
  );
}

export default Login;
