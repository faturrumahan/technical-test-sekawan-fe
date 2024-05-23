import React from "react";
import Card from "../../components/dashboard/ticket/Card";

export default function Ticket() {
  const authData = JSON.parse(localStorage.getItem("loginData"));
  return (
    <>
      <div className="flex justify-between align-center mb-10">
        <p className="font-bold text-xl">Tickets</p>
        <div>{authData.name}</div>
      </div>
      <Card />
    </>
  );
}
