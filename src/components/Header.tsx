import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  function handleMenuClick() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <header className="w-screen fixed">
      <div className="container h-14 w-full flex items-center">
        <button
          className="w-[60px] h-[40px] relative my-7 cursor-pointer items-center scale-50 lg:hidden z-50"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <span
            className={`block absolute h-2 w-full bg-neutral-900 rounded-lg left-0 duration-500 rotate-0 top-0 origin-[left_center] ${
              isMenuOpen ? "rotate-45 -top-[3px] left-2" : ""
            }`}
          />
          <span
            className={`block absolute h-2 w-full bg-neutral-900 rounded-lg left-0 duration-500 rotate-0 top-[18px] origin-[left_center] ${
              isMenuOpen ? "w-0 opacity-0" : ""
            }`}
          />
          <span
            className={`block absolute h-2 w-full bg-neutral-900 rounded-lg left-0 duration-500 rotate-0 top-9 origin-[left_center] ${
              isMenuOpen ? "-rotate-45 top-[39px] left-2" : ""
            }`}
          />
        </button>
        <div className="mx-auto">
          <Image src={"/assets/images/logo.svg"} alt="" width={92} height={32} priority />
        </div>
        <button className="w-[60px] h-[40px] flex items-center justify-center" aria-label="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="none"
            viewBox="0 0 23 23"
          >
            <path
              fill="#00171F"
              d="M22.677 21.061l-4.264-4.233a10.357 10.357 0 00-1.166-14.185 10.34 10.34 0 00-14.217.389 10.355 10.355 0 006.466 17.637 10.338 10.338 0 007.32-2.242l4.229 4.233a1.15 1.15 0 001.632 0 1.15 1.15 0 000-1.599zm-12.31-2.634a8.04 8.04 0 01-7.432-4.97A8.057 8.057 0 014.68 4.683a8.043 8.043 0 0113.734 5.693 8.054 8.054 0 01-2.356 5.693 8.042 8.042 0 01-5.69 2.358z"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
