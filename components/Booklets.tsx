import React from "react";
import Image from "next/image";

export const Booklets = () => {
  return (
    <section className="mb-8">
      <a href="https://drive.google.com/drive/folders/1QY9CHiJ3tQTQ1JIz99hGgNiRcb3VFYFC?usp=sharing">
        <h1 className="text-lg text-center mb-5">
          Sales <b>Booklets</b>
        </h1>
      </a>
      <div className="flex justify-around flex-wrap space-y-2">
        <a
          href="https://docs.google.com/presentation/d/1TMg12X14gikYvr4MfiB5peShr5PNqv0t2KvfWnxLuL8/edit?usp=sharing"
          className=""
        >
          <div className="w-fit bg-white shadow-default px-2 py-3 rounded-md grid place-items-center mx-5">
            <Image
              loading="lazy"
              width={114}
              height={35}
              alt="AIESEC Product"
              src="/Images/ELD/GTa.png"
              className="object-contain"
            />
          </div>
        </a>
        <a href="" className="">
          <div className="w-fit bg-white shadow-default px-2 py-3 rounded-md grid place-items-center">
            <Image
              loading="lazy"
              width={114}
              height={35}
              alt="AIESEC Product"
              src="/Images/ELD/GTe.png"
              className="object-contain"
            />
          </div>
        </a>
        <a
          href="https://docs.google.com/presentation/d/1X7zJZLKt8c_bd5tKBof1irCkTtJJvRmtGEfEJIcL5wg/edit?usp=sharing"
          className=""
        >
          <div className="w-fit bg-white shadow-default px-2 py-3 rounded-md grid place-items-center">
            <Image
              loading="lazy"
              width={114}
              height={35}
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
