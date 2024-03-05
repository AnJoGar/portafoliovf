import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]  "
      id="footer"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            {/* Use anchor tag for external link */}
            <a
              href="https://github.com/AnJoGar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
              style={{ zIndex: 100 }}
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>


          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>

            

            <a
              href="https://www.linkedin.com/in/anderson-jordan-175591268/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
              style={{ zIndex: 100 }}
            >
              <RxDiscordLogo  />
              <span className="text-[15px] ml-[6px]">Linkedim</span>
            </a>


          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">andjor2019@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; WebChain Dev 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
