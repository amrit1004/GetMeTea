import React from "react";

const Username = ({ params }) => {
  return (
    <>
      <div className="relative w-full cover">
        <img className="object cover w-full  h-[350] relative" src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/16.gif?token-time=1720051200&token-hash=0OMkGsnGZpJ44qLQKFZ8L-BNrtJ5aeWIzY7gVU-h5FQ%3D" alt="" />
      
      <div className="absolute -bottom-20 right-[46%] border-white border-2 rounded-full">
        <img className="rounded-full" height={120} width={120}  src="/cat.jpeg" alt="" />
      </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 my-24 mb-32 info">
        <div className="text-lg font-bold">@{params.username}</div>
      <div className="text-slate-400">
        Creating Animated Art
      </div>
      <div className="text-slate-400">
        9,719 members 82.  post. 8899 release 
      </div>
      <div className="flex gap-3 payment w-[80%] mt-11">
        <div className="w-1/2 p-10 text-white rounded-lg supporters bg-slate-900">
        <h2 className="my-5 text-2xl font-bold ">Supporters</h2>
           <ul className="mx-5 text-lg">
            <li className="flex items-center gap-2 my-2">
              <img width={33} src="/man.png" alt="" />
              <span>
              Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of Love ❤️"
              </span>
             </li>
             <li className="flex items-center gap-2 my-2">
              <img width={33} src="/man.png" alt="" />
              <span>
              Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of Love ❤️"
              </span>
             </li>
             <li className="flex items-center gap-2 my-2">
              <img width={33} src="/man.png" alt="" />
              <span>
              Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of Love ❤️"
              </span>
             </li>
           </ul>
        </div>
        <div className="w-1/2 p-10 text-white rounded-lg makePayment bg-slate-900">
        <h2 className="my-5 text-2xl font-bold">Make a Payment</h2>
        <div className="flex flex-col gap-2">
          <div className="">
          <input type="text"className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name" />
          </div>
          <input type="text"className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message" />
          <input type="text"className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount" />
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
        </div>
          <div className="flex gap-2 mt-5">
            <button className="p-3 rounded-lg bg-slate-800">Pay $10</button>
            <button className="p-3 rounded-lg bg-slate-800">Pay $20</button>
            <button className="p-3 rounded-lg bg-slate-800">Pay $30</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Username;
