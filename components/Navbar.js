import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (<nav className="flex items-center justify-between h-16 px-4 text-white bg-gray-900">
    <div className="flex items-center justify-center text-lg font-bold logo">
      <img src="/tea2.gif" width={40} alt="" />
      <span>Get Me a Tea</span>
      </div>
    {/* <ul className="flex justify-between gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
    </ul> */}
    <div>
      <Link href={"/login"}>
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
      </Link>
      
    </div>
   </nav>
  )
};

export default Navbar;
