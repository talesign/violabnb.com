import { notFound } from "next/navigation";
import axios from "axios";
import {
  AxiosResponse,
  ServiceCollection,
  ApartmentsCollection,
  ArticlesCollection,
  ArticleListingData,
} from "../types";

import { services } from "../content/services/services";
import { apartments } from "../content/apartments/apartments";
import { articles } from "../content/articles/articles";

export function GetSingleService(slug: string) {
  //const filter = encodeURIComponent(`slug="${slug}"`);
  //const single: AxiosResponse = await axios.get(
  //  `https://${process.env.NEXT_PUBLIC_PB_HOST}/api/collections/Servizi/records?filter=${filter}&requestKey=null`
  //);
  //if (single.data.items.length === 0) return notFound();
  //return single.data.items[0] as ServiceCollection;
  return services.find((obj) => obj.id === slug) as ServiceCollection;
}

export function GetSingleApartment(slug: string) {
  //const filter = encodeURIComponent(`slug="${slug}"`);
  //const single: AxiosResponse = await axios.get(
  //  `https://${process.env.NEXT_PUBLIC_PB_HOST}/api/collections/Appartamenti/records?filter=${filter}&requestKey=null`
  //);
  //if (single.data.items.length === 0) return notFound();
  //return single.data.items[0] as ApartmentsCollection;
  return apartments.find((obj) => obj.id === slug) as ApartmentsCollection;
}

export function GetSingleArticle(slug: string) {
  //const filter = encodeURIComponent(`slug="${slug}"`);
  //const single: AxiosResponse = await axios.get(
  //  `https://${process.env.NEXT_PUBLIC_PB_HOST}/api/collections/Articoli/records?filter=${filter}&requestKey=null`
  //);
  //if (single.data.items.length === 0) return notFound();
  //return single.data.items[0] as ArticlesCollection;
  return articles.find((obj) => obj.id === slug) as ArticlesCollection;
}
