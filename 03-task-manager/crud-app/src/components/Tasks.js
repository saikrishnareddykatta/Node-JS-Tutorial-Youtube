import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Tasks = ({ name, id, completed, getAllTasks }) => {
  let navigate = useNavigate();
  const deleteItem = async () => {
    try {
      const deletedTask = await axios.delete(
        `http://localhost:3002/api/v1/tasks/${id}`
      );
      if (deletedTask.statusText === "OK") {
        getAllTasks();
        return;
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <>
      <div>
        <span className="bi bi-check-circle"></span>
        <span>{name}</span>
        <span>{id}</span>
        <span>{`${completed}`}</span>
        <span
          className="bi bi-pencil-square"
          onClick={() => {
            navigate(`/editTask/${id}`);
          }}
        ></span>
        <span className="bi bi-trash-fill" onClick={deleteItem}></span>
      </div>
    </>
  );
};

export default Tasks;
