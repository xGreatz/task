import React, { useState, useEffect } from "react";
import Task from "./Task";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { Link } from "react-router-dom";

const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMethod, setSortMethod] = useState("dueDate");

  const fetchTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const tasksData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setTasks(tasksData);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) =>
    [task.title, task.content, task.assignee]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const notCompletedTasks = filteredTasks.filter(
    (task) => !task.completed && !task.archived
  );
  const completedTasks = filteredTasks.filter(
    (task) => task.completed && !task.archived
  );

  const sortedNotCompleted = [...notCompletedTasks].sort((a, b) => {
    if (sortMethod === "dueDate") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else if (sortMethod === "priority") {
      return a.priority - b.priority;
    }
    return 0;
  });

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/add-task">Add New Task</Link>
      <br />
      <br />

      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "5px", width: "250px" }}
      />

      <select
        value={sortMethod}
        onChange={(e) => setSortMethod(e.target.value)}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        <option value="dueDate">Sort by Due Date</option>
        <option value="priority">Sort by Priority</option>
      </select>
      <h2>Not Completed Tasks</h2>
      {sortedNotCompleted.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <h2>Completed Tasks</h2>
      {completedTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ShowTasks;
