import { Legal, ListLegalProps } from "@/lib/types";
import { formatDate } from "@/lib/defaults/defaultsUtilities";
import Link from "next/link";

export default function ListLegal(props: ListLegalProps) {
  console.log(new Date())
  return (
    <>
      {props.ListData.map((Item: Legal) => (
        <article key={Item.title} className="p-6 border rounded-xl my-6">
          <header>
            <h3>
              <Link href={"/legal/" + Item.slug} className="capitalize">
                {Item.title}
              </Link>
            </h3>
            <p className="py-4">Aggiornato il {formatDate(Item.updated)}</p>
          </header>

          <footer>
            <Link
              href={"/legal/" + Item.slug}
              className="underline uppercase tracking-wider"
            >
              Scopri di più
            </Link>
          </footer>
        </article>
      ))}
    </>
  );
}
