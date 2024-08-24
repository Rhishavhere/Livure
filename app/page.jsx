

import Image from "next/image"

export default function IntroPage() {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center bg-white/30 w-max p-2 rounded-xl gap-4 m-4">
        {/* <Image src='logo.svg' width={30} height={30} /> */}
        <p className="text-2xl font-outfit">Livure</p>
      </div>
      <div>
        <p className="text-5xl font-outfit mt-36 m-4">Hey</p>
        <p className="text-4xl font-outfit mt-20 m-4">Welcome to <br/> your personal <br/> medical care vault</p>
        <p className="text-2xl font-outfit mt-10 ml-4 text-white/40">Your health, our priority</p>
        <p className="text-2xl font-outfit ml-4 text-white/40">Your journey, our support</p>
      </div>
      <div>
        <Image className="absolute left-36 top-20 scale-150 -z-10" 
        src="files2.svg" width={320} height={300}></Image>
      </div>
      <div className="bg-white w-44 h-44 rounded-full mt-10 relative -left-10 -bottom-8">
        <Image src="right.svg" width={50} height={50} className="absolute left-16 top-8"></Image>
      </div>
    </div>
  )
}