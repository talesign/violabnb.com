import Image from "next/image";

type HeroServicesProps = {
  title: string;
  id: string;
  icon: string;
  subtitle: string;
  color: string;
};

export default function HeroServices(props: HeroServicesProps) {
  return (
    <header className="py-12" style={{ background: `${props?.color}` }}>
      <div className="container !max-w-6xl flex flex-col gap-6">
        <Image
          unoptimized
          src={"/content/services/" + props?.icon}
          width="25"
          height="25"
          alt={props.title}
          className=""
        ></Image>
        <h1 className="text-5xl">{props?.title}</h1>
        <p>{props?.subtitle}</p>
      </div>
    </header>
  );
}
