import Image from "next/image";

export default function HeroHome() {
  return (
    <header className="z-0">
      <div className="relative">
        <div className="container min-h-[70vh] grid xl:grid-cols-3 items-end">
          <h1 className="xl:col-span-2 text-white">
            Ciao, sono Viola e sono una property manager fiorentina
          </h1>
        </div>
        <Image
          unoptimized
          src="/images/viola-ricci-property-manager-firenze.avif"
          width="1920"
          height="1080"
          alt="test"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        ></Image>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-800/0 to-gray-800/60 -z-10"></div>
      </div>
    </header>
  );
}
