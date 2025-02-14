import { useState } from "react";
import { db } from "../Firebase";
import { doc, updateDoc } from "firebase/firestore";

function Task({ task }) {
  const [completed, setCompleted] = useState(task.completed);
  const [archived, setArchived] = useState(task.archived);

  const toggleCompletion = async () => {
    try {
      const taskRef = doc(db, "tasks", task.id);
      await updateDoc(taskRef, { completed: !completed });
      setCompleted(!completed);
    } catch (err) {
      console.error("Error updating task: ", err);
    }
  };

  const archiveTask = async () => {
    try {
      const taskRef = doc(db, "tasks", task.id);
      await updateDoc(taskRef, { archived: true });
      setArchived(true);
      alert("Task archived successfully!");
    } catch (err) {
      console.error("Error archiving task: ", err);
    }
  };

  return (
    <div
      style={{
        backgroundColor: completed ? "#d3ffd3" : "#ffd3d3",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>
        {task.title} (Priority: {task.priority})
      </h3>
      <p>Assignee: {task.assignee}</p>
      <p>{task.content}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {completed ? "Completed" : "Not Completed"}</p>

      {!completed && (
        <button onClick={toggleCompletion}>Mark as Completed</button>
      )}

      {completed && !archived && (
        <button onClick={archiveTask}>Archive Task</button>
      )}
    </div>
  );
}

export default Task;
