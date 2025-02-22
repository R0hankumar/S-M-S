// src/StudentList.js
import React from "react";
import { Link } from "react-router-dom";

function StudentList() {
  const students = JSON.parse(localStorage.getItem("students")) || [];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link to={`/students/${student.id}`} state={{ students }}>
              {student.studentName} - Marks: {student.marks}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
