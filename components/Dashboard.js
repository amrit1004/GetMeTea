"use client"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { fetchuser ,updateProfile } from "@/actions/useractions";
import { ToastContainer ,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from 'react-toastify'
const Dashboard = () => {
  const { data: session ,update} = useSession();
  const router = useRouter();
  const [form, setForm] = useState({});
  useEffect(() => {
    getData()
    if (!session) {
      router.push("/login");
    }
  }, [router, session]);
  useEffect(() => {
      
  }, [])
  
  const getData = async () =>{
    let u = await fetchuser(session.user?.username)
    setForm(u);
  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value});
  };
  const handleSubmit = async(e) =>{
     update()
     let a = updateProfile(e ,session.user?.username)
     toast('Profile Updated', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }
  return (
    <>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
    <ToastContainer />
    <div className="container px-6 py-5 mx-auto">
      <h1 className="my-5 text-3xl font-bold text-center">
        Welcome to your Dashboard
      </h1>
      <form action={handleSubmit} className="max-w-2xl mx-auto">
        <div className="my-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            value={form.name ? form.name : ""}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            className="block w-full p-2 text-xs text-gray-900 placeholder-gray-400 border border-gray-600 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            value={form.email ? form.email : ""}
            onChange={handleChange}
            type="text"
            name="email"
            id="email"
            className="block w-full p-2 text-xs text-gray-900 placeholder-gray-400 border border-gray-600 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-white"
          >
            Username
          </label>
          <input
            value={form.username ? form.username : ""}
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
            className="block w-full p-2 text-xs text-gray-900 placeholder-gray-400 border border-gray-600 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="profile"
            className="block mb-2 text-sm font-medium text-white"
          >
            Profile Picture
          </label>
          <input
            value={form.profilepic ? form.profilepic : ""}
            onChange={handleChange}
            type="text"
            name="profilepic"
            id="profilepic"
            className="block w-full p-2 text-xs text-gray-900 placeholder-gray-400 border border-gray-600 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="coverpic"
            className="block mb-2 text-sm font-medium text-white"
          >
            Cover Picture
          </label>
          <input
            value={form.coverpic ? form.coverpic : ""}
            onChange={handleChange}
            type="text"
            name="coverpic"
            id="coverpic"
            className="block w-full p-2 text-xs text-gray-900 placeholder-gray-400 border border-gray-600 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="razorpayid"
            className="block mb-2 text-sm font-medium text-white"
          >
            Razorpay Id
          </label>
          <input
            value={form.razorpayid ? form.razorpayid : ""}
            onChange={handleChange}
            type="text"
            name="razorpayid"
            id="razorpayid"
            className="block w-full p-2 text-xs text-gray-900 placeholder-gray-400 border border-gray-600 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="razorpaysecret"
            className="block mb-2 text-sm font-medium text-white"
          >
            Razorpay Secret
          </label>
          <input
            value={form.razorpaysecret ? form.razorpaysecret : ""}
            onChange={handleChange}
            type="text"
            name="razorpaysecret"
            id="razorpaysecret"
            className="block w-full p-2 text-xs text-gray-900 placeholder-gray-400 border border-gray-600 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="my-6">
          <button
            type="submit"
            className="block w-full p-2 text-sm font-medium bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-800"
          >
            Save
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Dashboard;
