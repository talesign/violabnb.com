import getListLegal from "@/lib/defaults/legal/getListLegal";
import {
  GetListApartments,
  GetListArticles,
  GetListServices,
} from "@/lib/get/GetFullList";
import { Legal } from "@/lib/types";

type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}>;

//export default async function sitemap() {
  //const ListLegalData = getListLegal();
  //const ListApartmentsData = GetListApartments();
  //const ListServicesData = GetListServices();
  //const ListArticlesData = GetListArticles();

  //const static_pages = [
  //  "",
  //  "legal",
  //  "appartamenti",
  //  "servizi",
  //  "chi-sono",
  //  "contatti",
  //  "grazie",
  //  "proprietari",
  //].map((route) => ({
  //  url: `https://${process.env.NEXT_PUBLIC_HOST}/${route}`,
  //  lastModified: new Date().toISOString(),
  //  changeFrequency: "monthly",
  //  priority: 1.0,
  //}));

  //const legal = ListLegalData.map((page: any) => ({
  //  url: `https://${process.env.NEXT_PUBLIC_HOST}/legal/${page.slug}`,
  //  lastModified: new Date(page.updated).toISOString(),
  //  changeFrequency: "yearly",
  //  priority: 0.2,
  //}));

  //const apartments = ListApartmentsData.map((page: any) => ({
  //  url: `https://${process.env.NEXT_PUBLIC_HOST}/appartamenti/${page.slug}`,
  //  lastModified: new Date(page.updated).toISOString(),
  //  changeFrequency: "monthly",
  //  priority: 0.5,
  //}));

  //const services = ListServicesData.map((page: any) => ({
  //  url: `https://${process.env.NEXT_PUBLIC_HOST}/servizi/${page.slug}`,
  //  lastModified: new Date(page.updated).toISOString(),
  //  changeFrequency: "monthly",
  //  priority: 0.9,
  //}));

  //const articles = ListArticlesData.map((page: any) => ({
  //  url: `https://${process.env.NEXT_PUBLIC_HOST}/articoli/${page.slug}`,
  //  lastModified: new Date(page.updated).toISOString(),
  //  changeFrequency: "monthly",
  //  priority: 0.9,
  //}));
  //return [
  //  ...static_pages,
  //  ...legal,
  //  ...apartments,
  //  ...services,
  //  ...articles,
  //] as Sitemap;
//}
