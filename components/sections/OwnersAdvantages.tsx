import Image from "next/image";

type Advantage = {
  title: string;
  description: string;
};

type OwnersAdvantagesProps = {
  title: string;
  image: string;
  advantages: Advantage[];
};

export default function OwnersAdvantages(props: OwnersAdvantagesProps) {
  return (
    <section className="container !max-w-6xl !py-16">
      <h2 className="text-center">{props?.title}</h2>
      <Image
        unoptimized
        src={props?.image}
        width="1152"
        height="500"
        alt={props?.title}
        title={props?.title}
        className="my-6 rounded-xl"
      ></Image>
      <div className="grid xl:grid-cols-3 gap-6">
        {props?.advantages?.map((single: Advantage, index: number) => (
          <div key={single.title + index}>
            <h3 className="text-xl">{single.title}</h3>
            <p>{single.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
