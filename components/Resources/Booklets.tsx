import React from "react";
import Image from "next/image";

interface Props {
  className: string;
}

export const Booklets: React.FC<Props> = ({ className }) => {
  return (
    <section
      className={`grid grid-cols-1 gap-3 sm:grid-cols-[320px] content-start justify-center mb-4 ${className}`}
    >
      {/* Titulo */}
      <a href="https://drive.google.com/drive/folders/1QY9CHiJ3tQTQ1JIz99hGgNiRcb3VFYFC?usp=sharing">
        <h1 className="title hover:scale-110 transition-all duration-500 hover:underline">
          Sales <b>Booklets</b>
        </h1>
      </a>
      <div className="grid grid-cols-[repeat(2,130px)] gap-3 place-content-center sm:gap-5 sm:grid-cols-[repeat(2,150px)] md:grid-cols-[repeat(2,170px)] ">
        {/* Booklet GTa */}
        <a
          href="https://docs.google.com/presentation/d/1TMg12X14gikYvr4MfiB5peShr5PNqv0t2KvfWnxLuL8/edit?usp=sharing"
          className="w-full h-full col-span-2 flex justify-center items-center sm:col-span-1"
        >
          <div className="w-[130px] bg-white shadow-default rounded-md px-2 py-3 hover:scale-110 transition-all duration-500 sm:px-3 sm:py-4 sm:w-full">
            <Image
              loading="lazy"
              width={256}
              height={79}
              layout="responsive"
              alt="AIESEC Product"
              src="/Images/ELD/GTa.png"
              className="object-contain w-full h-full"
            />
          </div>
        </a>

        {/* Booklet GTe */}
        <a href="">
          <div className="w-[130px] bg-white shadow-default rounded-md px-2 py-3 hover:scale-110 transition-all duration-500 sm:px-3 sm:py-4 sm:w-full">
            <Image
              loading="lazy"
              width={256}
              height={79}
              layout="responsive"
              alt="AIESEC Product"
              src="/Images/ELD/GTe.png"
              className="object-contain w-full h-full"
            />
          </div>
        </a>

        {/* Booklet GV */}
        <a href="https://docs.google.com/presentation/d/1X7zJZLKt8c_bd5tKBof1irCkTtJJvRmtGEfEJIcL5wg/edit?usp=sharing">
          <div className="w-[130px] bg-white shadow-default rounded-md px-2 py-3 hover:scale-110 transition-all duration-500 sm:px-3 sm:py-4 sm:w-full">
            <Image
              loading="lazy"
              width={256}
              height={79}
              layout="responsive"
              alt="AIESEC Product"
              src="/Images/ELD/GV.png"
              className="object-contain w-full h-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
