import React from "react"
import { useState } from "react";

import "./Form.css"

const Form = () => {
  const [status, setStatus] = useState("Send Message");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus ("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email : email.value,
      message: message.value, 
    };
    let response = await fetch ("http://localhost:8000/contact", {
      method: "POST",
      header: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert (result.status);
  };

  return (
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Mssg:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default Form;
