import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const loginData = [
  {
    email: "admin@email.com",
    password: "password123",
    role: "admin",
    name: "admin",
  },
  {
    email: "guest@email.com",
    password: "password123",
    role: "guest",
    name: "guest",
  },
];

export default function FormSignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginData.forEach((data) => {
      if (email == data.email && password == data.password) {
        localStorage.setItem("loginData", JSON.stringify(data));
        window.location.reload();
      } else {
        console.log("login failed");
      }
    });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="mb-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="email"
          placeholder="test@mail.com"
          required
        />
      </div>
      <div className="mb-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          name="password"
          type="password"
          placeholder="password"
          required
          minLength="8"
        />
      </div>
      <button className="mt-4 w-full bg-blue-600 text-center text-white font-bold rounded py-2 hover:bg-blue-700">
        Log In
      </button>
    </form>
  );
}
