import { ArticlesCollection, AxiosResponse } from "@/lib/types";
import { articles } from "../content/articles/articles";
export function GetFilterArticles(slug: string) {
  //const filter = encodeURIComponent(`related_services.slug="${slug}"`);

  //const list: AxiosResponse = await axios.get(
  //  `https://${process.env.NEXT_PUBLIC_PB_HOST}/api/collections/Articoli/records?expand=related_services&filter=${filter}&requestKey=null`
  //);


  return articles.filter(art => art.slug === slug) as ArticlesCollection[];
}
