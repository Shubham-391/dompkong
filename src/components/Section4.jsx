import React, { useState } from "react";
import wine from "../assets/images/wine.webp";
import Button1 from "./Button1";

function Section4() {
  const [add, setAdd] = useState(0);
  function sub() {
    if (add <= 0) {
      "0";
    } else {
      setAdd(add - 1);
    }
  }
  return (
    <>
      <div
        className="min-h-[928px] bg-local bg-no-repeat bg-cover bg-center section4-bg flex items-center py-12 min-[800px]:py-0 relative overflow-hidden"
      >
        <div className="absolute w-[173px] rounded-[50%] h-[173px] bg-[#FDDA60] blur-[146px] left-0 top-[9%] hidden sm:block"></div>
        <div className="absolute w-[296px] h-[296px] rounded-[50%] bg-[#FDDA60] blur-[146px] right-[-5%] top-[68%] min-[800px]:top-[33%] hidden sm:block"></div>
        <div className="max-w-[1040px] px-3 mx-auto flex items-center w-full flex-wrap gap-y-6">
          <div className="w-full min-[800px]:w-1/2 flex justify-center min-[800px]:justify-start">
            <img className="w-[200px] sm:w-[354px]" src={wine} alt="wine" />
          </div>
          <div className="w-full min-[800px]:w-1/2 flex justify-center min-[800px]:justify-start">
            <div className="max-w-[511px] w-full relative">
              <h2 className="text-center min-[800px]:text-start text-white font-azo text-[50px] sm:text-[64px] not-italic font-normal leading-[108.744%] mb-[51px]">
                Mint NFT
              </h2>
              <div>
                <div className="flex justify-between mb-[33px]">
                  <p className="text-white font-montserrat text-4xl not-italic font-black leading-[108.744%]">
                    9999
                    <br />{" "}
                    <span className="text-base font-normal leading-[160%]">
                      of 10,000 minted
                    </span>
                  </p>
                  <p className="text-white font-montserrat text-4xl not-italic font-black leading-[108.744%] w-[177px]">
                    .2 ETH
                    <br />{" "}
                    <span className="text-base font-normal leading-[160%]">
                      per NFT
                    </span>
                  </p>
                </div>
                <div className="flex justify-between mb-[49px]">
                  <p className="text-white font-montserrat text-4xl not-italic font-black leading-[108.744%]">
                    Max 9
                    <br />{" "}
                    <span className="text-base font-normal leading-[160%]">
                      NFTs per transaction
                    </span>
                  </p>
                  <p className="text-white font-montserrat text-4xl not-italic font-black leading-[108.744%] w-[177px]">
                    Max 2
                    <br />{" "}
                    <span className="text-base font-normal leading-[160%]">
                      Transaction per wallet
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex mb-[29px]">
                <button className="w-[75px] h-[65px] rounded-[4px] bg-white text-black font-montserrat text-4xl not-italic font-black leading-[108.744%]" onClick={sub}>
                  -
                </button>
                <div className="w-[320px] h-[65px] rounded-[4px] border-2 border-solid border-white text-white font-montserrat text-4xl not-italic font-black leading-[108.744%] flex justify-center items-center ml-[14px] mr-[11px]">
                  {(add <= 9 && add > 0)?'0'+add:add}
                </div>
                <button className="w-[75px] h-[65px] rounded-[4px] bg-white text-black font-montserrat text-4xl not-italic font-black leading-[108.744%]" onClick={()=>setAdd(add + 1)}>
                  +
                </button>
              </div>
              <Button1
                text="MINT NOW"
                className="text-black text-center font-azo text-2xl not-italic font-normal leading-[108.744%] max-w-[494px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
