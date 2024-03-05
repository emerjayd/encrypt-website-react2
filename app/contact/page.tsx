"use client";

import React, { useState } from "react";

const Contact = () => {
  // State hooks for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phoneNumber,
      comment,
    };

    // Example POST method implementation:
    const endpoint = "YOUR_LAMBDA_ENDPOINT"; // Replace with your actual endpoint
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const responseBody = await response.json();
    console.log(responseBody);
    // Implement your response handling logic here
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-6 text-white">
        Contact
      </h1>
      <div className="text-center text-white mb-6">
        Please fill out the form below and I will get back to you as soon as
        possible. <br />
        Form will be processed through Formspree.io
        <br />
      </div>
      <form
        target="_blank"
        action="https://formspree.io/f/xwkgbpnk"
        method="POST"
        className="w-full max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="phoneNumber"
            className="input"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Comment"
            className="custom-textarea"
            rows={4}
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="custom-submit-button">
          Send
        </button>
      </form>
      <div className="text-center text-white mb-6">
        <br /> If you prefer you can also write directly to:
        <br />
        <a href="mailto: encrypt.nmkrs@aleeas.com">encrypt.nmkrs@aleeas.com</a>
      </div>
    </div>
  );
};

export default Contact;
