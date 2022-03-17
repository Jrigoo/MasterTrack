import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  LC: {
    name: string;
    href: string;
  };
  className: string;
}

export const Logo: React.FC<Props> = ({ LC, className }) => {
  return (
    <Link href={LC.href}>
      <a
        className={`w-fit rounded-full bg-white shadow-default grid place-content-center hover:scale-110 transition-all duration-200 ${className}`}
      >
        <div className="w-full h-full relative">
          <Image
            loading="lazy"
            width={90}
            height={90}
            alt={`AIESEC en ${LC.name}`}
            src={`/Images/LCs/${LC.name}.png`}
            layout="responsive"
            className="object-contain"
          />
        </div>
      </a>
    </Link>
  );
};
