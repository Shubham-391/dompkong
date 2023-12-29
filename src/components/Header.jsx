import React from "react";
import logo from "../assets/images/logo.webp";
import twitterh from "../assets/images/twitterh.webp";
import openseah from "../assets/images/openseah.webp";
import diamond from "../assets/images/diamond.webp";
import discordh from "../assets/images/discordh.webp";
import mletterh from "../assets/images/mletterh.webp";
import telegramh from "../assets/images/telegramh.webp";
import Button1 from "./Button1";

function Header() {
  return (
    <>
      <div className="min-h-[810px] header-bg bg-local bg-no-repeat bg-cover bg-center">
        <div className="max-w-[1164px] mx-auto px-3 w-full pt-[90px] min-[700px]:pt-1.5 flex flex-col items-center relative">
          <Button1
            text="CONNECT WALLET"
            className="text-black text-center font-azo not-italic font-base font-normal leading-[108.744%] uppercase absolute right-[12px] min-[1200px]:right-0 top-[25px]"
          />
          <img className="w-[116px] h-[87px]" src={logo} alt="logo" />
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
          <div className="flex gap-8 flex-wrap justify-center">
            <Button1
              text="Whitepaper"
              className="text-black text-center font-azo not-italic font-base font-normal leading-[108.744%] uppercase"
            />
            <Button1
              text="Mint"
              className="text-black text-center font-azo not-italic font-base font-normal leading-[108.744%] uppercase"
            />
            <Button1
              text="Opensea"
              className="text-black text-center font-azo not-italic font-base font-normal leading-[108.744%] uppercase"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
