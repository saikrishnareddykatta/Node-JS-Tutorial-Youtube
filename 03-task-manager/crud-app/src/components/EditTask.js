import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const EditTask = ({ setRenderHomePage }) => {
  const [taskID, setTaskID] = useState("");
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTask();
  }, []);

  const getTask = async () => {
    const singleTask = await axios.get(
      `http://localhost:3002/api/v1/tasks/${id}`
    );
    const { task } = singleTask.data;
    setTaskID(task._id);
    setName(task.name);
    setChecked(task.completed);
  };

  const editTask = async () => {
    try {
      const editedTask = await axios.patch(
        `http://localhost:3002/api/v1/tasks/${id}`,
        {
          name,
          completed: checked,
        }
      );
      setName(editedTask.data.task.name);
      setChecked(editedTask.data.task.completed);
      setButtonDisabled(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeCompleted = () => {
    setChecked((oldState) => !oldState);
  };

  return (
    <div>
      <div>
        <span>Task ID: </span>
        <span>{taskID}</span>
      </div>
      <div>
        <span>Name: </span>
        <input
          type="text"
          name="taskName"
          value={name}
          onChange={handleChangeName}
        ></input>
      </div>
      <div>
        <span>Completed: </span>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChangeCompleted}
        />
      </div>
      <div>
        <button onClick={editTask} disabled={buttonDisabled}>
          Edit
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setRenderHomePage((oldState) => !oldState);
            navigate("/");
          }}
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default EditTask;
