"use client"
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import React from 'react'
const Dashboard = () => {
  const { data: session } = useSession()
  if(!session) {
    const router = useRouter();
    router.push("/login")
}
  return (
    <div>This is dashboard</div>
  )
}

export default Dashboard