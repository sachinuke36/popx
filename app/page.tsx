import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="max-w-full w-full h-screen flex items-center  justify-center">
      <Card className="max-w-[500px] flex flex-col justify-between space-y-5 h-[500px] w-[300px] md:w-[400px] border p-4 pb-6">
          <div className="text-center text-5xl font-bold mt-5">Pop<span className="text-[#6C25FF]">X</span></div>
           <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Welcome to PopX</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officia.</p>
            <div className="mx-auto w-full flex justify-center flex-col gap-4">
             <Link href={'/register'}> <Button className="w-full bg-[#6C25FF] hover:bg-purple-800">Create an account</Button></Link>
             <Link href={'/login'}> <Button className="w-full bg-[#E9DFFC] text-black hover:bg-purple-400">
                Already registered? Login
                </Button></Link>
            </div>
           </div>
            
      </Card>
     
    </div>
  );
}
