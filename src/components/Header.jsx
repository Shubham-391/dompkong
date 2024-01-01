import React from "react";
import logo from "../assets/images/logo.webp";
import twitterh from "../assets/images/twitterh.webp";
import openseah from "../assets/images/openseah.webp";
import diamond from "../assets/images/diamond.webp";
import discordh from "../assets/images/discordh.webp";
import mletterh from "../assets/images/mletterh.webp";
import telegramh from "../assets/images/telegramh.webp";
import Button1 from "./Button1";
import heroalbert from "../assets//images/heroalbert.webp";
import heroprince from "../assets/images/heroprince.webp";
import heropac from "../assets/images/heropac.webp";

function Header() {
  return (
    <>
      <div className="min-h-[810px] min-[1440px]:min-h-screen header-bg bg-no-repeat bg-cover bg-center relative overflow-hidden">
        <img
          className="hidden xl:block absolute w-[641px] bottom-0 right-[-20.5%] min-[1440px]:right-[-14%] z-[3]"
          src={heroalbert}
          alt="ape"
        />
        <img
          className="hidden xl:block absolute w-[417px] z-[2] bottom-0 right-[10.5%]"
          src={heroprince}
          alt="ape"
        />
        <img
          className="absolute w-[405px] bottom-0 right-0 sm:right-[31%]"
          src={heropac}
          alt="ape"
        />
        <div className="max-w-[1164px] mx-auto px-3 w-full min-[700px]:pt-1.5 flex flex-col items-center relative">
          <Button1
            text="CONNECT WALLET"
            className="text-black text-center font-azo not-italic text-[12px] min-[400px]:text-base font-normal leading-[108.744%] uppercase absolute right-[12px] min-[1200px]:right-0 top-[25px]"
          />
          <div className="w-full justify-start flex sm:justify-center">
            <img className="w-[116px] h-[87px]" src={logo} alt="logo" />
          </div>
          <div className="flex gap-6 mt-[19px] mb-[39px]">
            <a
              className="hover:translate-y-[-3px] transition-all duration-300 ease-linear"
              href="https://twitter.com/i/flow/login"
              target="_blank"
            >
              <img src={twitterh} alt="twitter" />
            </a>
            <a
              className="hover:translate-y-[-3px] transition-all duration-300 ease-linear"
              href="https://opensea.io/"
              target="_blank"
            >
              <img src={openseah} alt="opensea logo" />
            </a>
            <a
              className="hover:translate-y-[-3px] transition-all duration-300 ease-linear"
              href="#"
            >
              <img src={diamond} alt="diamond" />
            </a>
            <a
              className="hover:translate-y-[-3px] transition-all duration-300 ease-linear"
              href="https://discord.com/"
              target="_blank"
            >
              <img src={discordh} alt="discord logo" />
            </a>
            <a
              className="hover:translate-y-[-3px] transition-all duration-300 ease-linear"
              href="#"
            >
              <img src={mletterh} alt="M letter logo" />
            </a>
            <a
              className="hover:translate-y-[-3px] transition-all duration-300 ease-linear"
              href="https://web.telegram.org/k/"
              target="_blank"
            >
              <img src={telegramh} alt="telegram logo" />
            </a>
          </div>
          <h1 className="text-white font-azo text-[45px] min-[450px]:text-[64px] not-italic font-normal leading-[108.744%] text-center">
            WELCOME <br />
            TO{" "}
            <span className="text-[#F1C85D] relative after:absolute after:w-full after:h-[5px] after:bg-[#F1C85D] after:bottom-0 after:left-0">
              DomPKong
            </span>
          </h1>
          <p className="text-white text-center font-montserrat text-base not-italic font-normal leading-[160%] mt-[21px] mb-[35px] max-w-[565px]">
            Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra
            amet et. Erat nam molestie. Vita
          </p>
          <div className="flex min-[500px]:gap-[32px] gap-[4px] flex-wrap justify-center relative z-[5]">
            <Button1
              text="Whitepaper"
              className="text-black text-center font-azo not-italic text-[8px] min-[350px]:text-[12px] min-[500px]:text-base font-normal leading-[108.744%] uppercase"
            />
            <Button1
              text="Mint"
              className="text-black text-center font-azo not-italic text-[8px] min-[350px]:text-[12px] min-[500px]:text-base font-normal leading-[108.744%] uppercase"
            />
            <Button1
              text="Opensea"
              className="text-black text-center font-azo not-italic text-[8px] min-[350px]:text-[12px] min-[500px]:text-base font-normal leading-[108.744%] uppercase"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
