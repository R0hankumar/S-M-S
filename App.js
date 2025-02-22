import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import StudentList from "./StudentList";
import StudentProfile from "./StudentProfile";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  // Function to add a student
  const addStudent = (student) => {
    setStudents((prevStudents) => {
      const updatedStudents = [...prevStudents, student];
      localStorage.setItem("students", JSON.stringify(updatedStudents));
      return updatedStudents;
    });
  };
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Student Management System</h1>
        </header>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/:id" element={<StudentProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
