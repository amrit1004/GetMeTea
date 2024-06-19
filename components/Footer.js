import React from "react";

const Footer = () => {
  const currentyear = new Date().getFullYear()
  return (
    <footer className="flex items-center justify-center text-white bg-gray-900">
      <p className="text-center">Copyright &copy; {currentyear} Get me a Tea - All Right Reserved!</p>
    </footer>
  );
};

export default Footer;
