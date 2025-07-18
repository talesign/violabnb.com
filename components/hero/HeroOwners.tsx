import Image from "next/image";
import PrimaryButton from "../PrimaryButton";

type HeroOwnersProps = {
  title_highlight: string;
  title: string;
  description?: string;
  link_label: string;
  link_url: string;
  image: string;
};

export default function HeroOwners(props: HeroOwnersProps) {
  return (
    <header className="container !max-w-6xl grid xl:grid-cols-2 items-center gap-16 !py-16">
      <div className="grid justify-items-start">
        <h1 className="text-4xl pb-4">
          <span className=" text-full-100">{props?.title_highlight}</span>
          <br />
          {props?.title}
        </h1>
        <p className="text-sm pb-8">{props?.description}</p>
        <PrimaryButton
          link_label={props?.link_label}
          link_url={props?.link_url}
        />
      </div>
      <Image
        unoptimized
        src={props?.image}
        width="800"
        height="800"
        title={props?.title}
        alt={props?.title}
        className="rounded-xl aspect-square object-cover"
      ></Image>
    </header>
  );
}
