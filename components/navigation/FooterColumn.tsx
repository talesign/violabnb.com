import { SimpleLink } from "@/lib/types";
import Link from "next/link";

type FooterColumnProps = {
  list: SimpleLink[];
  title: string;
};

export default function FooterColumn(props: FooterColumnProps) {
  return (
    <div className="py-6 border-b last:border-b-0 xl:border-b-0 border-grayscale-200 xl:py-0 xl:pb-6 last:pb-0">
      <h4 className="pb-4 text-sm">{props.title}</h4>
      <nav>
        <ul className="list-none text-sm">
          {props.list.map((link: SimpleLink, index: number) => (
            <li key={index} className="pb-4 last:pb-0">
              <Link href={link.slug} className="hover:underline">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
