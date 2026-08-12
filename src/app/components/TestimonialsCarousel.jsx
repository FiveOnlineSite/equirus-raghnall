"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote: "Equirus Raghnall brought clarity to a complex insurance decision. Their team listened closely, explained every option, and helped us choose protection that truly fits our needs.",
    name: "Kashish Shah",
    imagePosition: "18% center",
  },
  {
    quote: "The advice was thoughtful, transparent, and refreshingly practical. We now have a stronger insurance programme and far greater confidence in how our risks are managed.",
    name: "Ritik Jaiswal",
    imagePosition: "50% center",
  },
  {
    quote: "From policy review through claims support, the experience has been seamless. The team combines deep expertise with the responsiveness of a trusted long-term partner.",
    name: "Tinu Singh",
    imagePosition: "82% center",
  },
   {
    quote: "From policy review through claims support, the experience has been seamless. The team combines deep expertise with the responsiveness of a trusted long-term partner.",
    name: "Mohan Singh",
    imagePosition: "82% center",
  },
   {
    quote: "From policy review through claims support, the experience has been seamless. The team combines deep expertise with the responsiveness of a trusted long-term partner.",
    name: "Raj Singh",
    imagePosition: "82% center",
  },
   {
    quote: "From policy review through claims support, the experience has been seamless. The team combines deep expertise with the responsiveness of a trusted long-term partner.",
    name: "Lal Singh",
    imagePosition: "82% center",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="overflow-hidden bg-[#075409] py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.04em] text-white/90">Words of Trust</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-[40px]">Trusted by People Like You</h2>
        </div>

        <Swiper
          className="testimonials-swiper mx-auto mt-12 max-w-[1160px] !pb-12"
          modules={[Autoplay, Pagination]}
          loop
          speed={700}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          grabCursor
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide className="!h-auto" key={testimonial.name}>
              <article className="flex h-full min-h-[280px] flex-col rounded-lg bg-white p-6 text-[#242424] shadow-sm md:min-h-[300px] md:p-7">
                <span className="font-serif text-4xl font-bold leading-none text-black" aria-hidden="true">“</span>
                <p className="mt-3 text-sm leading-7 text-[#555555]">{testimonial.quote}</p>
                <div className="mt-auto flex items-center gap-3 pt-8">
                  <span className="relative size-9 shrink-0 overflow-hidden rounded-full bg-[#eef0ff]">
                    <Image src="/assets/home-hero.png" alt="" fill sizes="36px" className="object-cover" style={{ objectPosition: testimonial.imagePosition }} />
                  </span>
                  <p className="font-semibold text-[#181818]">{testimonial.name}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
