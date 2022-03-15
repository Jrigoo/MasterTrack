import React from "react";
import { ICommittee } from "../utils/goals";
import { Numbers } from "./Numbers";
interface Props {
  comite: ICommittee;
}

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const LC: React.FC<Props> = ({ comite }) => {
  return (
    <section className="my-5">
      <div className="mb-10">
        <h1 className="text-lg text-center">
          Semester <b>Overall</b>
        </h1>
        <Numbers goals={comite.semester} className="rounded-full" />
      </div>

      {/* Goals Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="my-5"
      >
        {comite.months.map((mes) => (
          <SwiperSlide key={mes.name}>
            <div className="w-full">
              <h1 className="text-lg text-center">
                <b>{mes.name}</b>
              </h1>
              <div className="pt-3 pb-10">
                <Numbers goals={mes} className="rounded-md" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LC;
