import React, { useState } from "react";

const ContactFormAWS = () => {
  // State hooks for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");

  const endpoint = "https://TBD...LambdaURL...TBD"; // Placeholder for your Lambda function's API Gateway endpoint

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phoneNumber,
      comment,
    };

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle success
      })
      .catch((error) => {
        console.error("Error:", error); // Handle errors
      });
  };

  // Other imports

  const ContactFormAWS = () => {
    // State hooks and other component logic

    return (
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="contact-form-input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="contact-form-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="contact-form-input"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <textarea
            className="contact-form-textarea"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" className="contact-form-button">
            Send
          </button>
        </form>
      </div>
    );
  };
};

export default ContactFormAWS;
