import Image from "next/image";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { KnowledgeCard } from "../components/KnowledgeCard";
import { Page } from "../components/Page";
import { ProductCard } from "../components/ProductCard";

export default function Home() {
  return (
    <Page title="Monito | Home" description="A website for selling pets and pet related products">
      <div className="w-screen h-screen">
        <Header />
        <section className="bg-secondary-400 bg-mobile-image md:bg-desktop-image md:max-h-[764px] bg-mobile-position bg-mobile-size md:bg-desktop-size md:bg-desktop-position xl: bg-no-repeat rounded-b-[20px]">
          <div className="container pt-14 lg:pt-[100px] h-[90vh] md:h-[55vh] lg:h-[70vh]">
            <div className="mt-8 lg:mt-20">
              <div className="text-primary-800 mb-3">
                <h1 className="text-[46px] font-extrabold capitalize lg:text-6xl">
                  One more friend
                </h1>
                <span className="text-[28px] font-bold capitalize lg:text-[46px]">
                  {" "}
                  Thousands more fun!
                </span>
              </div>
              <p className="text-neutral-800 text-xs lg:text-base font-medium md:w-1/2 lg:w-2/5">
                Having a pet means you have more joy, a new friend, a happy person who will always
                be with you to have fun. We have 200+ different pets that can meet your needs!
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Button variant="normal">
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
                </Button>
                <Button variant="fill">Explore Now</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="container my-10 lg:my-[60px] relative">
          <span className="font-medium text-black text-sm">Whats new?</span>
          <h3 className="font-bold text-xl text-primary-base capitalize">
            Take a look at some of our pets
          </h3>
          <ul className="mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            <li>
              <ProductCard
                image="/assets/images/dog-1.png"
                title="MO231 - Pomeranian White"
                price={5000}
                tags={{
                  gene: "Male",
                  age: "1 year",
                }}
                productType="dog"
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
                productType="dog"
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
                productType="dog"
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
                productType="dog"
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
                productType="dog"
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
                productType="dog"
              />
            </li>
          </ul>
          <Button
            variant="normal"
            className="mt-4 w-full lg:w-auto lg:absolute lg:top-0 lg:right-5"
          >
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
          </Button>
        </section>
        <section className="container mt-10 lg:mt-[60px]">
          <div className="px-5 rounded-[20px] bg-[url(/assets/images/banner-bg-mobile.png)] lg:bg-[url(/assets/images/banner-bg-desktop.png)] bg-center bg-cover lg:flex">
            <div className="text-center pt-8 pb-4 lg:order-2 lg:flex-1">
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
              <div className="mt-8 flex items-center justify-center lg:justify-end gap-4">
                <Button variant="normal">
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
                </Button>
                <Button variant="fill">Explore Now</Button>
              </div>
            </div>
            <div className="lg:order-1 lg:flex-1">
              <Image
                src="/assets/images/banner-person.png"
                alt=""
                width={382}
                height={349}
                className="mx-auto"
              />
            </div>
          </div>
        </section>
        <section className="container my-10 hidden md:flex flex-col">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-sm text-black">
                  Hard to choose right products for your pets?
                </span>
                <h3 className="font-bold text-xl text-primary-base capitalize">Our Products</h3>
              </div>
              <Button variant="normal">
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
              </Button>
            </div>
            <ul className="mt-5 lg:mt-7 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
              <li>
                <ProductCard
                  image="/assets/images/product-image-1.png"
                  title="Dog Diet You Need To Know"
                  price={20}
                  tags={{
                    product: "Dog food",
                    size: "385gm",
                  }}
                  productType="product"
                />
              </li>
              <li>
                <ProductCard
                  image="/assets/images/product-image-1.png"
                  title="Dog Diet You Need To Know"
                  price={20}
                  tags={{
                    product: "Dog food",
                    size: "385gm",
                  }}
                  productType="product"
                />
              </li>
              <li>
                <ProductCard
                  image="/assets/images/product-image-1.png"
                  title="Dog Diet You Need To Know"
                  price={20}
                  tags={{
                    product: "Dog food",
                    size: "385gm",
                  }}
                  productType="product"
                />
              </li>
              <li>
                <ProductCard
                  image="/assets/images/product-image-1.png"
                  title="Dog Diet You Need To Know"
                  price={20}
                  tags={{
                    product: "Dog food",
                    size: "385gm",
                  }}
                  productType="product"
                />
              </li>
              <li>
                <ProductCard
                  image="/assets/images/product-image-1.png"
                  title="Dog Diet You Need To Know"
                  price={20}
                  tags={{
                    product: "Dog food",
                    size: "385gm",
                  }}
                  productType="product"
                />
              </li>
              <li>
                <ProductCard
                  image="/assets/images/product-image-1.png"
                  title="Dog Diet You Need To Know"
                  price={20}
                  tags={{
                    product: "Dog food",
                    size: "385gm",
                  }}
                  productType="product"
                />
              </li>
              <li>
                <ProductCard
                  image="/assets/images/product-image-1.png"
                  title="Dog Diet You Need To Know"
                  price={20}
                  tags={{
                    product: "Dog food",
                    size: "385gm",
                  }}
                  productType="product"
                />
              </li>
              <li>
                <ProductCard
                  image="/assets/images/product-image-1.png"
                  title="Dog Diet You Need To Know"
                  price={20}
                  tags={{
                    product: "Dog food",
                    size: "385gm",
                  }}
                  productType="product"
                />
              </li>
            </ul>
          </div>
        </section>
        <section className="container my-10 lg:my-[60px] hidden lg:flex flex-col">
          <div className="py-5 flex flex-col">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-sm text-black">You already know ?</span>
                <h3 className="font-bold text-xl text-primary-base capitalize">
                  Useful pet knowledge
                </h3>
              </div>
              <Button variant="normal">
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
              </Button>
            </div>
            <div className="mt-4 grid grid-cols-7 gap-5">
              <div className="flex items-center justify-center">
                <Image src="/assets/images/whiskas-brand.png" alt="" width={114} height={114} />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/assets/images/whiskas-brand.png" alt="" width={114} height={114} />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/assets/images/whiskas-brand.png" alt="" width={114} height={114} />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/assets/images/whiskas-brand.png" alt="" width={114} height={114} />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/assets/images/whiskas-brand.png" alt="" width={114} height={114} />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/assets/images/whiskas-brand.png" alt="" width={114} height={114} />
              </div>
              <div className="flex items-center justify-center">
                <Image src="/assets/images/whiskas-brand.png" alt="" width={114} height={114} />
              </div>
            </div>
          </div>
          <div className="rounded-[20px] flex bg-[url(/assets/images/sellers-banner-bg.png)] bg-center bg-cover bg-no-repeat">
            <div className="pl-20 py-14 w-1/2">
              <h3 className="w-fit text-primary-base text-[52px] font-extrabold flex items-center gap-4">
                <span>Adoption</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="38"
                  fill="none"
                  viewBox="0 0 42 38"
                >
                  <path
                    fill="#003459"
                    d="M22.315 8.512v.05c-.001.96.167 1.913.497 2.817l-.02-.06c.321.882.866 1.668 1.583 2.284l.007.005c.68.6 1.584.966 2.576.966h.077-.003a5.036 5.036 0 003.488-1.424 8.882 8.882 0 002.305-3.292l.021-.06c.488-1.186.745-2.45.758-3.729v-.055c0-.988-.176-1.937-.498-2.817l.02.058A5.488 5.488 0 0031.543.972l-.007-.005a3.889 3.889 0 00-2.664-.966h.004a5.018 5.018 0 00-3.488 1.424 8.959 8.959 0 00-2.287 3.28l-.02.06a9.994 9.994 0 00-.758 3.743v.004h-.008zm8.632 11.953l-.002.133a5.672 5.672 0 001.074 3.325l-.013-.02c.32.452.746.82 1.242 1.076a3.528 3.528 0 001.609.388l.16-.003h-.008a5.464 5.464 0 003.575-1.378l-.005.005a9.624 9.624 0 002.474-3.17 9.447 9.447 0 00.945-3.883v-.013l.002-.13a5.72 5.72 0 00-1.074-3.34l.013.018a3.438 3.438 0 00-1.31-1.12 3.515 3.515 0 00-1.7-.352h.008a5.463 5.463 0 00-3.576 1.377l.005-.004a9.668 9.668 0 00-2.476 3.185 9.49 9.49 0 00-.943 3.898v.01-.002zm-9.95-.669a11.422 11.422 0 00-6.457 2.425l.023-.018a22.425 22.425 0 00-5.729 5.783l-.052.08c-1.382 1.822-2.19 4-2.324 6.267l-.001.031-.003.138c0 .64.16 1.245.442 1.775l-.01-.02c.272.486.695.874 1.208 1.106l.017.007c.47.22 1.017.392 1.589.489l.039.005c.596.092 1.198.138 1.802.136h.121-.006a14.726 14.726 0 004.825-1.15l-.094.037a14.298 14.298 0 014.555-1.11l.05-.003c1.781.13 3.432.522 4.966 1.138l-.108-.038c1.6.63 3.293 1.001 5.014 1.099l.046.002c3.085.002 4.628-1.201 4.628-3.61a10.081 10.081 0 00-1.44-4.784l.027.047a21.33 21.33 0 00-3.527-4.77l.007.007a20.726 20.726 0 00-4.632-3.561l-.1-.052a9.997 9.997 0 00-4.85-1.459h-.02l-.006.003zm-6.032-5.22h.074a3.892 3.892 0 002.58-.97l-.004.004a5.456 5.456 0 001.576-2.252l.013-.038c.32-.886.483-1.819.48-2.759V8.51v.003a10.146 10.146 0 00-.784-3.817l.026.07a8.978 8.978 0 00-2.303-3.336l-.006-.004A5.025 5.025 0 0013.13.003h-.076c-.992 0-1.896.367-2.579.969l.003-.003A5.455 5.455 0 008.902 3.22l-.013.038a8.01 8.01 0 00-.486 2.776v.032-.002c.014 1.306.28 2.597.783 3.805L9.16 9.8a8.893 8.893 0 002.32 3.347l.006.006a5.038 5.038 0 003.487 1.419h.001l-.01.005zM4.063 12.003L3.915 12a3.47 3.47 0 00-2.846 1.465l-.008.01A5.702 5.702 0 000 16.8l.002.136v-.006a9.436 9.436 0 00.938 3.882 9.613 9.613 0 002.468 3.171l.013.011a5.46 5.46 0 003.567 1.373h.003a3.518 3.518 0 001.688-.347 3.442 3.442 0 001.307-1.102l.008-.011a5.65 5.65 0 001.06-3.446v.007a9.493 9.493 0 00-.938-3.897 9.668 9.668 0 00-2.469-3.188l-.013-.01a5.462 5.462 0 00-3.56-1.37h-.011z"
                  ></path>
                </svg>
              </h3>
              <span className="text-primary-base text-[36px] font-bold">
                We need help. so do they.
              </span>
              <p className="text-neutral-800 text-sm font-medium w-1/2">
                Adopt a pet and give it a home, it will be love you back unconditionally.
              </p>
              <div className="mt-10 flex items-center gap-5">
                <Button variant="fill">Explore Now</Button>
                <Button variant="normal">
                  <span>View Intro</span>
                </Button>
              </div>
            </div>
            <div className="flex-1 w-1/2">
              <Image
                src="/assets/images/sellers-banner-image.png"
                alt=""
                width={540}
                height={360}
                className="h-full"
              />
            </div>
          </div>
        </section>
        <section className="container my-10 lg:my-[60px] relative">
          <span className="font-medium text-sm text-black">You already know ?</span>
          <h3 className="font-bold text-xl text-primary-base capitalize">Useful pet knowledge</h3>
          <ul className="mt-5 lg:mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
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
          <Button
            variant="normal"
            className="mt-4 w-full lg:absolute lg:top-0 lg:right-5 lg:w-auto"
          >
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
          </Button>
        </section>
        <Footer />
      </div>
    </Page>
  );
}
