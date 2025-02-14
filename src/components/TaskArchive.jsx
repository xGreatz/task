// src/components/TaskArchive.jsx
import React, { useEffect, useState } from "react";
import Task from "./Task";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { Link } from "react-router-dom";

const TaskArchive = () => {
  const [archivedTasks, setArchivedTasks] = useState([]);

  const fetchArchivedTasks = async () => {
    const q = query(collection(db, "tasks"), where("archived", "==", true));
    const querySnapshot = await getDocs(q);
    const tasksData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setArchivedTasks(tasksData);
  };

  useEffect(() => {
    fetchArchivedTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">Go Back Home</Link>
      <h2>Archived Tasks</h2>
      {archivedTasks.length === 0 ? (
        <p>No archived tasks.</p>
      ) : (
        archivedTasks.map((task) => <Task key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskArchive;
