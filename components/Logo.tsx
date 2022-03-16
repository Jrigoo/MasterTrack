import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  LC: {
    name: string;
    href: string;
    size?: number;
  };
}

export const Logo: React.FC<Props> = ({ LC }) => {
  return (
    <Link href={LC.href}>
      <a className="rounded-full bg-blanco shadow-default grid place-content-center">
        <Image
          loading="lazy"
          width={LC.size || 80}
          height={LC.size || 80}
          alt={`AIESEC en ${LC.name}`}
          src={`/Images/LCs/${LC.name}.png`}
          className="object-contain"
        />
      </a>
    </Link>
  );
};
