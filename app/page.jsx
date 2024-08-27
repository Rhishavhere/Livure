"use client"
import Link from "next/link"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function IntroPage() {
  

  
  return (
    
    <>

      <div className="w-10 h-10 bg-white absolute rounded-full -right-5 top-4"></div>
      <div className="w-6 h-6 bg-green-200 absolute rounded-full left-10 top-28"></div>
      <div className="w-3 h-3 bg-red-200 absolute rounded-full left-36 top-72"></div>
      <div className="w-8 h-8 bg-blue-300 absolute rounded-full bottom-20 right-32"></div>

      <div className="mb-4 w-2 h-2"></div>
      <div className="flex items-center bg-white/30 w-max p-2 rounded-xl gap-4 m-4">
        {/* <Image src='logo.svg' width={30} height={30} /> */}
        <p className="text-2xl font-outfit">Livure</p>
      </div>
      <motion.div
        initial={{x:-10,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:1}}
      >
        <p className="text-6xl font-outfit mt-36 m-4">
          Hey</p>
        <p className="text-4xl font-outfit mt-16 m-4">
          Welcome to <br/> your personal <br/> medical care vault</p>
        <p className="text-2xl font-outfit mt-10 ml-4 text-white/40">
        Your health, our priority</p>
        <p className="text-2xl font-outfit ml-4 text-white/40">
        Your journey, our support</p>
      
      
      </motion.div>
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
      >
        <Image className="absolute left-36 top-20 scale-150 -z-10" 
        src="files2.svg" width={320} height={300}></Image>
      </motion.div>
      
      <motion.div
        initial={{scale:0.5,rotate:-180}}
        animate={{scale:1,rotate:0}}
        transition={{duration:0.8}}
        
        className="bg-white w-44 h-44 rounded-full mt-10 fixed -bottom-16 -left-10">
        <Link href="/register"> 
        <Image src="right.svg" width={50} height={50} className="absolute left-16 top-12 "></Image>
        </Link>
      </motion.div>
      
    </>

  )
}