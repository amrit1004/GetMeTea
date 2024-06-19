import PaymentPage from "@/components/PaymentPage";
import React from "react";
import connectDB from "@/db/connectDb";
import { notFound } from "next/navigation";
import User from "@/models/User";
const Username = async ({params}) => {
 const checkUser = async () =>{
     await connectDB()
     let u = await User.findOne({username:params.username})
     if(!u){
       return notFound()
     }
 }
     await checkUser()
  return (
    <>
     <PaymentPage username = {params.username}/>
    </>
  );
};

export default Username;
