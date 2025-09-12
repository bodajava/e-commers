"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { categorise } from "@/type/caticorise.type";

export default function CategorySlider({ data }: { data: categorise[] }) {
  return (
    <Swiper
      spaceBetween={20}
      modules={[Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      className="py-8"
      breakpoints={{
        320: { slidesPerView: 2 },   // موبايل صغير
        640: { slidesPerView: 3 },   // موبايل كبير
        768: { slidesPerView: 4 },   // تابلت
        1024: { slidesPerView: 6 },  // لابتوب
        1280: { slidesPerView: 7 },  // شاشات كبيرة
      }}
    >
      {data.map((category : categorise) => (
        <SwiperSlide key={category._id}>
          <div
            className="flex flex-col items-center justify-center 
            w-36 h-40 sm:w-40 sm:h-44 
            bg-white rounded-xl shadow-sm border border-gray-200 
            hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-3">
              <Image
                src={category.image}
                alt={category.name}
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <h3 className="text-center text-gray-700 pt-5 font-medium text-sm sm:text-base">
              {category.name}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
