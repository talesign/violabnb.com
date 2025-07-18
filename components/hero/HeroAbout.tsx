import Image from "next/image";

type HeroAboutProps = {
  image_url: string;
  image_alt: string;
  paragraph: string;
};

export default function HeroAbout(props: HeroAboutProps) {
  return (
    <section className="">
      <Image
        unoptimized
        src={props?.image_url}
        width="1920"
        height="1080"
        alt={props?.image_alt}
        className="max-h-[80vh] object-cover"
      ></Image>
      <div className="container !max-w-6xl !py-24" id="su-di-me">
        <h2 className="text-4xl pb-4">Su di me</h2>
        <p>{props?.paragraph}</p>
      </div>
    </section>
  );
}
