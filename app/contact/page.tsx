"use client";

import React, { useState } from "react";

const Contact = () => {
  // State hooks for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");

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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Comment"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            rows={4}
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="shadow bg-black hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
        >
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
