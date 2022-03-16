import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";

export const Navbar = () => {
  const [rotate, setRotate] = React.useState(false);
  const link = React.useRef<HTMLAnchorElement>(null);
  return (
    <nav className="p-5 flex justify-between flex-wrap bg-white sticky top-0 left-0 z-10 shadow-sm">
      <Link href="/">
        <a className="block w-fit">
          <Image
            loading="lazy"
            src="/Images/Blue-Logo.png"
            width={105}
            height={24}
            alt="AIESEC Logo"
            className="object-contain"
          />
        </a>
      </Link>

      <MenuIcon
        className={`transition-all duration-300 h-5 w-5 text-navy ${
          rotate && "rotate-90"
        }`}
        onClick={() => setRotate(!rotate)}
      />
      <div
        className="links flex flex-col w-full text-navy font-normal"
        style={{
          height: rotate
            ? `${link.current && link.current.clientHeight * 5}px`
            : "0px",
        }}
      >
        <Link href="/recursos">
          <a className="text-xs p-1" ref={link}>
            Recursos
          </a>
        </Link>
        <Link href="/metas">
          <a className="text-xs p-1">Metas</a>
        </Link>
        <a
          href="https://panacademyedu.wixsite.com/website/copia-de-2-f-l-bulls"
          className="text-xs p-1"
        >
          Panacademy
        </a>
        <Link href="/whatsapp">
          <a className="text-xs p-1">Tool de Whatsapp</a>
        </Link>
        <a href="" className="text-xs p-1">
          Contactos
        </a>
      </div>
    </nav>
  );
};
