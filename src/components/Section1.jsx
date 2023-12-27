import React from "react";
import section1cards from "../assets/images/section1cards.webp"

function Section1() {
  return (
    <>
      <div className="min-h-[536px] bg-[#0A0A0A] flex items-center">
        <div className="flex max-w-[1164px] mx-auto px-3 w-full translate-y-[20px] flex-wrap ">
          <div className="w-full lg:w-1/2 pl-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-start">
            <h2 className="text-white font-azo text-[45px] sm:text-[64px] not-italic font-normal leading-[108.744%]">
              About
            </h2>
            <p className="text-white font-montserrat text-base not-italic font-normal leading-[160%] max-w-[500px]">
              Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra
              amet et. Erat nam molestie. Vitae mollis lacus senectus mattis
              nisl. Porta , adipiscing sed mus diam amet, ac sed tellus.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
            <div className="absolute w-[150px] sm:w-[216px] h-[150px] sm:h-[216px] bg-[#FDDA60] rounded-[50%] blur-[110px] sm:blur-[131px] top-[10%] md:right-[40%] lg:right-[30%]"></div>
            <img className="relative max-w-[563px] w-full" src={section1cards} alt="cards" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
