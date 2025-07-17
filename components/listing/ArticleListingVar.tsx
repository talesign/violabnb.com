import Link from "next/link";
import Image from "next/image";

import { ArticleListingData, ArticlesCollection } from "@/lib/types";

export default function ArticleListingVar(props: {
  data: ArticlesCollection[];
}) {
  return (
    <>
      {props?.data?.map((item: ArticlesCollection, index: number) => (
        <article className="" key={item?.title + "_" + index}>
          <Link href={"/articoli/" + item?.slug} className="grid h-full">
            <Image
              src={
                "/content/articles/" +
                item?.featured_image
              }
              width="500"
              height="500"
              alt="test"
              className="aspect-video object-cover rounded-lg"
            ></Image>
            <div className="py-2">
              <h3 className="!text-base !pb-1">{item?.title}</h3>
              <p className="text-sm text-grayscale-500">
                {item?.seo_description}
              </p>
            </div>
            <footer className="text-xs h-full">
              {" "}
              Pubblicato il {new Date(item?.updated).toLocaleString()} ·{" "}
              {Math.round(item?.bodycopy.split(" ").length / 250)} minuti di
              lettura
            </footer>
          </Link>
        </article>
      ))}
    </>
  );
}
