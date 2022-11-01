import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  tags: Dog | Product;
  productType: "dog" | "product";
}

interface Dog {
  age: string;
  gene: string;
}

interface Product {
  product: string;
  size?: string;
}

export function ProductCard({ image, title, price, tags, productType }: ProductCardProps) {
  function DogInfo({ tags }: { tags: Dog }) {
    return (
      <div className="flex flex-col py-1 gap-1 text-neutral-600">
        <div className="text-xs">
          <span className="font-medium">Age: </span>
          <span className="font-bold">{tags.age}</span>
        </div>
        <div className="text-xs">
          <span className="font-medium">Gene: </span>
          <span className="font-bold">{tags.gene}</span>
        </div>
        <span className="font-bold text-sm text-neutral-900">{price}</span>
      </div>
    );
  }

  function ProductInfo({ tags }: { tags: Product }) {
    return (
      <div className="flex flex-col py-1 gap-1 text-neutral-600">
        <div className="text-xs">
          <span className="font-medium">Product: </span>
          <span className="font-bold">{tags.product}</span>
        </div>
        {tags.size && (
          <div className="text-xs">
            <span className="font-medium">Size: </span>
            <span className="font-bold">{tags.size}</span>
          </div>
        )}
        <span className="font-bold text-sm text-neutral-900">{price}</span>
        <div className="bg-secondary-base rounded-lg p-2 flex gap-1 items-center text-primary-800 font-bold">
          <div className="w-5 h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fill="#FC1A40"
                d="M3.768 10.14l1.899-.69a.548.548 0 01.199-.036H18.03a.58.58 0 01.586.586v8.242c0 .973-.785 1.758-1.758 1.758H5.139a1.755 1.755 0 01-1.758-1.758v-7.55c0-.247.153-.47.387-.551z"
              ></path>
              <path
                fill="#C60034"
                d="M3.381 10.691v7.551c0 .973.786 1.758 1.758 1.758H11V9.414H5.866c-.07 0-.14.012-.2.035l-1.898.692a.581.581 0 00-.387.55z"
              ></path>
              <path
                fill="#FE9923"
                d="M3.592 3.82c.2-.809.797-1.442 1.606-1.7a2.335 2.335 0 012.273.493l1.36 1.195.27-1.793a2.374 2.374 0 011.44-1.84c.153-.058.305-.105.458-.129a2.33 2.33 0 011.851.41 2.378 2.378 0 01.961 2.25 2.372 2.372 0 01-1.547 1.899L11 5.062l-1.559.574h-.012l-2.707.996c-.27.094-.55.141-.82.141a2.37 2.37 0 01-1.582-.61 2.38 2.38 0 01-.727-2.343z"
              ></path>
              <path
                fill="#FE8821"
                d="M4.319 6.164a2.37 2.37 0 001.582.609c.27 0 .55-.047.82-.14l2.707-.997h.012l1.559-.574V.046c-.153.024-.305.07-.457.13A2.374 2.374 0 009.1 2.015l-.27 1.792-1.359-1.195a2.335 2.335 0 00-2.273-.492 2.372 2.372 0 00-.88 4.043z"
              ></path>
              <path
                fill="#FF3E75"
                d="M1.378 9.145l.796 2.203a.593.593 0 00.75.34l6.06-2.204.55-1.816 1.465.328 1.289.293 6.058-2.203a.596.596 0 00.352-.75l-.809-2.203a1.718 1.718 0 00-.902-.996 1.735 1.735 0 00-1.348-.059L11 3.766l-.317.117S9.417 6.18 9.382 6.18c-.024 0-.528-.282-1.02-.551-.492-.27-.984-.55-.984-.55L2.432 6.882a1.776 1.776 0 00-.996.914c-.2.422-.222.902-.058 1.348z"
              ></path>
              <path
                fill="#FC1A40"
                d="M1.378 9.144l.796 2.204a.593.593 0 00.75.34l6.059-2.204.55-1.816L11 7.996v-4.23l-.317.117S9.417 6.18 9.382 6.18c-.024 0-.528-.282-1.02-.551-.492-.27-.984-.55-.984-.55L2.432 6.882a1.776 1.776 0 00-.996.914c-.2.422-.222.902-.058 1.347z"
              ></path>
              <path
                fill="#FCBF29"
                d="M12.756 9.414V20H9.241V9.414h3.515zM10.682 3.883L11 4.75l1.289 3.54-1.29.468-1.464.527-.55.2-1.606-4.407 3.304-1.195z"
              ></path>
              <path
                fill="#FE9923"
                d="M9.24 9.414h1.758V20H9.242V9.414zM7.378 5.078l1.605 4.406.55-.199L11 8.758V4.75l-.317-.867-3.304 1.195z"
              ></path>
            </svg>
          </div>
          <div className="w-5 h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              fill="none"
              viewBox="0 0 20 24"
            >
              <rect width="4" height="4" x="8" y="10" fill="#003459" rx="2"></rect>
            </svg>
          </div>
          <span>Free Toy & Free Shaker</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-2 rounded-xl flex flex-col bg-neutral-100 shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)]">
      <div className="rounded-[10px] overflow-hidden">
        <Image src={image} alt="" width={294} height={294} />
      </div>
      <div className="mt-2 p-2 flex flex-col">
        <h4 className="text-neutral-900 font-bold">{title}</h4>
        {productType === "dog" ? (
          <DogInfo tags={tags as Dog} />
        ) : (
          <ProductInfo tags={tags as Product} />
        )}
      </div>
    </div>
  );
}
