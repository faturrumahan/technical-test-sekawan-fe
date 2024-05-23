import React from "react";
import FormSignIn from "../../components/auth/FormSignIn";

export default function SignIn() {
  return (
    <div className="bg-gray-900 min-h-screen w-full flex justify-center items-center">
      <div className="bg-white rounded-lg p-10">
        <div className="flex flex-col items-center">
          <>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/768px-Wikimedia-logo.png"
              alt="logo"
              className="w-20"
            />
            <p className="text-gray-700 text-lg font-bold">Dashboard Kit</p>
          </>
          <div className="mt-5 text-center">
            <p className="font-bold text-2xl tracking-wide">
              Log In to Dashboard Kit
            </p>
            <p className="text-gray-400 mt-2">
              Enter your email and password below
            </p>
          </div>
          <div className="mt-7 text-gray-400 w-full">
            <FormSignIn />
          </div>
          <p className="mt-5 text-gray-400">
            Dont have an account?{" "}
            <span className="text-blue-700">
              <a href="#">Sign up</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
