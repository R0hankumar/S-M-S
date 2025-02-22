// src/StudentProfile.js
import React from "react";
import { useParams, useLocation } from "react-router-dom";

function StudentProfile() {
  const { id } = useParams();
  const location = useLocation();
  const students = location.state?.students || [];
  const student = students.find((student) => student.id === parseInt(id));

  return (
    <div>
      <h2>Student Profile</h2>
      {student ? (
        <div>
          <p><strong>Name:</strong> {student.studentName}</p>
          <p><strong>Number:</strong> {student.studentNumber}</p>
          <p><strong>Phone:</strong> {student.phoneNumber}</p>
          <p><strong>Marks:</strong> {student.marks}</p>
          <p><strong>Biodata:</strong> {student.biodata}</p>

          <h4>Links</h4>
          <p><a href={student.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p><a href={student.github} target="_blank" rel="noreferrer">GitHub</a></p>
          <p><a href={student.portfolio} target="_blank" rel="noreferrer">Portfolio</a></p>
        </div>
      ) : (
        <p>No student found!</p>
      )}
    </div>
  );
}

export default StudentProfile;
