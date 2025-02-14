import { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    assignee: "",
    content: "",
    dueDate: "",
    completed: false,
    archived: false,
    priority: 2, // default priority
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: name === "priority" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "tasks"), task);
      alert("Task added successfully!");
      setTask({
        title: "",
        assignee: "",
        content: "",
        dueDate: "",
        completed: false,
        archived: false,
        priority: 2,
      });
    } catch (err) {
      console.error("Error adding task: ", err);
    }
  };

  return (
    <>
      <Link to="/">Go Back Home</Link>
      <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleInputChange}
          placeholder="Task Title"
          required
        />
        <br />
        <input
          type="text"
          name="assignee"
          value={task.assignee}
          onChange={handleInputChange}
          placeholder="Assignee Name"
          required
        />
        <br />
        <textarea
          name="content"
          value={task.content}
          onChange={handleInputChange}
          placeholder="Task Content"
          required
        />
        <br />
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleInputChange}
          required
        />
        <br />

        <label>
          Priority:
          <select
            name="priority"
            value={task.priority}
            onChange={handleInputChange}
          >
            <option value={1}>1 - High</option>
            <option value={2}>2 - Medium</option>
            <option value={3}>3 - Low</option>
          </select>
        </label>
        <br />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}

export default TaskForm;
