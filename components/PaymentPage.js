"use client"
import React ,{useState}  from 'react'
import { useEffect } from 'react'
import Script from 'next/script'
import { fetchpayments, fetchuser, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer ,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'
const PaymentPage = ({username}) => {
   //const {data: session } = useSession()
   const [paymentform, setPaymentform] = useState({ name: '', message: '', amount: '' });
   const [currentUser, setcurrentUser] = useState({})
   const [payments , setPayments] = useState([])
   const searchParams = useSearchParams()
   const router = useRouter()
   useEffect(() => {
     getData();
   }, [])
   useEffect(() => {
     if(searchParams.get("paymentdone")=="true"){
      toast('Thanks for your donation', {
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
      router.push(`/${username}`)
   }, [])
   
   const resetForm = () => {
    setPaymentform({ name: '', message: '', amount: '' })
 }
   const handleChange = (e) =>{
      setPaymentform({...paymentform ,[e.target.name]: e.target.value})
     }
    const getData = async () =>{
      let u = await fetchuser(username)
      setcurrentUser(u);
      let db = await fetchpayments(username);
      setPayments(db);
      console.log(db ,u);
    } 
    const pay = async(amount) =>{
      let a = await initiate(amount ,username, paymentform)
      let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get me a Tea", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Amrit Singhal", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "7302033955" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
         rzp1.open();
         resetForm();
   
    }
  return (
    <>
     <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
     <ToastContainer />
     <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
     <div className="relative w-[35] cover">
        <img className="object cover w-full h-[35] md:h-[350] relative" src={currentUser.coverpic}  alt="Cover pic of user" />
      
      <div className="absolute -bottom-20 right-[36%] md:right-[46%] border-white border-2 rounded-full">
        <img className="rounded-full" height={120} width={120}  src={currentUser.profilepic} alt="profile pic of user" />
      </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 my-24 mb-32 info">
        <div className="text-lg font-bold">@{username}</div>
      <div className="text-slate-400">
        Let help {username} to get a Tea!
      </div>
      <div className="text-slate-400">
         {payments.length} Payments. ₹{payments.reduce((a ,b)=> a+ b.amount , 0)} raised
      </div>
      <div className="flex gap-3 payment w-[80%] mt-11 flex-col md:flex-row">
        <div className="w-full p-10 text-white rounded-lg md:w-1/2 supporters bg-slate-900">
        <h2 className="my-5 text-2xl font-bold ">Top 10 Supporters</h2>
           <ul className="mx-5 text-lg">
            {payments.length == 0 && <li>No Payments Yet</li>}
            {payments.map((p ,i)=>{
              return <li key={i} className="flex items-center gap-2 my-2">
              <img width={33} src="/man.png" alt="" />
              <span>
              {p.name} donated <span className="font-bold">{p.amount}</span> with a message {p.message}
              </span>
            </li>
            })}
           </ul>
        </div>
        <div className="w-full p-10 text-white rounded-lg md:w-1/2 makePayment bg-slate-900">
        <h2 className="my-5 text-2xl font-bold">Make a Payment</h2>
        <div className="flex flex-col gap-2">
          <div className="">
          <input onChange={handleChange} value={paymentform.name} name='name' type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name" />
          </div>
          <input onChange={handleChange} value={paymentform.message} type="text" name='message' className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message" />
          <input onChange={handleChange} value={paymentform.amount} type="number" name="amount" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount" />
          <button onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-100"  disabled = {paymentform.name?.length<3 || paymentform.message?.length<4 || paymentform.amount?.length <1}>Pay</button>
        </div>
          <div className="flex flex-col gap-2 mt-5 md:flex-row">
            <button className="p-3 rounded-lg bg-slate-800" onClick={()=>pay(1000)}>Pay ₹10</button>
            <button className="p-3 rounded-lg bg-slate-800" onClick={()=>pay(2000)}>Pay ₹20</button>
            <button className="p-3 rounded-lg bg-slate-800" onClick={()=>pay(3000)}>Pay ₹30</button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default PaymentPage