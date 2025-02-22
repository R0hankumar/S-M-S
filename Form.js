// src/Form.js
import React, { useState } from "react";

function Form({ onAddStudent }) {
  const [studentName, setStudentName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [marks, setMarks] = useState("");
  const [biodata, setBiodata] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      studentName,
      studentNumber,
      phoneNumber,
      marks,
      biodata,
      linkedIn,
      github,
      portfolio,
    };

    onAddStudent(newStudent);

    // Clear form
    setStudentName("");
    setStudentNumber("");
    setPhoneNumber("");
    setMarks("");
    setBiodata("");
    setLinkedIn("");
    setGithub("");
    setPortfolio("");
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Student Number"
          value={studentNumber}
          onChange={(e) => setStudentNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <textarea
          placeholder="Biodata"
          value={biodata}
          onChange={(e) => setBiodata(e.target.value)}
        />
        <input
          type="text"
          placeholder="LinkedIn URL"
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
        />
        <input
          type="text"
          placeholder="GitHub URL"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
        <input
          type="text"
          placeholder="Portfolio URL"
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default Form;
