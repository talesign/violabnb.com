import Image from "next/image";

type ServicesParagraphProps = {
  id: string;
  featured_image: string;
  summary: string;
};

export default function ServicesParagraph(props: ServicesParagraphProps) {
  return (
    <section>
      <Image
        src={
          "/content/services/" + props?.featured_image
        }
        width="1920"
        height="600"
        alt="test"
        className=" max-h-[70vh] object-cover"
      ></Image>
      <div className="container !pt-32 !pb-16 !max-w-6xl flex flex-col items-start gap-4">
        <h2>In breve</h2>
        <p>{props?.summary}</p>
      </div>
    </section>
  );
}
