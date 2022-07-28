import React from "react";
import Tasks from "./Tasks";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const TaskManager = ({ tasks, getAllTasks, isLoading, setRenderHomePage }) => {
  const [taskName, setTaskName] = useState("");
  // const [buttonDisabled, setButtonDisabled] = useState(true);

  const createTask = async () => {
    try {
      await axios.post(`http://localhost:3002/api/v1/tasks`, {
        name: taskName,
      });
      setTaskName("");
      setRenderHomePage((oldState) => !oldState);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTaskName = (event) => {
    setTaskName(event.target.value);
  };

  return (
    <>
      <div>Task Manager</div>
      <input
        type="text"
        name="taskName"
        onChange={handleTaskName}
        value={taskName}
      />
      <button onClick={createTask}>Submit</button>
      <div>
        {isLoading && (
          <div className="spinner-border" role="status">
            <span className="sr-only" />
          </div>
        )}
        {tasks.length > 0 &&
          tasks.map((task) => {
            return (
              <div key={task._id}>
                <Tasks
                  name={task.name}
                  id={task._id}
                  completed={task.completed}
                  getAllTasks={() => getAllTasks()}
                />
              </div>
            );
          })}
        {!isLoading && !tasks.length && <div>No Records Found</div>}
      </div>
    </>
  );
};

export default TaskManager;
