

import Image from "next/image"

export default function IntroPage() {
  return (
    <>
      <div className="flex items-center bg-white/30 w-max p-2 rounded-xl gap-4 m-4">
        {/* <Image src='logo.svg' width={30} height={30} /> */}
        <p className="text-2xl font-outfit">Livure</p>
      </div>
      <div>
        <p>Hi People</p>
      </div>
      <div>
        <Image className="absolute left-20 top-20 scale-150" 
        src="files2.svg" width={500} height={500}></Image>
      </div>
    </>
  )
}