import ArticleListingVar from "../listing/ArticleListingVar";
import { ArticlesCollection } from "@/lib/types";

type ServicesRelatedArticlesProps = {
  filter_articles: ArticlesCollection[];
};

export default function ServicesRelatedArticles(
  props: ServicesRelatedArticlesProps
) {
  return (
    <>
      {props?.filter_articles.length != 0 && (
        <section className="container !max-w-6xl !pb-24 bodycopy">
          <h2>Articoli che ho scritto relativi a questo servizio</h2>
          <div className="grid xl:grid-cols-3 pt-6">
            <ArticleListingVar data={props?.filter_articles} />
          </div>
        </section>
      )}
    </>
  );
}
