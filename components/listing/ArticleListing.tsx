import Link from "next/link";
import Image from "next/image";

import { ArticleListingData, ArticlesCollection } from "@/lib/types";

export default function ArticleListing(props: { data: ArticlesCollection[] }) {
  return (
    <>
      {props?.data?.map((item: ArticlesCollection, index: number) => (
        <article
          className="border border-grayscale-200 rounded-lg"
          key={item?.title + "_" + index}
        >
          <Link href={"/articoli/" + item?.slug} className="">
            <Image
              unoptimized
              src={"/content/articles/" + item?.featured_image}
              width="500"
              height="500"
              alt="test"
              className="aspect-square object-cover rounded-t-lg"
            ></Image>
            <div className="p-6">
              <h3 className=" text-base pb-4">{item?.title}</h3>
              <p className="">{item?.seo_description}</p>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
}
