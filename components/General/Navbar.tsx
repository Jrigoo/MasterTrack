import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";

export const Navbar = () => {
  const [rotate, setRotate] = React.useState(false);
  const link = React.useRef<HTMLAnchorElement>(null);
  const router = useRouter();
  console.log(router.pathname);
  /* 
  /
  /metas
  /recursos
  /whatsapp
  /
  */
  return (
    <nav className="h-fit p-5 flex justify-between items-center flex-wrap bg-white sticky top-0 left-0 z-10 shadow-sm text-xs md:text-sm lg:px-10">
      <Link href="/">
        <a>
          <div className="relative h-5 w-28 md:w-32 md:h-10 lg:w-48">
            <Image
              src="/Images/ELD/Logo.png"
              alt="AIESEC logo"
              layout="fill"
              className="object-contain"
            />
          </div>
        </a>
      </Link>

      <MenuIcon
        className={`transition-all duration-300 h-5 w-5 text-navy sm:hidden ${
          rotate && "rotate-90"
        }`}
        onClick={() => setRotate(!rotate)}
      />
      <div
        className="links flex flex-col w-full text-navy font-normal sm:flex-row sm:items-center sm:w-fit"
        style={{
          height: rotate
            ? `${link.current && link.current.clientHeight * 5}px`
            : "0px",
        }}
      >
        <Link href="/recursos">
          <a
            className={`p-1 sm:px-2 sm:py-0 md:px-5 lg:px-6 ${
              router.pathname.includes("recursos") && "font-bold"
            }`}
            ref={link}
          >
            Recursos
          </a>
        </Link>
        <Link href="/metas">
          <a
            className={`p-1 sm:px-2 sm:py-0 md:px-5 lg:px-6 ${
              router.pathname.includes("metas") && "font-bold"
            }`}
          >
            Metas
          </a>
        </Link>
        <a
          href="https://panacademyedu.wixsite.com/website/copia-de-2-f-l-bulls"
          className={`p-1 sm:px-2 sm:py-0 md:px-5 lg:px-6 ${
            router.pathname.includes("panacademy") && "font-bold"
          }`}
        >
          Panacademy
        </a>
        <Link href="/whatsapp">
          <a
            className={`p-1 sm:px-2 sm:py-0 md:px-5 lg:px-6 ${
              router.pathname.includes("whatsapp") && "font-bold"
            }`}
          >
            Tool de Whatsapp
          </a>
        </Link>
        <a
          href="https://docs.google.com/spreadsheets/d/1RTo7DT2lBSYe75vaH1-6TFTxYZsBaBjabupmI3bPkr4/edit?usp=sharing"
          className={`p-1 sm:px-2 sm:py-0 md:px-5 lg:px-6 ${
            router.pathname.includes("contactos") && "font-bold"
          }`}
        >
          Contactos
        </a>
      </div>
    </nav>
  );
};
