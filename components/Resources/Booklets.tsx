import React from "react";
import Image from "next/image";

interface Props {
  className: string;
}

export const Booklets: React.FC<Props> = ({ className }) => {
  return (
    <section className={`mb-8 ${className}`}>
      {/* Titulo */}
      <a href="https://drive.google.com/drive/folders/1QY9CHiJ3tQTQ1JIz99hGgNiRcb3VFYFC?usp=sharing">
        <h1 className="title">
          Sales <b>Booklets</b>
        </h1>
      </a>
      <div className="grid grid-cols-[repeat(2,130px)] gap-3 place-content-center sm:gap-5 sm:grid-cols-[repeat(2,150px)]">
        {/* Booklet GTa */}
        <div className="w-full col-span-2 flex justify-center md:col-span-1 ">
          <a
            href="https://docs.google.com/presentation/d/1TMg12X14gikYvr4MfiB5peShr5PNqv0t2KvfWnxLuL8/edit?usp=sharing"
            className="w-[130px] sm:w-[150px]"
          >
            <div className="w-full h-full bg-white shadow-default rounded-md px-2 py-3">
              <Image
                loading="lazy"
                width={256}
                height={79}
                layout="responsive"
                alt="AIESEC Product"
                src="/Images/ELD/GTa.png"
                className="object-contain"
              />
            </div>
          </a>
        </div>
        {/* Booklet GTe */}
        <a href="">
          <div className="w-full h-full bg-white shadow-default rounded-md px-2 py-3">
            <Image
              loading="lazy"
              width={256}
              height={79}
              layout="responsive"
              alt="AIESEC Product"
              src="/Images/ELD/GTe.png"
              className="object-contain"
            />
          </div>
        </a>
        {/* Booklet GV */}
        <a href="https://docs.google.com/presentation/d/1X7zJZLKt8c_bd5tKBof1irCkTtJJvRmtGEfEJIcL5wg/edit?usp=sharing">
          <div className="w-full h-full bg-white shadow-default rounded-md px-2 py-3">
            <Image
              loading="lazy"
              width={256}
              height={79}
              layout="responsive"
              alt="AIESEC Product"
              src="/Images/ELD/GV.png"
              className="object-contain"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
