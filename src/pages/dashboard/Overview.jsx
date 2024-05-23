import React, { useState } from "react";
import TopCard from "../../components/dashboard/TopCard";
import Chart from "../../components/dashboard/Chart";
import UnresolvedTicket from "../../components/dashboard/UnresolvedTicket";
import Tasks from "../../components/dashboard/Tasks";
import { Navigate } from "react-router-dom";

export default function Overview() {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const selectedCard = (title) => {
    if (title !== selectedTitle) {
      setSelectedTitle(title);
      setIsSelected(true);
    }
  };

  const authData = JSON.parse(localStorage.getItem("loginData"));

  return (
    <>
      {authData.role !== "admin" && <Navigate to="/ticket" />}
      <div className="flex justify-between align-center mb-10">
        <p className="font-bold text-xl">Overview</p>
        <div>{authData.name}</div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <TopCard
          title="Unresolved"
          number="60"
          onSetSelectedCard={selectedCard}
          selected={selectedTitle}
        />
        <TopCard
          title="Overdue"
          number="16"
          onSetSelectedCard={selectedCard}
          selected={selectedTitle}
        />
        <TopCard
          title="Open"
          number="43"
          onSetSelectedCard={selectedCard}
          selected={selectedTitle}
        />
        <TopCard
          title="On Hold"
          number="64"
          onSetSelectedCard={selectedCard}
          selected={selectedTitle}
        />
      </div>
      <div className="mt-5">
        <Chart />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4">
        <UnresolvedTicket />
        <Tasks />
      </div>
    </>
  );
}
