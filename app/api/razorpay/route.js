import { NextResponse } from "next/server";
import { validatePaymentVerification} from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import User from "@/models/User";
export async function POST(req){
    await connectDB()
    let body = await req.formData()
    body = Object.fromEntries(body)
    let p = await Payment.findOne({oid:body.razorpay_order_id});
    if(!p){
        return NextResponse.json({success: false , message:"Order Id not found"})
    }
    let user = await User.findOne({username: p.to_user})
    const secret = user.razorpaysecret
    let xx = validatePaymentVerification({"order_id":body.razorpay_order_id , "payment_id": body.razorpay_payment_id} ,body.razorpay_signature ,secret)
    if(xx){
        const updatedPayment = await Payment.findOneAndUpdate({oid:body.razorpay_order_id} ,{done:"true"} ,{new : "true"})
        return NextResponse.redirect(`http://localhost:3000/${updatedPayment.to_user}?paymentdone=true`)
    }
    else{
        return NextResponse.json({success: false , message:"Payment Verification Failed"})
    }
}