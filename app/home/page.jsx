"use client"

import { useSession, signOut } from "next-auth/react"
import { redirect } from "next/navigation";

export default function HomePage(){
  
  const { data: session } = useSession()

  if(!session){
    redirect("/")
  }
  
  return(
    <div className="flex justify-center items-center flex-col">
    <h1 className="font-outfit mt-40 text-5xl">Home Page</h1>
    <h1 className="font-outfit mt-4 text-xl text-white/50">Welcome {session?.user?.name}</h1>
    
    <button 
        onClick={() => signOut({ callbackUrl: "/" })}
        className="mt-8 bg-white/20 hover:bg-white/30 transition-colors text-white font-outfit 
                 text-lg px-6 py-2 rounded-xl"
      >
        Sign Out
      </button>
    
    </div>
  )
}