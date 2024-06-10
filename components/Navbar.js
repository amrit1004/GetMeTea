import React from "react";

const Navbar = () => {
  return (<nav className="flex items-center justify-between h-16 px-4 text-white bg-black">
    <div className="font-bold logo">GetMeaTea</div>
    <ul className="flex justify-between gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
    </ul>
   </nav>
  )
};

export default Navbar;
