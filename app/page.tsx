import HeroHome from "@/components/hero/HeroHome";
import { results_data } from "@/lib/staticContent/home_content";
import SimpleParagraph from "@/components/sections/SimpleParagraph";
import Results from "@/components/sections/Results";
import DefaultServiceListing from "@/components/sections/DefaultServiceListing";

import DefaultArticleListing from "@/components/sections/DefaultArticleListing";
import DefaultCTA from "@/components/sections/DefaultCTA";
import DefaultApartmentsListing from "@/components/sections/DefaultApartmentsListing";
import {
  ApartmentsCollection,
  ArticlesCollection,
  ServiceCollection,
} from "@/lib/types";
import {
  GetListApartments,
  GetListArticles,
  GetListServices,
} from "@/lib/get/GetFullList";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Viola Ricci - Property manager a Firenze",
  description:
    "Scopri come Viola Ricci trasforma gli appartamenti fiorentini in fonti di reddito stabili con la gestione di locazioni a breve termine.",
  openGraph: {
    title: "Viola Ricci - Property manager a Firenze",
    description:
      "Scopri come Viola Ricci trasforma gli appartamenti fiorentini in fonti di reddito stabili con la gestione di locazioni a breve termine.",
    url: "https://" + process.env.NEXT_PUBLIC_HOST + "/",
    siteName: "ViolaBnb",
    locale: "it_IT",
    type: "website",
  },
};

export default async function Home() {
  const list_articles = GetListArticles();
  const list_services = GetListServices();
  const list_apartments = GetListApartments();

  return (
    <>
      <HeroHome />
      <SimpleParagraph
        title="Esperta in locazioni turistiche a breve termine"
        description="Con passione e professionalità, mi dedico agli affitti brevi turistici, su Airbnb. La mia missione? Trasformare il tuo appartamento inutilizzato in un investimento redditizio, curando ogni dettaglio per garantire la migliore esperienza sia per te che per i tuoi ospiti. Scopri di più sulla mia storia e sul mio approccio unico nel campo della gestione immobiliare. "
        link_label="La mia storia"
        link_url="/chi-sono"
      />
      <Results data={results_data} />
      <DefaultServiceListing
        data={list_services}
        title="I miei servizi"
        description="Da 0 a seconda entrata"
      />
      <DefaultArticleListing title="I miei articoli" data={list_articles} />
      <DefaultApartmentsListing
        title="Gli appartamenti che gestisco"
        data={list_apartments}
      />
      <DefaultCTA />
    </>
  );
}
