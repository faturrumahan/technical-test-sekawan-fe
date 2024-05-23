import { redirect } from "react-router-dom";

export const getAuthData = () => {
  const data = localStorage.getItem("loginData");
  return data;
};

export const checkAuthLoader = () => {
  const data = getAuthData();

  if (!data) {
    return redirect("/sign-in");
  }

  return null;
};

export const checkNotAuthLoader = () => {
  const data = getAuthData();

  if (data) {
    return redirect("/");
  }

  return null;
};
