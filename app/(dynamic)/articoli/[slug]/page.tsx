import { GetSingleArticle } from "@/lib/get/GetSingleItem";
import { ArticlesCollection } from "@/lib/types";
import { GetListArticles } from "@/lib/get/GetFullList";

import HeroArticles from "@/components/hero/HeroArticles";
import ArticlesBodycopy from "@/components/sections/ArticlesBodycopy";
import ArticlesRelated from "@/components/sections/ArticlesRelated";

export default async function SingleArticoliPage({
  params,
}: {
  params: { slug: string };
}) {
  const single_article = GetSingleArticle(params.slug);
  const list_articles = GetListArticles();

  return (
    <>
      <HeroArticles
        title={single_article.title}
        updated={single_article.updated}
        bodycopy={single_article.bodycopy}
      />
      <ArticlesBodycopy
        id={single_article.id}
        bodycopy={single_article.bodycopy}
        featured_image={single_article.featured_image}
      />
      <ArticlesRelated data={list_articles} />
    </>
  );
}

export async function generateStaticParams() {
  const page_list = GetListArticles();
  return page_list.map((page: any) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: any) {
  const single_item = GetSingleArticle(params.slug);

  return {
    title: single_item.seo_title,
    description: single_item.seo_description,

    openGraph: {
      title: single_item.seo_title,
      description: single_item.seo_description,
      url:
        "https://" +
        process.env.NEXT_PUBLIC_HOST +
        "/articoli/" +
        single_item.slug,
      siteName: "ViolaBnb",
      images: [
        {
          url:
            "/content/articles/" +
            single_item.featured_image,
          width: 1200,
          height: 800,
        },
      ],
      locale: "it_IT",
      type: "website",
    },
  };
}
