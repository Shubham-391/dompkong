import React, {useState} from 'react';
import plus from "../assets/images/plus.webp";
import minus from "../assets/images/minus.webp";

function Accordian({heading,content}) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <>
      <div className='relative'>
        <div
          onClick={() => setAccordionOpen(!accordionOpen)}
          className={`pt-[25px] flex justify-between w-full items-center cursor-pointer durati on-300 ${
            accordionOpen ? "pb-0" : "pb-[17px]"
          }`}
        >
          <p className="text-white font-montserrat text-[22px] not-italic font-bold leading-[108.744%]">
            {heading}
          </p>
          {accordionOpen
            ? <img className="minus" src={minus} alt="minus" /> : <img className="plus" src={plus} alt="plus" />}
          
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-linear ${
            accordionOpen ? "min-h-[95px] pt-[9px] opacity-1" : "h-0 min-h-0 opacity-0 pt-0"
          } `}
        >
          <p className="text-white font-montserrat text-base not-italic font-normal leading-[160%]">
            {content}
          </p>
        </div>
      </div>
      <div className="border border-solid border-[#FDDA60] shadow-[0_0_15px_1px_#FDDA60]"></div>
    </>
  );
}

export default Accordian