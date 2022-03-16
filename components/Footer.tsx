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
    <footer className="w-full bg-navy p-5">
      <div className="flex justify-around space-x-2 mb-3">
        <a href="https://www.instagram.com/ogx.canaleros/">
          <FontAwesomeIcon icon={faInstagram} className="w-7 h-7 text-blanco" />
        </a>
        <a href="https://www.linkedin.com/company/aiesec-panama/mycompany/?viewAsMember=true">
          <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7 text-blanco" />
        </a>
        <a href="https://github.com/Jrigoo">
          <FontAwesomeIcon icon={faGithub} className="w-7 h-7 text-blanco" />
        </a>
      </div>
      <p className="text-sm py-5 text-center text-blanco font-light">
        &copy; Made by <b>Jrigoo</b> {date.getFullYear()}{" "}
      </p>
    </footer>
  );
};
