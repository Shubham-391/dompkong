import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Section6() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
    
  return (
    <>
      <div className="bg-[#0A0A0A]">
        <div className="max-w-[1164px] px-3 mx-auto">
          <h2 className="text-white text-center font-azo text-[64px] not-italic font-normal leading-[108.744%] pb-[52px]">
            Partners
          </h2>
          <div>
            <h2> Responsive </h2>
            <Slider {...settings}>
              <div>
                <h3 className='text-white'>1</h3>
              </div>
              <div>
                <h3 className='text-white'>2</h3>
              </div>
              <div>
                <h3 className='text-white'>3</h3>
              </div>
              <div>
                <h3 className='text-white'>4</h3>
              </div>
              <div>
                <h3 className='text-white'>5</h3>
              </div>
              <div>
                <h3 className='text-white'>6</h3>
              </div>
              <div>
                <h3 className='text-white'>7</h3>
              </div>
              <div>
                <h3 className='text-white'>8</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6