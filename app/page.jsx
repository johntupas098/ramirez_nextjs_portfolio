import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-white h-[100vh] w-full">

        <div className="flex items-center justify-center flex-col gap-[25x]"> 
            <Image
            src="/profile.png"
            width={500}
            height={500}
            alt="profile"
            />
            <h2 className="text-black text-[60px] font-bold">Wayne Ramirez</h2>
            <p className="max-w-[500px] w-full text-black">siomai rice lover</p>
        </div>
    </div>
  );
}
