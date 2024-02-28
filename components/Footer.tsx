import React from "react";

const Footer = () => {
  return (
    <div className="py-6 flex justify-center items-center gap-2">
      {/* Wrap the <a> tag with Link component from Next.js */}
      <a href="/contact">
        <a
          className="flex justify-center items-center rounded bg-dark text-white border-white border hover:bg-gray-400 duration-300 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
          style={{ width: "80px", height: "35px" }}
        >
          Contact
        </a>
      </a>
    </div>
  );
};

export default Footer;
