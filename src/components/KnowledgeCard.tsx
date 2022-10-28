import Image from "next/image";

interface KnowledgeCardProps {
  title: string;
  description: string;
  image: string;
}

export function KnowledgeCard({ title, description, image }: KnowledgeCardProps) {
  return (
    <div className="max-w-[380px] mx-auto p-2 rounded-xl shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)]">
      <div className="rounded-[10px] overflow-hidden">
        <Image src={image} alt="" width={364} height={243} />
      </div>
      <div className="mt-2 p-2 flex flex-col">
        <span className="w-fit py-[2px] px-3 rounded-full bg-state-blue text-neutral-100 font-bold">
          Pet knowledge
        </span>
        <h4 className="text-neutral-900 inline-block mt-2 font-bold">{title}</h4>
        <p className="text-neutral-900 inline-block mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
}
