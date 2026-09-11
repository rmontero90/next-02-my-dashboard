import Image from "next/image";

interface Props {
  title: string;
  images: string[];
  pokemonName: string;
}

export const SpritePanel = ({ title, images, pokemonName }: Props) => {
  return (
    <div className="flex w-full flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg md:w-[calc(50%-0.5rem)]">
      <p className="text-sm text-gray-600">{title}</p>
      <div className="flex flex-wrap justify-center">
        {images.map((src, index) => (
          <Image
            key={`${title}-${index}`}
            src={src}
            width={100}
            height={100}
            alt={`${title} ${pokemonName}`}
          />
        ))}
      </div>
    </div>
  );
};