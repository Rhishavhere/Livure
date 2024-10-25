"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function RegisterPage() {
  return (
    <>

      <div className="w-10 h-10 bg-white absolute rounded-full -right-5 top-4"></div>
      <div className="w-6 h-6 bg-green-200 absolute rounded-full left-10 top-28"></div>
      <div className="w-3 h-3 bg-red-200 absolute rounded-full left-36 top-72"></div>
      <div className="w-8 h-8 bg-blue-300 absolute rounded-full bottom-20 right-48"></div>

      <div className="mb-4 w-2 h-2"></div>
      <div className="flex items-center bg-white/30 w-max p-2 rounded-xl gap-4 m-4">
        {/* <Image src='logo.svg' width={30} height={30} /> */}
        <p className="text-2xl font-outfit">careBear</p>
      </div>
      <section className="flex flex-col justify-center items-center text-center">

        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-4xl font-outfit mt-24 m-4">
            Get Started Below</p>
          <p className="text-2xl font-outfit mt-4  text-white/40">
            Livure is safe and secure.</p>
        </motion.div>

        <Link href="/home">
        <motion.button 
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-20 bg-white text-black font-outfit text-xl p-2 pl-4 pr-4 rounded-2xl">
          Sign In with Google</motion.button>
        </Link>

          <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl font-outfit mt-20  text-white/40">
            wishing you and your family <br></br> a lifetime of good health.</p>
        </motion.div>

      </section>
    </>
  )
}