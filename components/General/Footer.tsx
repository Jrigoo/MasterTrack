import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { fa0 } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  const date = new Date();
  return (
    <footer className="w-full bg-navy pb-5 pt-10 md:pb-8 md:pt-16 lg:pt-20">
      <div className="w-full mb-3 grid place-content-center place-items-center grid-cols-[repeat(3,90px)] md:grid-cols-[repeat(3,120px)]">
        <a href="https://www.instagram.com/ogx.canaleros/">
          <FontAwesomeIcon
            icon={faInstagram}
            className="w-7 text-blanco md:w-10 hover:scale-110 transition-all duration-500"
          />
        </a>
        <a href="https://www.linkedin.com/company/aiesec-panama/mycompany/?viewAsMember=true">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-7 text-blanco md:w-10 hover:scale-110 transition-all duration-500"
          />
        </a>
        <a href="https://github.com/Jrigoo">
          <FontAwesomeIcon
            icon={faGithub}
            className="w-7 text-blanco md:w-10 hover:scale-110 transition-all duration-500"
          />
        </a>
      </div>
      <p className="text-sm py-5 text-center text-blanco font-light">
        &copy; Made by <b>Jrigoo</b> {date.getFullYear()}{" "}
      </p>
    </footer>
  );
};
