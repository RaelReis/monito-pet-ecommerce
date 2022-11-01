import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen((prevState) => !prevState);
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 32) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClasses = scrolled ? "bg-secondary-400" : "bg-transparent";

  return (
    <header
      className={`w-screen fixed z-50 duration-300 py-2 rounded-b-[20px] h-14 lg:h-[100px] ${headerClasses}`}
    >
      <div className={"container duration-300 w-full h-full my-auto flex items-center"}>
        <button
          className="w-[60px] h-[40px] relative my-7 cursor-pointer items-center scale-50 lg:hidden z-50 order-1"
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
        <div className="flex mx-auto lg:mx-0 items-center gap-12 order-2 md:order-1">
          <div className="order-2 md:order-1 w-[92px] h-[32px] lg:w-[115px] lg:h-[40px]">
            <Image
              src={"/assets/images/logo.svg"}
              alt=""
              width={92}
              height={32}
              className="w-full"
              priority
            />
          </div>
          <nav className="order-2 hidden lg:block">
            <ul className="text-primary-base font-bold flex items-center gap-12">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Category</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="order-3 lg:relative lg:ml-9 lg:w-full lg:flex lg:items-center lg:gap-4">
          <input
            type="text"
            placeholder="Search something here!"
            className="border-none rounded-full pl-12 pr-4 py-3 flex-1 hidden lg:block"
          />
          <button
            className="w-6 h-6 flex items-center justify-center lg:absolute lg:w-4 lg:h-4 lg:top-1/2 lg:left-4 lg:-translate-y-1/2"
            aria-label="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="none"
              viewBox="0 0 23 23"
              className="w-full h-full"
            >
              <path
                fill="#00171F"
                d="M22.677 21.061l-4.264-4.233a10.357 10.357 0 00-1.166-14.185 10.34 10.34 0 00-14.217.389 10.355 10.355 0 006.466 17.637 10.338 10.338 0 007.32-2.242l4.229 4.233a1.15 1.15 0 001.632 0 1.15 1.15 0 000-1.599zm-12.31-2.634a8.04 8.04 0 01-7.432-4.97A8.057 8.057 0 014.68 4.683a8.043 8.043 0 0113.734 5.693 8.054 8.054 0 01-2.356 5.693 8.042 8.042 0 01-5.69 2.358z"
              ></path>
            </svg>
          </button>
          <div className="order-last hidden xl:block">
            <Button variant="fill">Join the community</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
