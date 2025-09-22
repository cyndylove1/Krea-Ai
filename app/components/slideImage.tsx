"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import img1 from "../assets/ai.png";
import img2 from "../assets/image3 (3).png";
import img3 from "../assets/image3 (2).png";
import img4 from "../assets/imageSource.png";
import img5 from "../assets/0ab8009c-6ce1-48df-b94c-b27e7b865cc4.jpg";
import img6 from "../assets/0af47594-5f83-43c8-8302-ebb743a22432.jpg";
import Button from "./button";

export default function SlideImage() {
  const images = [
    {
      src: img1,
      title: "WAN 2.2 Image generation",
      desc: "Generate complex images with the brand new and powerful WAN 2.2 model Exceptional prompt adherence and ultra-realistic textures.",
    },
    {
      src: img2,
      title: "WAN 2.2 Image generation",
      desc: "Generate complex images with the brand new and powerful WAN 2.2 model Exceptional prompt adherence and ultra-realistic textures.",
    },
    {
      src: img3,
      title: "WAN 2.2 Image generation",
      desc: "Generate complex images with the brand new and powerful WAN 2.2 model Exceptional prompt adherence and ultra-realistic textures.",
    },
    {
      src: img1,
      title: "WAN 2.2 Image generation",
      desc: "Generate complex images with the brand new and powerful WAN 2.2 model Exceptional prompt adherence and ultra-realistic textures.",
    },
    {
      src: img2,
      title: "WAN 2.2 Image generation",
      desc: "Generate complex images with the brand new and powerful WAN 2.2 model Exceptional prompt adherence and ultra-realistic textures.",
    },
    {
      src: img3,
      title: "WAN 2.2 Image generation",
      desc: "Generate complex images with the brand new and powerful WAN 2.2 model Exceptional prompt adherence and ultra-realistic textures.",
    },
    {
      src: img1,
      title: "WAN 2.2 Image generation",
      desc: "Generate complex images with the brand new and powerful WAN 2.2 model Exceptional prompt adherence and ultra-realistic textures.",
    },
    {
      src: img2,
      title: "WAN 2.2 Image generation",
      desc: "Generate complex images with the brand new and powerful WAN 2.2 model Exceptional prompt adherence and ultra-realistic textures.",
    },
    {
      src: img3,
      title: "WAN 2.2 Image generation",
      desc: "Generate complex images with the brand new and powerful WAN 2.2 model Exceptional prompt adherence and ultra-realistic textures.",
    },
  ];
  const slide = [
    {
      src: img4,
      title: "FLUX.1 Krea",
      desc: "We're making the weights to our FLUX.1 Krea model open-source, Download and run our models weights, read the technical report, or generate within it in Krea Image.",
    },
    {
      src: img5,
      title: "FLUX.1 Krea",
      desc: "We're making the weights to our FLUX.1 Krea model open-source, Download and run our models weights, read the technical report, or generate within it in Krea Image.",
    },
    {
      src: img6,
      title: "FLUX.1 Krea",
      desc: "We're making the weights to our FLUX.1 Krea model open-source, Download and run our models weights, read the technical report, or generate within it in Krea Image.",
    },
  ];

  return (
    <div className="w-full md:ml-4 mt-10 ">
      <div className="flex flex-col md:gap-4 md:flex-row ">
        {/* Left Slider */}
        <div className="mx-4 md:mx-0 md:w-8/12 relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            className="lg:h-[400px] md:h-[300px] h-[200px] w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full">
                  <Image
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="rounded-[15px]"
                    priority={index === 0}
                  />
                  {/* Text Overlay */}
                  <div className="absolute bottom-6 left-6 text-white flex items-center justify-between">
                    <div className="max-w-[60%]">
                      <h2 className="lg:text-[30px] text-[10px] font-bold">{image.title}</h2>
                      <p className="lg:text-[15px] text-[9px]">{image.desc}</p>
                    </div>
                    <div>
                      <Button
                        className="lg:h-[50px] lg:text-[16px] text-[9px] h-[20px] w-[70px] lg:w-[150px] bg-white mx-4 "
                        text="Try Wan 2.2"
                        type="button"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* pagination */}
          <div className="swiper-pagination my-4 flex justify-end"></div>
        </div>

        {/* Right Slider */}
        <div className="mx-4 md:mx-0 md:w-4/12 relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            className="md:w-[500px] w-full"
          >
            {slide.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative lg:h-[400px] md:h-[300px] h-[200px] md:w-[500px] w-full">
                  <Image
                    src={image.src}
                    alt={`Static Slide ${index + 1}`}
                    fill
                    className="rounded-[15px] object-cover "
                  />
                  {/* Text Overlay */}

                  <div className="absolute bottom-10 left-6 text-white max-w-[65%]">
                    <h2 className="lg:text-[20px] text-[10px] font-bold">{image.title}</h2>
                    <p className="lg:text-xs text-[9px]">{image.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Arrows */}
          <div className="flex justify-end gap-[10px] mt-3 md:mx-14 ">
            <Button
              className="custom-prev w-[30px] h-[30px] flex items-center justify-center bg-[#efefef]"
              text={<IoIosArrowBack />}
              type="button"
            />
            <Button
              className="custom-next w-[30px] h-[30px] flex items-center justify-center bg-[#efefef]"
              text={<IoIosArrowForward />}
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
