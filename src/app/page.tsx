import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-[100vw] min-h-[100vh] flex items-center justify-center">
        <div className="bg-[#1F1F1F] rounded-[12px] flex flex-col items-center md:w-[456px] lg:w-[384px] mx-6 text-center">
            <Image src="/avatar-jessica.jpeg" alt="Profile Picture" width={88} height={88} className="rounded-full mt-10" />
            <h1 className="text-white text-[24px] mx-6 sm:mx-10 font-semibold leading-[150%] mt-6">Jessica Randall</h1>
            <p className="text-[#C4F82A] text-[14px] font-bold leading-[150%] mt-1 mx-6 sm:mx-10">London, United Kingdom</p>

            <p className="text-white text-[14px] font-normal leading-[150%] mt-6 mx-6 sm:mx-10 text-center">&quot;Front-end developer and avid reader.&quot;</p>

            <div className="mt-6 mb-10 w-full relative">
                <p className="w-[calc(100%-48px)] sm:w-[calc(100%-80px)] mx-6 sm:mx-10 bg-[#333] rounded-[8px] cursor-pointer py-3 text-center text-[14px] font-bold leading-[150%] text-white transition duration-200 ease-in-out hover:bg-[#C4F82A] hover:text-black">GitHub</p>
                <p className="w-[calc(100%-48px)] sm:w-[calc(100%-80px)] mx-6 sm:mx-10 bg-[#333] mt-4 rounded-[8px] cursor-pointer py-3 text-center text-[14px] font-bold leading-[150%] text-white transition duration-200 ease-in-out hover:bg-[#C4F82A] hover:text-black">Frontend
                    Mentor</p>
                <p className="w-[calc(100%-48px)] sm:w-[calc(100%-80px)] mx-6 sm:mx-10 bg-[#333] mt-4 rounded-[8px] cursor-pointer py-3 text-center text-[14px] font-bold leading-[150%] text-white transition duration-200 ease-in-out hover:bg-[#C4F82A] hover:text-black">LinkedIn</p>
                <p className="w-[calc(100%-48px)] sm:w-[calc(100%-80px)] mx-6 sm:mx-10 bg-[#333] mt-4 rounded-[8px] cursor-pointer py-3 text-center text-[14px] font-bold leading-[150%] text-white transition duration-200 ease-in-out hover:bg-[#C4F82A] hover:text-black">Twitter</p>
                <p className="w-[calc(100%-48px)] sm:w-[calc(100%-80px)] mx-6 sm:mx-10 bg-[#333] mt-4 rounded-[8px] cursor-pointer py-3 text-center text-[14px] font-bold leading-[150%] text-white transition duration-200 ease-in-out hover:bg-[#C4F82A] hover:text-black">Instagram</p>
            </div>
        </div>
    </div>
  );
}
