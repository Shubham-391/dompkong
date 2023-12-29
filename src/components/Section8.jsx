import plus from "../assets/images/plus.webp";
import minus from "../assets/images/minus.webp";
import React, { useState } from "react";
import Accordian from "./Accordian";
import section8ape from "../assets/images/section8ape.webp";
import wtwitter from "../assets/images/wtwitter.webp";
import wtelegram from "../assets/images/wtelegram.webp";
import wmlogo from "../assets/images/wmlogo.webp";
import wdiscord from "../assets/images/wdiscord.webp";
import wdiamond from "../assets/images/wdiamond.webp";
import wboat from "../assets/images/wboat.webp";

function Section8() {
  return (
    <>
      <div
        className="min-h-[973px] bg-local bg-no-repeat bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url("/src/assets/images/section8bg.webp")` }}
      >
        <div className="absolute w-[132px] h-[132px] rounded-[50%] bg-[#FDDA60] blur-[146px] top-[31%] left-[3%]"></div>
        <div className="absolute w-[247px] h-[247px] rounded-[50%] bg-[#FDDA60] blur-[146px] bottom-[-5%] left-[-4%] hidden min-[992px]:block"></div>
        <div className="max-w-[920px] mx-auto px-3">
          <h2 className="text-white text-center font-azo text-[64px] not-italic font-normal leading-[108.744%] pb-[30px]">
            FAQs
          </h2>
          <Accordian
            heading="Arcu faucibus diam feugiat magna etiam."
            content="Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh."
          />
          <Accordian
            heading="Fermentum tortor aenean."
            content="Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh."
          />
          <Accordian
            heading="Dictum est amet sollicitudin."
            content="Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh."
          />
          <Accordian
            heading="Sed vulputate mi faucibus."
            content="Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh."
          />
          <Accordian
            heading="Commodo placerat ultricies."
            content="Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh."
          />
          <Accordian
            heading="Nunc amet cursus morbi donec."
            content="Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh."
          />
          <div className="flex justify-center">
            <img
              className="max-w-[310px] mt-[92px] mb-[28px]"
              src={section8ape}
              alt="ape"
            />
          </div>
          <div className="flex justify-center gap-6">
            <a
              className="hover:translate-y-[-3px] transition-all duration-300 ease-linear"
              href="https://twitter.com/i/flow/login"
              target="_blank"
            >
              <img src={wtwitter} alt="twitter" />
            </a>
            <a
              className="hover:translate-y-[-3px] transition-all duration-300 ease-linear"
              href="https://opensea.io/"
              target="_blank"
            >
              <img src={wboat} alt="opensea logo" />
            </a>
            <a
              className="hover:translate-y-[-3px] transition-all duration-300 ease-linear"
              href="#"
            >
              <img src={wdiamond} alt="diamond" />
            </a>
            <a
              className="hover:translate-y-[-3px] transition-all duration-300 ease-linear"
              href="https://discord.com/"
              target="_blank"
            >
              <img src={wdiscord} alt="discord logo" />
            </a>
            <a
              className="hover:translate-y-[-3px] transition-all duration-300 ease-linear"
              href="#"
            >
              <img src={wmlogo} alt="M letter logo" />
            </a>
            <a
              className="hover:translate-y-[-3px] transition-all duration-300 ease-linear"
              href="https://web.telegram.org/k/"
              target="_blank"
            >
              <img src={wtelegram} alt="telegram logo" />
            </a>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white mt-[27px]"></div>
        <p className="text-white font-montserrat text-base not-italic font-normal leading-normal text-center mt-[16px]">
          © DomPKong 2022
        </p>
      </div>
    </>
  );
}

export default Section8;
