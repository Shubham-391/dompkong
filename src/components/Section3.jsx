import React from "react";
import goldenApe from "../assets/images/goldenApe.webp";
import brownApe from "../assets/images/brownApe.webp";
import Rambo from "../assets/images/Rambo.webp";
import Albert from "../assets/images/Albert.webp";
import Prince from "../assets/images/Prince.webp";
import Royals from "../assets/images/Royals.webp";
import HeMan from "../assets/images/HeMan.webp";
import Anonymous from "../assets//images/Anonymous.webp";
import Pac from "../assets/images/Pac.webp";
import Elvis from "../assets/images/Elvis.webp";

function Section3() {
  return (
    <>
      <div className="min-h-[1124px] w-full bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
        {/* main box */}
        <div className="absolute w-[182px] md:w-[364px] h-[182px] md:h-[364px] rounded-[50%] bg-[#FDDA60] blur-[180px] top-[10%] md:top-[34%]"></div>
        <h1 className="pt-[44px] text-white text-center font-azo text-[64px] not-italic font-normal leading-[108.744%]">
          THE KONGS
        </h1>
        <img
          className="max-w-[786px] translate-y-[-70px] w-full relative z-[2]"
          src={goldenApe}
          alt="golden ape"
        />
        {/* side boxes left side */}
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-0 left-[-2%]">
          <img
            className="rounded-[8px] border-none"
            src={brownApe}
            alt="brown ape"
          />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[19%] left-[4%]">
          <img className="rounded-[8px] border-none" src={Rambo} alt="ape" />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[38%] left-[12%]">
          <img className="rounded-[8px] border-none" src={Albert} alt="ape" />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[57%] left-[4%]">
          <img className="rounded-[8px] border-none" src={Prince} alt="ape" />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] bottom-[8%] left-[-2%]">
          <img
            className="rounded-[8px] border-none"
            src={Royals}
            alt="brown ape"
          />
        </div>
        {/* side boxes right side */}
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] top-0 right-[-2%]">
          <img
            className="rounded-[8px] border-none"
            src={HeMan}
            alt="brown ape"
          />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] top-[19%] right-[4%]">
          <img
            className="rounded-[8px] border-none"
            src={Anonymous}
            alt="ape"
          />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] top-[38%] right-[12%]">
          <img className="rounded-[8px] border-none" src={Pac} alt="ape" />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-none shadow-[0_0_15px_0_#FDDA60] top-[57%] right-[4%]">
          <img className="rounded-[8px] border-none" src={Elvis} alt="ape" />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] bottom-[8%] right-[-2%]">
          <img
            className="rounded-[8px] border-none"
            src={brownApe}
            alt="brown ape"
          />
        </div>

        <div className="flex flex-wrap justify-center block md:hidden">
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]">
            <img className="rounded-[8px] border-none" src={brownApe} alt="brown ape"/>
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]">
            <img className="rounded-[8px] border-none" src={Rambo} alt="ape" />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]">
            <img className="rounded-[8px] border-none" src={Albert} alt="ape" />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]">
            <img className="rounded-[8px] border-none" src={Prince} alt="ape" />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]">
            <img className="rounded-[8px] border-none" src={Royals} alt="brown ape" />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60]">
            <img className="rounded-[8px] border-none" src={HeMan} alt="brown ape" />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60]">
            <img className="rounded-[8px] border-none" src={Anonymous} alt="ape" />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60]">
            <img className="rounded-[8px] border-none" src={Pac} alt="ape" />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-none shadow-[0_0_15px_0_#FDDA60]">
            <img className="rounded-[8px] border-none" src={Elvis} alt="ape" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
