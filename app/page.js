import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center text-white flex-col h-[44vh] gap-4 px-5 md:px-0 text-xs md:text-base">
        <div className="flex items-center justify-center gap-6 text-3xl font-bold md:gap-20 md:text-5xl">Buy me a Tea
          <span>
          <img src="/tea2.gif" width = {40} alt=""/>
          </span>
        </div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>
        <p className="text-center md:text-left">
          A place where yours fan can buy you a tea. Unleash the power of your fans and get your project funded
        </p>
        <div>
           <Link href={"/login"}>
           <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
           </Link>
           <Link href={"/about"}>
           <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
           </Link>
        </div>
        </div>
        <div className="h-1 bg-white opacity-10"></div>
        
        <div className="container px-10 pb-32 mx-auto mt-10 text-white">
          <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a chai</h2>
          <div className="flex justify-around gap-5">
          <div className="flex flex-col items-center justify-center space-y-3 item">
              <img className="text-black rounded-full item bg-slate-400" width={80} src="/man.jpeg" alt="" />
              <p className="font-bold text-center">Fans want to help</p>
              <p className="text-center ">Your fans are available for you to help you</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 item">
              <img className="text-black rounded-full item bg-slate-400" width={80} src="/coin.jpeg" alt="" />
              <p className="font-bold text-center">Fans want to help</p>
              <p className="text-center ">Your fans are available to donate you</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 item">
              <img className="text-black rounded-full item bg-slate-400" width={80} src="/group.png" alt="" />
              <p className="font-bold text-center">Fans want to help</p>
              <p className="text-center ">Your fans are available to collab with you and make community with you</p>
            </div>
          </div>
        </div>
        <div className="h-1 bg-white opacity-10"></div>
        <div className="container flex flex-col items-center justify-center pt-10 pb-32 mx-auto text-white">
        <h2 className="text-3xl font-bold text-center mb-14">Learn More About Us</h2>
           <img src="/aboutus.jpeg" alt="" />
        </div>
    </>
  );
}
