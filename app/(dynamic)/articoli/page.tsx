import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Novità e Consigli da Viola Ricci - Property Management",
  description:
    "Leggi gli ultimi articoli e news da Viola Ricci, esperta di gestione immobiliare, per rimanere aggiornato sul mercato delle locazioni brevi.",
  openGraph: {
    title: "Novità e Consigli da Viola Ricci - Property Management",
    description:
      "Leggi gli ultimi articoli e news da Viola Ricci, esperta di gestione immobiliare, per rimanere aggiornato sul mercato delle locazioni brevi.",
    url: "https://" + process.env.NEXT_PUBLIC_HOST + "/articoli",
    siteName: "ViolaBnb",
    locale: "it_IT",
    type: "website",
  },
};

import SimpleHero from "@/components/hero/SimpleHero";
import DefaultArticleListing from "@/components/sections/DefaultArticleListing";
import { GetListArticles } from "@/lib/get/GetFullList";

/*
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Articoli",
  description:
    "Vuoi scoprire di più sull'energia? O forse su come abbassare il costo delle bollette? Sullo Shukram blog trovi tutte le informazioni che desideri. Scopri di più.",
  openGraph: {
    title: "Articoli",
    description:
      "Vuoi scoprire di più sull'energia? O forse su come abbassare il costo delle bollette? Sullo Shukram blog trovi tutte le informazioni che desideri. Scopri di più.",
    url: "https://shukram.it/articoli",
    siteName: "Shukram",
    images: [
      {
        url: "/images/static/shukram-articoli.avif",
        width: 2400,
        height: 1705,
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};
*/

export default async function ListArticoliPage() {
  const ListArticlesData = GetListArticles();

  return (
    <>
      <SimpleHero
        title="Articoli"
        subtitle="Qui troverai una lista degli articoli che ho scritto sul mio lavoro"
      />
      <DefaultArticleListing
        title="I miei ultimi articoli"
        data={ListArticlesData}
      />
    </>
  );
}
