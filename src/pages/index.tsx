import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import { KnowledgeCard } from "../components/KnowledgeCard";
import { ProductCard } from "../components/ProductCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Monito | hoome</title>
      </Head>
      <div className="w-screen h-screen">
        <Header />
        <section className="bg-secondary-400 bg-[url(/assets/images/hero-banner.png)] bg-[bottom_right_-129px] bg-mobile bg-no-repeat rounded-b-[20px]">
          <div className="container pt-14 h-[90vh]">
            <div className="mt-8">
              <div className="text-primary-800 mb-3">
                <h1 className="text-[46px] font-extrabold capitalize">One more friend</h1>
                <span className="text-[28px] font-bold capitalize"> Thousands more fun!</span>
              </div>
              <p className="text-neutral-800 text-xs font-medium">
                Having a pet means you have more joy, a new friend, a happy person who will always
                be with you to have fun. We have 200+ different pets that can meet your needs!
              </p>
              <div className="mt-8 flex items-center gap-4">
                <button className="flex items-center gap-3 bg-transparent text-primary-base font-medium py-3 px-7 rounded-full mt-4 ring ring-primary-base">
                  <span>View Intro</span>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path fill="#003459" d="M8 7v6l5-3-5-3z"></path>
                      <path
                        fill="#003459"
                        d="M8 7l.386-.643A.75.75 0 007.25 7H8zm0 6h-.75a.75.75 0 001.136.643L8 13zm5-3l.386.643a.75.75 0 000-1.286L13 10zm-3 8.25A8.25 8.25 0 011.75 10H.25c0 5.385 4.365 9.75 9.75 9.75v-1.5zM1.75 10A8.25 8.25 0 0110 1.75V.25C4.615.25.25 4.615.25 10h1.5zM10 1.75A8.25 8.25 0 0118.25 10h1.5c0-5.385-4.365-9.75-9.75-9.75v1.5zM18.25 10A8.25 8.25 0 0110 18.25v1.5c5.385 0 9.75-4.365 9.75-9.75h-1.5zm-11-3v6h1.5V7h-1.5zm1.136 6.643l5-3-.772-1.286-5 3 .772 1.286zm5-4.286l-5-3-.772 1.286 5 3 .772-1.286z"
                      ></path>
                    </svg>
                  </div>
                </button>
                <button className="bg-primary-base text-neutral-100 font-medium py-3 px-7 rounded-full mt-4 ring ring-primary-base">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="container mt-10">
          <span className="font-medium text-black text-sm">Whats new?</span>
          <h3 className="font-bold text-xl text-primary-base capitalize">
            Take a look at some of our pets
          </h3>
          <ul className="grid grid-cols-2 gap-3 mt-7">
            <li>
              <ProductCard
                image="/assets/images/dog-1.png"
                title="MO231 - Pomeranian White"
                price={5000}
                tags={{
                  gene: "Male",
                  age: "1 year",
                }}
              />
            </li>
            <li>
              <ProductCard
                image="/assets/images/dog-1.png"
                title="MO231 - Pomeranian White"
                price={5000}
                tags={{
                  gene: "Male",
                  age: "1 year",
                }}
              />
            </li>
            <li>
              <ProductCard
                image="/assets/images/dog-1.png"
                title="MO231 - Pomeranian White"
                price={5000}
                tags={{
                  gene: "Male",
                  age: "1 year",
                }}
              />
            </li>
            <li>
              <ProductCard
                image="/assets/images/dog-1.png"
                title="MO231 - Pomeranian White"
                price={5000}
                tags={{
                  gene: "Male",
                  age: "1 year",
                }}
              />
            </li>
            <li>
              <ProductCard
                image="/assets/images/dog-1.png"
                title="MO231 - Pomeranian White"
                price={5000}
                tags={{
                  gene: "Male",
                  age: "1 year",
                }}
              />
            </li>
            <li>
              <ProductCard
                image="/assets/images/dog-1.png"
                title="MO231 - Pomeranian White"
                price={5000}
                tags={{
                  gene: "Male",
                  age: "1 year",
                }}
              />
            </li>
          </ul>
          <button className="mt-4 w-full ring ring-primary-base py-3 rounded-full font-medium text-primary-base flex justify-center items-center gap-2">
            <span>View more</span>
            <div className="w-6 h-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="10"
                fill="none"
                viewBox="0 0 7 10"
              >
                <path
                  fill="#003459"
                  d="M2.207.293A1 1 0 00.793 1.707L2.207.293zM5.5 5l.707.707a1 1 0 000-1.414L5.5 5zM.793 8.293a1 1 0 001.414 1.414L.793 8.293zm0-6.586l4 4 1.414-1.414-4-4L.793 1.707zm4 2.586l-4 4 1.414 1.414 4-4-1.414-1.414z"
                ></path>
              </svg>
            </div>
          </button>
        </section>
        <section className="container mt-10">
          <div className="px-5 rounded-[20px] bg-[url(/assets/images/banner-bg.png)] bg-center bg-cover">
            <div>
              <div className="text-center pt-8 pb-4">
                <h3 className="text-primary-800 pt-2 pb-4 block text-4xl font-extrabold capitalize">
                  One more friend
                </h3>
                <span className="text-primary-800 text-2xl font-bold capitalize">
                  {" "}
                  Thousands more fun!
                </span>
                <p className="text-neutral-800 font-medium text-sm mt-3">
                  Having a pet means you have more joy, a new friend, a happy person who will always
                  be with you to have fun. We have 200+ different pets that can meet your needs!
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <button className="flex-1 flex items-center justify-center gap-3 bg-transparent text-primary-base font-medium py-3 px-7 rounded-full mt-4 ring ring-primary-base">
                    <span>View Intro</span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path fill="#003459" d="M8 7v6l5-3-5-3z"></path>
                        <path
                          fill="#003459"
                          d="M8 7l.386-.643A.75.75 0 007.25 7H8zm0 6h-.75a.75.75 0 001.136.643L8 13zm5-3l.386.643a.75.75 0 000-1.286L13 10zm-3 8.25A8.25 8.25 0 011.75 10H.25c0 5.385 4.365 9.75 9.75 9.75v-1.5zM1.75 10A8.25 8.25 0 0110 1.75V.25C4.615.25.25 4.615.25 10h1.5zM10 1.75A8.25 8.25 0 0118.25 10h1.5c0-5.385-4.365-9.75-9.75-9.75v1.5zM18.25 10A8.25 8.25 0 0110 18.25v1.5c5.385 0 9.75-4.365 9.75-9.75h-1.5zm-11-3v6h1.5V7h-1.5zm1.136 6.643l5-3-.772-1.286-5 3 .772 1.286zm5-4.286l-5-3-.772 1.286 5 3 .772-1.286z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                  <button className="flex-1 bg-primary-base text-neutral-100 font-medium py-3 px-7 rounded-full mt-4 ring ring-primary-base">
                    Explore Now
                  </button>
                </div>
              </div>
              <div>
                <Image src="/assets/images/banner-person.png" alt="" width={382} height={349} />
              </div>
            </div>
          </div>
        </section>
        <section className="container mt-10">
          <span className="font-medium text-sm text-black">You already know ?</span>
          <h3 className="font-bold text-xl text-primary-base capitalize">Useful pet knowledge</h3>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <li>
              <KnowledgeCard
                image="/assets/images/knowledge-2.png"
                title="Dog Diet You Need To Know"
                description="Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance."
              />
            </li>
            <li>
              <KnowledgeCard
                image="/assets/images/knowledge-2.png"
                title="Dog Diet You Need To Know"
                description="Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance."
              />
            </li>
            <li>
              <KnowledgeCard
                image="/assets/images/knowledge-2.png"
                title="Dog Diet You Need To Know"
                description="Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance."
              />
            </li>
            <li>
              <KnowledgeCard
                image="/assets/images/knowledge-2.png"
                title="Dog Diet You Need To Know"
                description="Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance."
              />
            </li>
          </ul>
          <button className="mt-4 w-full ring ring-primary-base py-3 rounded-full font-medium text-primary-base flex justify-center items-center gap-2">
            <span>View more</span>
            <div className="w-6 h-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="10"
                fill="none"
                viewBox="0 0 7 10"
              >
                <path
                  fill="#003459"
                  d="M2.207.293A1 1 0 00.793 1.707L2.207.293zM5.5 5l.707.707a1 1 0 000-1.414L5.5 5zM.793 8.293a1 1 0 001.414 1.414L.793 8.293zm0-6.586l4 4 1.414-1.414-4-4L.793 1.707zm4 2.586l-4 4 1.414 1.414 4-4-1.414-1.414z"
                ></path>
              </svg>
            </div>
          </button>
        </section>

        <footer className="mt-10 py-10 bg-secondary-400 rounded-t-[20px]">
          <div className="container">
            <section className="bg-primary-base p-4 rounded-2xl">
              <h3 className="font-bold text-xl capitalize text-neutral-100">
                Register now so you don&apos;t miss our programs
              </h3>
              <div className="mt-4 p-3 bg-white rounded-[14px] flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="px-7 py-3 rounded-lg border border-primary-base"
                />
                <button className="py-3 bg-primary-base text-neutral-100 rounded-lg font-medium">
                  Subcribe Now
                </button>
              </div>
            </section>
            <section className="py-10 flex flex-col gap-5 border-b-2 border-neutral-300">
              <div className="flex items-center justify-between text-neutral-900 font-medium">
                <a href="#">Home</a>
                <a href="#">Category</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </div>
              <div className="w-48 mx-auto flex items-center justify-between">
                <div className="min-w-[20px] min-h-[20px] p-2 flex items-center justify-between">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_102_1044)">
                      <path
                        d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                        fill="#00171F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_102_1044">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="min-w-[20px] min-h-[20px] p-2 flex items-center justify-between">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_46_546)">
                      <path
                        d="M6.2918 18.1251C13.8371 18.1251 17.9652 11.8724 17.9652 6.45167C17.9652 6.27589 17.9613 6.0962 17.9535 5.92042C18.7566 5.33967 19.4496 4.62033 20 3.7962C19.2521 4.12896 18.458 4.34627 17.6449 4.44074C18.5011 3.92755 19.1421 3.12135 19.4492 2.17159C18.6438 2.64892 17.763 2.98563 16.8445 3.1673C16.2257 2.50976 15.4075 2.07439 14.5164 1.9285C13.6253 1.78261 12.711 1.93433 11.9148 2.3602C11.1186 2.78607 10.4848 3.46238 10.1115 4.28455C9.73825 5.10672 9.64619 6.02897 9.84961 6.9087C8.21874 6.82686 6.62328 6.40321 5.16665 5.6652C3.71002 4.9272 2.42474 3.89132 1.39414 2.62472C0.870333 3.52782 0.710047 4.59649 0.945859 5.61353C1.18167 6.63057 1.79589 7.51966 2.66367 8.10011C2.01219 8.07943 1.37498 7.90402 0.804688 7.58839V7.63917C0.804104 8.58691 1.13175 9.50561 1.73192 10.2391C2.3321 10.9726 3.16777 11.4756 4.09687 11.6626C3.49338 11.8277 2.85999 11.8518 2.2457 11.7329C2.50788 12.548 3.01798 13.2609 3.70481 13.7721C4.39164 14.2833 5.22093 14.5673 6.07695 14.5845C4.62369 15.726 2.82848 16.3452 0.980469 16.3423C0.652739 16.3418 0.325333 16.3217 0 16.2821C1.87738 17.4866 4.06128 18.1263 6.2918 18.1251Z"
                        fill="#00171F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_46_546">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="min-w-[20px] min-h-[20px] p-2 flex items-center justify-between">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_46_547)">
                      <path
                        d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95313C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95313C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523437C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z"
                        fill="#00171F"
                      />
                      <path
                        d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z"
                        fill="#00171F"
                      />
                      <path
                        d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z"
                        fill="#00171F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_46_547">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="min-w-[20px] min-h-[20px] p-2 flex items-center justify-between">
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
                </div>
              </div>
            </section>
            <section>
              <div className="pt-9 pb-8 mx-auto">
                <Image
                  src="/assets/images/logo.svg"
                  alt="Logo Monito"
                  width={115}
                  height={40}
                  className="mx-auto"
                />
              </div>
              <div className="flex items-center justify-center gap-4 text-xs font-medium text-neutral-600">
                <span>Terms of Service</span>
                <span>Privacy Policy</span>
              </div>
              <span className="block mt-2 text-[11px] text-neutral-600 text-center">
                © 2022 Monito. All rights reserved.
              </span>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
}
