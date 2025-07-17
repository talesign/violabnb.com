import ArticleListingVar from "../listing/ArticleListingVar";
import { ArticlesCollection } from "@/lib/types";

type ArticlesFooterProps = {
  data: ArticlesCollection[];
};

export default function ArticlesRelated(props: ArticlesFooterProps) {
  return (
    <section className="bg-grayscale-50 !pb-12">
      <div className="container !pt-0 !max-w-prose">
        <h2 className="text-base pb-6">Scopri i miei ultimi articoli</h2>
        <div className="grid xl:grid-cols-2 gap-6">
          <ArticleListingVar data={props?.data?.slice(0, 4)} />
        </div>
      </div>
    </section>
  );
}
