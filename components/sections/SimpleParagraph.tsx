import Link from "next/link";

type SimpleParagraphProps = {
  title: string;
  description: string;
  link_url: string;
  link_label: string;
};

export default function SimpleParagraph(props: SimpleParagraphProps) {
  return (
    <section className="container grid xl:grid-cols-3 !py-32">
      <div className="xl:col-span-2 flex flex-col items-start gap-4">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <Link
          href={props.link_url}
          className="py-4 px-6 text-white bg-gradient-to-br from-full-100 to-full-200 rounded-xl font-bold block "
        >
          {props.link_label}
        </Link>
      </div>
    </section>
  );
}
