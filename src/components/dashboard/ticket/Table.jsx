import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

export default function Table({ search }) {
  const [data, setData] = useState([]);
  const [totalRecord, setTotalRecord] = useState(0);
  const [loading, setLoading] = useState(true);
  // const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then(function (response) {
        // handle success
        setData(response.data.todos);
        setTotalRecord(response.data.total);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      name: "Todo",
      selector: (row) => row.todo,
      sortable: true,
    },
    {
      name: "Completed",
      selector: (row) => row.completed,
      sortable: true,
    },
  ];

  if (totalRecord > 0) {
    data.forEach((todo) => {
      todo.completed = todo.completed ? "complete" : "not complete";
    });
  }

  const filteredItem = data.filter((item) => {
    return item.todo.toLowerCase().match(search);
  });

  return (
    <div className="mt-6">
      <DataTable columns={columns} data={filteredItem} pagination />
    </div>
  );
}
