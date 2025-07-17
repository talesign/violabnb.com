import { ArticleListingData, ArticlesCollection } from "@/lib/types";
import ArticleListing from "../listing/ArticleListing";

export default function DefaultArticleListing(props: {
  title: string;
  data: ArticlesCollection[];
}) {
  return (
    <section>
      <div className="container !py-16">
        <h2 className="pb-6">{props.title}</h2>
        <div className="grid xl:grid-cols-4 gap-6">
          <ArticleListing data={props.data} />
        </div>
      </div>
    </section>
  );
}
