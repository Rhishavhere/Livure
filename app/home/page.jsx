"use client"

import { useSession, signOut } from "next-auth/react"
import { redirect } from "next/navigation";

export default function HomePage(){
  
  const { data: session } = useSession()

  if(!session){
    redirect("/")
  }
  
  return(
    <>

    <div className="flex items-center justify-between bg-white/10 rounded-xl p-2 pl-4 pr-4">
      <div>
        <p className="font-outfit text-sm">Welcome</p>
        <p className="font-poppins text-xl">{session?.user?.name}</p>
      </div>
      <div className="w-20 h-10 rounded-full bg-white border-orange-200 border-4"></div>
    </div>



    <button 
      onClick={() => signOut({ callbackUrl: "/" })}
      className="mt-8 bg-white/20 hover:bg-white/30 transition-colors text-white font-outfit 
      text-lg px-6 py-2 rounded-xl
      absolute bottom-2"
      >
      Sign Out
    </button>
        
    </>
  )
}