"use client"
import { useRouter,  } from 'next/navigation'
import { useSession } from 'next-auth/react'
import React, { useState ,useEffect } from 'react'
const Dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter();
  const [form, setForm] = useState({});
  useEffect(() => {
    if(!session) {
      router.push("/login")
  }
  }, [router ,session])
  const handleChange = (e)=>{
     setForm({...form ,[e.target.name]: e.target.value})
  }
  return (
    <div className='container py-5 mx-auto'>
        <h1 className='my-5 text-3xl font-bold text-center'>Welcome to your Dashboard</h1>
        <form className ="max-w-2xl mx-auto">
            <div className="my-2">
                <label htmlFor="name" className='block mb-2 '></label>
            </div>
        </form>
    </div>
  )
}

export default Dashboard