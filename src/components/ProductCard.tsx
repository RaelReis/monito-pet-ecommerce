import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  tags: {
    age: string;
    gene: string;
  };
}

export function ProductCard({ image, title, price, tags }: ProductCardProps) {
  return (
    <div className="p-2 rounded-xl flex flex-col bg-neutral-100 shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)]">
      <div className="rounded-[10px] overflow-hidden">
        <Image src={image} alt="" width={294} height={294} />
      </div>
      <div className="mt-2 p-2 flex flex-col">
        <h4 className="text-neutral-900 font-bold">{title}</h4>
        <div className="flex flex-col py-1 gap-1 text-neutral-600">
          <div className="text-xs">
            <span className="font-medium">Age: </span>
            <span className="font-bold">{tags.age}</span>
          </div>
          <div className="text-xs">
            <span className="font-medium">Gene: </span>
            <span className="font-bold">{tags.gene}</span>
          </div>
        </div>
        <span className="font-bold text-sm text-neutral-900">{price}</span>
      </div>
    </div>
  );
}
