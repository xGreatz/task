import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowTasks from "./components/ShowTasks";
import TaskForm from "./components/TaskForm";
import TaskArchive from "./components/TaskArchive";
import NavBar from "./components/Navbar";
import News from "./components/News";
import Header from "./components/Header";

function App() {
  return (
    <>
      <NavBar />
      <Header />

      <News />
      <Routes>
        <Route path="/" element={<ShowTasks />} />
        <Route path="/add-task" element={<TaskForm />} />
        <Route path="/archive" element={<TaskArchive />} />
      </Routes>
    </>
  );
}

export default App;
