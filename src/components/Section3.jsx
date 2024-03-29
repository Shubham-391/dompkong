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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Section3() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    easing: "linear",
    speed: "5000",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="md:min-h-[1124px] w-full bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
        {/* main box */}
        <div className="absolute w-[182px] md:w-[364px] h-[182px] md:h-[364px] rounded-[50%] bg-[#FDDA60] blur-[180px] top-[10%] md:top-[34%]"></div>
        <h1
          className="sm:pt-[44px] text-white text-center font-azo text-[45px] sm:text-[64px] not-italic font-normal leading-[108.744%]"
          data-aos="zoom-in"
          data-aos-once="true"
        >
          THE KONGS
        </h1>
        <Slider
          className="min-[1200px]:hidden block max-w-[1416px] mx-auto px-3 w-full mt-6"
          data-aos="zoom-in"
          data-aos-once="true"
          {...settings}
        >
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]"
              src={brownApe}
              alt="brown ape"
            />
          </div>
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]"
              src={Rambo}
              alt="ape"
            />
          </div>
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]"
              src={Albert}
              alt="ape"
            />
          </div>
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]"
              src={Prince}
              alt="ape"
            />
          </div>
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]"
              src={Royals}
              alt="brown ape"
            />
          </div>
        </Slider>
        <img
          className="max-w-[786px] translate-y-[-70px] w-full relative z-[2] object-cover"
          data-aos="zoom-in"
          data-aos-once="true"
          src={goldenApe}
          alt="golden ape"
        />
        <Slider
          className="min-[1200px]:hidden block max-w-[1416px] mx-auto px-3 w-full mb-6"
          data-aos="zoom-in"
          data-aos-once="true"
          {...settings}
        >
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60]"
              src={HeMan}
              alt="brown ape"
            />
          </div>
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60]"
              src={Anonymous}
              alt="ape"
            />
          </div>
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60]"
              src={Pac}
              alt="ape"
            />
          </div>
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-none shadow-[0_0_15px_0_#FDDA60"
              src={Elvis}
              alt="ape"
            />
          </div>
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]"
              src={brownApe}
              alt="brown ape"
            />
          </div>
        </Slider>
        {/* side boxes left side */}
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-0 left-[-2%]"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <img
            className="rounded-[8px] border-none"
            src={brownApe}
            alt="brown ape"
          />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[19%] left-[4%]"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <img className="rounded-[8px] border-none" src={Rambo} alt="ape" />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[38%] left-[6%] min-[1350px]:left-[12%]"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <img className="rounded-[8px] border-none" src={Albert} alt="ape" />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[57%] left-[4%]"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <img className="rounded-[8px] border-none" src={Prince} alt="ape" />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] bottom-[8%] left-[-2%]"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <img
            className="rounded-[8px] border-none"
            src={Royals}
            alt="brown ape"
          />
        </div>
        {/* side boxes right side */}
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] top-0 right-[-2%]"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <img
            className="rounded-[8px] border-none"
            src={HeMan}
            alt="brown ape"
          />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] top-[19%] right-[4%]"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <img
            className="rounded-[8px] border-none"
            src={Anonymous}
            alt="ape"
          />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] top-[38%] right-[6%] min-[1350px]:right-[12%]"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <img className="rounded-[8px] border-none" src={Pac} alt="ape" />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-none shadow-[0_0_15px_0_#FDDA60] top-[57%] right-[4%]"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <img className="rounded-[8px] border-none" src={Elvis} alt="ape" />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] bottom-[8%] right-[-2%]"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <img
            className="rounded-[8px] border-none"
            src={brownApe}
            alt="brown ape"
          />
        </div>
      </div>
    </>
  );
}

export default Section3;
