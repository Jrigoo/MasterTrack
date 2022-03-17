import React from "react";
import { ICommittee } from "../../utils/goals";
import { Numbers } from "./Numbers";
interface Props {
  comite: ICommittee;
}

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const LC: React.FC<Props> = ({ comite }) => {
  return (
    <section className="my-5 relative">
      <h1 className="title">
        Semester <b>Overall</b>
      </h1>
      <Numbers
        goals={comite.semester}
        rounded="rounded-full"
        className="flex flex-wrap justify-evenly md:grid md:gap-3 md:place-content-center md:place-items-center md:grid-cols-[repeat(4,130px)] lg:md:grid-cols-[repeat(7,130px)]"
      />

      {/* Goals Swiper */}
      <div className="grid place-content-center grid-cols-1 sm:grid-cols-[450px] md:grid-cols-[550px]">
        <div className="relative flex items-center justify-between px-5">
          <ChevronLeftIcon className="izq w-10 h-10 absolute left-0 z-50 hidden sm:block" />
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".izq",
              nextEl: ".der",
            }}
            className="w-full my-5"
          >
            {comite.months.map((mes) => (
              <SwiperSlide key={mes.name}>
                <div className="w-full">
                  <h1 className="title">
                    <b>{mes.name}</b>
                  </h1>
                  <div className="pt-3 pb-10">
                    <Numbers
                      goals={mes}
                      rounded="rounded-md"
                      className="flex flex-wrap justify-evenly sm:grid sm:gap-3 sm:place-content-center sm:place-items-center sm:grid-cols-[repeat(3,110px)] md:grid-cols-[repeat(3,130px)]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <ChevronRightIcon className="der w-10 h-10 absolute right-0 z-50 hidden sm:block" />
        </div>
      </div>
    </section>
  );
};

export default LC;
