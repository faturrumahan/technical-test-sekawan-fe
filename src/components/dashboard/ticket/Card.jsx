import React, { useState } from "react";
import CardHeader from "./CardHeader";
import Table from "./Table";

export default function Card() {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };
  return (
    <div className="rounded bg-white p-6">
      <CardHeader onSaveSearchValue={onChangeSearchValue} />
      <Table search={searchValue} />
    </div>
  );
}
