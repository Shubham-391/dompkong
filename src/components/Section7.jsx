import React from "react";
import man1 from "../assets/images/man1.webp";
import man2 from "../assets/images/man2.webp";
import man3 from "../assets/images/man3.webp";
import yinsta from "../assets/images/yinsta.webp";
import ytwitter from "../assets/images/ytwitter.webp";

function Section7() {
  return (
    <>
      <div className="bg-[#0A0A0A] pt-6 sm:pt-0 pb-12 md:pb-0 overflow-hidden">
        <div className="max-w-[1164px] mx-auto px-3">
          <h2
            className="text-white text-center font-azo text-[33px] sm:text-[64px] not-italic font-normal leading-[108.744%] pb-[53px]"
            data-aos="zoom-in"
            data-aos-once="true"
          >
            Meet The Team
          </h2>
          <div className="w-full h-[1px] bg-[#FDDA60] shadow-[0_0_15px_1px_#FDDA60]" data-aos-once="true" data-aos="zoom-in"></div>
          <div className="pt-[23px] pb-[65px] flex flex-wrap gap-y-4">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start" data-aos-once="true" data-aos="fade-right">
              <h3 className="text-white font-montserrat text-[24px] not-italic font-bold leading-[108.744%] pb-3">
                Jaylon Schleifer
              </h3>
              <p className="text-white font-montserrat text-[20px] not-italic font-normal leading-[108.744%] pb-8">
                Carter Septimus
              </p>
              <img
                className="w-[230px] h-[230px] rounded-[20px] border-[3px] border-solid border-[#FDDA60] shadow-[0_0_15px_1px_#FDDA60]"
                src={man1}
                alt="man"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start" data-aos-once="true" data-aos="fade-left">
              <h3 className="text-white font-montserrat text-[24px] not-italic font-semibold leading-[108.744%] pb-3">
                @Jaylon Schleifer
              </h3>
              <p className="text-white font-montserrat text-[20px] not-italic font-normal leading-[108.744%] pb-8 text-center md:text-left">
                Nearly two decades in Business
              </p>
              <p className="mb-[10px] text-white font-montserrat text-base not-italic font-normal leading-[160%] text-center md:text-left">
                Faucibus risus id libero interdum in nisl nibh risus molestie.
                Gravida purus mauris nulla duis est eleifend. Suspendisse eu
                iaculis odio sit. Hac orci massa habitasse congue nulla
                tristique.
              </p>
              <p className="text-white font-montserrat text-base not-italic font-normal leading-[160%] pb-[21px] text-center md:text-left">
                Sem posuere amet, tristique pellentesque quis erat lectus
                mauris, ultricies. Adipiscing pharetra lectus mauris, mi
                pharetra magna in tempus nisi. Sed at in nisl feugiat non in
                amet eu facilisis.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/" target="_blank">
                  <img
                    className="duration-300 drop-shadow-[0_0_5px_#FDDA60] hover:drop-shadow-none"
                    src={yinsta}
                    alt="instagram logo"
                  />
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <img
                    className="duration-300 drop-shadow-[0_0_5px_#FDDA60] hover:drop-shadow-none"
                    src={ytwitter}
                    alt="twitter logo"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#FDDA60] shadow-[0_0_15px_1px_#FDDA60]" data-aos-once="true" data-aos="zoom-in"></div>
          <div className="pt-[34px] pb-[65px] flex flex-wrap gap-y-4">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start" data-aos-once="true" data-aos="fade-right">
              <h3 className="text-white font-montserrat text-[24px] not-italic font-bold leading-[108.744%] pb-3">
                Talan Passaquindici Arcand
              </h3>
              <p className="text-white font-montserrat text-[20px] not-italic font-normal leading-[108.744%] pb-8">
                Jakob Ekstrom Bothman
              </p>
              <img
                className="w-[230px] h-[230px] rounded-[20px] border-[3px] border-solid border-[#FDDA60] shadow-[0_0_15px_1px_#FDDA60]"
                src={man2}
                alt="man"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start" data-aos-once="true" data-aos="fade-left">
              <h3 className="text-white font-montserrat text-[24px] not-italic font-semibold leading-[108.744%] pb-3">
                @Talan Passaquindici Arcand
              </h3>
              <p className="text-white font-montserrat text-[20px] not-italic font-normal leading-[108.744%] pb-8 text-center md:text-left">
                Invester & International Top Model
              </p>
              <p className="mb-[10px] text-white font-montserrat text-base not-italic font-normal leading-[160%] text-center md:text-left">
                Neque hendrerit lectus neque molestie facilisis. Faucibus arcu
                eget facilisis nisl id ultricies. Aliquet eget scelerisque
                posuere habitant mauris quis ridiculus rutrum consectetur.
              </p>
              <p className="text-white font-montserrat text-base not-italic font-normal leading-[160%] pb-[32px] text-center md:text-left">
                Pretium vitae nunc proin nullam turpis eu blandit. Nibh
                ultricies gravida vestibulum nec ultricies. Eleifend egestas non
                nunc, nisl tristique adipiscing non diam fermentum.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/" target="_blank">
                  <img
                    className="duration-300 drop-shadow-[0_0_5px_#FDDA60] hover:drop-shadow-none"
                    src={yinsta}
                    alt="instagram logo"
                  />
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <img
                    className="duration-300 drop-shadow-[0_0_5px_#FDDA60] hover:drop-shadow-none"
                    src={ytwitter}
                    alt="twitter logo"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#FDDA60] shadow-[0_0_15px_1px_#FDDA60]" data-aos-once="true" data-aos="zoom-in"></div>
          <div className="pt-[34px] md:pb-[141px] flex flex-wrap gap-y-4">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start" data-aos-once="true" data-aos="fade-right">
              <h3 className="text-white font-montserrat text-[24px] not-italic font-bold leading-[108.744%] pb-3">
                Alfonso Franci
              </h3>
              <p className="text-white font-montserrat text-[20px] not-italic font-normal leading-[108.744%] pb-8">
                Alfonso Dokidis
              </p>
              <img
                className="w-[230px] h-[230px] rounded-[20px] border-[3px] border-solid border-[#FDDA60] shadow-[0_0_15px_1px_#FDDA60]"
                src={man3}
                alt="man"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start" data-aos-once="true" data-aos="fade-left">
              <h3 className="text-white font-montserrat text-[24px] not-italic font-semibold leading-[108.744%] pb-3">
                @Alfonso Franci
              </h3>
              <p className="text-white font-montserrat text-[20px] not-italic font-normal leading-[108.744%] pb-8 text-center md:text-left">
                Nearly two decades in Business
              </p>
              <p className="mb-[10px] text-white font-montserrat text-base not-italic font-normal leading-[160%] text-center md:text-left">
                A ut sagittis, purus sit integer suspendisse lacus quam auctor.
                Interdum venenatis, sed ligula purus erat. A hac faucibus
                blandit euismod molestie amet nibh scelerisque.
              </p>
              <p className="text-white font-montserrat text-base not-italic font-normal leading-[160%] pb-[25px] text-center md:text-left">
                Fermentum aliquam fames suscipit scelerisque integer mauris
                sollicitudin. Tellus mattis egestas molestie elementum,
                elementum. Urna, in molestie ac quam nisl orci mattis.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/" target="_blank">
                  <img
                    className="duration-300 drop-shadow-[0_0_5px_#FDDA60] hover:drop-shadow-none"
                    src={yinsta}
                    alt="instagram logo"
                  />
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <img
                    className="duration-300 drop-shadow-[0_0_5px_#FDDA60] hover:drop-shadow-none"
                    src={ytwitter}
                    alt="twitter logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section7;
