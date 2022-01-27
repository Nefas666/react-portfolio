import React from "react"
import { useState } from "react";
import axios from 'axios';

import "./Form.css"

const Form = () => {
  const [state, setState] = useState({
   name:'',
   email:'',
   message:'' 
  });

  const[result, setResult] = useState(null);
  
  const sendMail = event => {
    event.preventDefault();
    axios
    .post ('/send', {...state})
    .then(response =>{
      setResult(response.data);
      setState({
        name:'',
        email:'',
        message:''     
      });
    })
    .catch(() =>{
      setResult({
        success:false,
        message:'Something went wrong :( Please, try again after a couple of seconds'
      });
    });
  };

  const onInputChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
    
  };
  return(
    <form onSubmit={sendMail}>
      { result && (
                  <p className={`${result.success ? 'success' : 'error'}`}>
              {result.message}
            </p>
      )}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={state.name} placeholder="Enter your full name" onChange={onInputChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={state.email} placeholder="Enter your email" onChange={onInputChange} />
        </div>
        <div>
          <label htmlFor="message">Mssg:</label>
          <textarea id="message" name="message" value={state.message} placeholder="Enter your message or just say hi :)" onChange={onInputChange}/>
        </div>
        <button type="submit">Send Message</button>
      </form>
    
  );
};

export default Form;


{/*const Form = () => {
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
    let response = await fetch ("http://localhost:8001/contact", {
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
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="message">Mssg:</label>
        <textarea id="message" name="message" />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};*/}

