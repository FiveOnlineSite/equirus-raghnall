"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
    name: "Kashish Shah",
    image: "/assets/home/trusted-avatar-1.png",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
    name: "Ritik Jaiswal",
    image: "/assets/home/trusted-avatar-2.png",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
    name: "Tinu Singh",
    image: "/assets/home/trusted-avatar-3.png",
  },
   {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
    name: "Mohan Singh",
    image: "/assets/home/trusted-avatar-4.png",
  },
   {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
    name: "Raj Singh",
    image: "/assets/about/expert-avatar-1.png",
  },
   {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
    name: "Lal Singh",
    image: "/assets/about/expert-avatar-2.png",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="overflow-hidden bg-[#075409] py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
        <div className="text-center">
          <p className="text-base font-medium uppercase tracking-[0.04em] text-white/90">Words of Trust</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-[40px]">Trusted by People Like You</h2>
        </div>
      </div>

        <Swiper
          className="testimonials-swiper mt-12 w-full !pb-12"
          modules={[Autoplay, Pagination]}
          loop
          speed={700}
          spaceBetween={16}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          grabCursor
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide className="!h-auto" key={testimonial.name}>
              <article className="flex h-full min-h-[320px] flex-col rounded-lg bg-white p-7 text-[#242424] shadow-sm md:min-h-[340px] md:p-8">
                <span className="font-serif text-5xl font-bold leading-none text-black" aria-hidden="true">“</span>
                <p className="mt-5 text-base leading-[1.85] text-[#555555]">{testimonial.quote}</p>
                <div className="mt-auto flex items-center gap-4 pt-8">
                  <span className="relative size-11 shrink-0 overflow-hidden rounded-full bg-[#eef0ff]">
                    <Image src={testimonial.image} alt="" fill sizes="44px" className="object-cover" />
                  </span>
                  <p className="text-xl font-semibold text-[#181818]">{testimonial.name}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
}
