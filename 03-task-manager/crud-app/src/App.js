import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import TaskManager from "./components/TaskManager";
import EditTask from "./components/EditTask";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Error from "./components/Error";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [renderHomePage, setRenderHomePage] = useState(false);

  useEffect(() => {
    getAllTasks();
  }, [renderHomePage]);

  const getAllTasks = async () => {
    setIsLoading(true);
    const allTasksData = await axios.get("http://localhost:3002/api/v1/tasks");
    const allTasks = allTasksData.data.tasks;
    setTasks(allTasks);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <TaskManager
                getAllTasks={getAllTasks}
                tasks={tasks}
                isLoading={isLoading}
                setRenderHomePage={setRenderHomePage}
              />
            }
          />
          <Route
            path="/editTask/:id"
            element={<EditTask setRenderHomePage={setRenderHomePage} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
