import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-10 bg-secondary-400 rounded-t-[20px] lg:rounded-t-[40px]">
      <div className="container">
        <section className="bg-primary-base p-4 rounded-2xl flex flex-col lg:p-8 lg:flex-row lg:items-center">
          <h3 className="font-bold text-xl capitalize text-neutral-100 lg:max-w-[362px] lg:pr-3">
            Register now so you don&apos;t miss our programs
          </h3>
          <div className="mt-4 p-3 bg-white rounded-[14px] flex flex-col gap-3 lg:flex-row lg:flex-1 lg:mt-0">
            <input
              type="text"
              placeholder="Enter your Email"
              className="px-7 py-3 rounded-lg border lg:flex-1 border-neutral-500 duration-300 focus:border-primary-base"
            />
            <button className="min-w-[162px] py-3 bg-primary-base text-neutral-100 rounded-lg font-medium">
              Subcribe Now
            </button>
          </div>
        </section>
        <section className="py-10 flex flex-col gap-5 border-b-2 border-neutral-300 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-between text-neutral-900 font-medium lg:gap-16">
            <a href="#">Home</a>
            <a href="#">Category</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="w-48 mx-auto flex items-center justify-between lg:mx-0">
            <a href="#" aria-label="facebook" className="min-w-[20px] min-h-[20px] p-2 flex items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <g clipPath="url(#clip0_102_1044)">
                  <path
                    fill="#00171F"
                    d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_102_1044">
                    <path fill="#fff" d="M0 0H20V20H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#" aria-label="twitter" className="min-w-[20px] min-h-[20px] p-2 flex items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <g clipPath="url(#clip0_46_546)">
                  <path
                    fill="#00171F"
                    d="M6.292 18.125c7.545 0 11.673-6.253 11.673-11.673 0-.176-.004-.356-.012-.532A8.332 8.332 0 0020 3.796a8.09 8.09 0 01-2.355.645 4.125 4.125 0 001.804-2.27 8.247 8.247 0 01-2.605.996A4.108 4.108 0 009.85 6.91a11.654 11.654 0 01-8.456-4.284A4.108 4.108 0 002.664 8.1a4.108 4.108 0 01-1.86-.512v.051a4.102 4.102 0 003.293 4.024 4.078 4.078 0 01-1.851.07 4.111 4.111 0 003.831 2.851A8.23 8.23 0 010 16.282a11.64 11.64 0 006.292 1.843z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_46_546">
                    <path fill="#fff" d="M0 0H20V20H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#" aria-label="instagram" className="min-w-[20px] min-h-[20px] p-2 flex items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <g fill="#00171F" clipPath="url(#clip0_46_547)">
                  <path d="M10 1.8c2.672 0 2.988.012 4.04.06.976.042 1.503.206 1.855.343.464.18.8.399 1.148.746.352.352.566.684.746 1.149.137.351.3.882.344 1.855.047 1.055.058 1.371.058 4.04 0 2.671-.011 2.987-.058 4.038-.043.977-.207 1.504-.344 1.856-.18.465-.398.8-.746 1.148a3.077 3.077 0 01-1.148.746c-.352.137-.883.301-1.856.344-1.055.047-1.371.059-4.039.059-2.672 0-2.988-.012-4.04-.059-.976-.043-1.503-.207-1.855-.344-.464-.18-.8-.398-1.148-.746a3.076 3.076 0 01-.746-1.148c-.137-.352-.3-.883-.344-1.856-.047-1.054-.058-1.37-.058-4.039 0-2.672.011-2.988.058-4.039.043-.976.207-1.504.344-1.855.18-.465.398-.801.746-1.149a3.076 3.076 0 011.148-.746c.352-.137.883-.3 1.856-.344 1.05-.046 1.367-.058 4.039-.058zM10 0C7.285 0 6.945.012 5.879.059 4.816.105 4.086.277 3.453.523A4.88 4.88 0 001.68 1.68 4.9 4.9 0 00.523 3.45C.277 4.085.105 4.811.06 5.874.012 6.945 0 7.285 0 10s.012 3.055.059 4.121c.046 1.063.218 1.793.464 2.426.258.66.598 1.219 1.157 1.773a4.888 4.888 0 001.77 1.153c.636.246 1.362.418 2.425.465 1.066.046 1.406.058 4.121.058 2.715 0 3.055-.012 4.121-.058 1.063-.047 1.793-.22 2.426-.465a4.888 4.888 0 001.77-1.153 4.888 4.888 0 001.152-1.77c.246-.636.418-1.363.465-2.425.047-1.066.058-1.406.058-4.121 0-2.715-.011-3.055-.058-4.121-.047-1.063-.22-1.793-.465-2.426A4.683 4.683 0 0018.32 1.68 4.889 4.889 0 0016.55.527C15.915.281 15.188.11 14.126.062 13.055.012 12.715 0 10 0z"></path>
                  <path d="M10 4.863A5.138 5.138 0 004.863 10a5.138 5.138 0 0010.273 0c0-2.836-2.3-5.137-5.136-5.137zm0 8.469a3.333 3.333 0 11.001-6.665A3.333 3.333 0 0110 13.332zM16.54 4.66a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_46_547">
                    <path fill="#fff" d="M0 0H20V20H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#" aria-label="youtube" className="min-w-[20px] min-h-[20px] p-2 flex items-center justify-between">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8008 4C19.8008 4 19.6055 2.62109 19.0039 2.01563C18.2422 1.21875 17.3906 1.21484 17 1.16797C14.2031 0.964844 10.0039 0.964844 10.0039 0.964844H9.99609C9.99609 0.964844 5.79687 0.964844 3 1.16797C2.60938 1.21484 1.75781 1.21875 0.996094 2.01563C0.394531 2.62109 0.203125 4 0.203125 4C0.203125 4 0 5.62109 0 7.23828V8.75391C0 10.3711 0.199219 11.9922 0.199219 11.9922C0.199219 11.9922 0.394531 13.3711 0.992187 13.9766C1.75391 14.7734 2.75391 14.7461 3.19922 14.832C4.80078 14.9844 10 15.0313 10 15.0313C10 15.0313 14.2031 15.0234 17 14.8242C17.3906 14.7773 18.2422 14.7734 19.0039 13.9766C19.6055 13.3711 19.8008 11.9922 19.8008 11.9922C19.8008 11.9922 20 10.375 20 8.75391V7.23828C20 5.62109 19.8008 4 19.8008 4ZM7.93359 10.5938V4.97266L13.3359 7.79297L7.93359 10.5938Z"
                  fill="#00171F"
                />
              </svg>
            </a>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row lg:items-center">
          <div className="pt-9 pb-8 mx-auto lg:order-2">
            <Image
              src="/assets/images/logo.svg"
              alt="Logo Monito"
              width={115}
              height={40}
              className="mx-auto"
            />
          </div>
          <div className="flex items-center justify-center gap-4 text-xs font-medium text-neutral-600 lg:order-3 lg:text-sm">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
          <span className="block mt-2 text-[11px] text-neutral-600 text-center lg:order-1 lg:text-sm">
            © 2022 Monito. All rights reserved.
          </span>
        </section>
      </div>
    </footer>
  );
}
