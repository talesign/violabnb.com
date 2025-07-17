import getListLegal from "@/lib/defaults/legal/getListLegal";
import { Legal } from "@/lib/types";
import FeedGenerator from "@/lib/defaults/feedrss/feedGenerator";
import SimpleHero from "@/components/hero/SimpleHero";
import DefaultLegalListing from "@/components/sections/DefaultLegalListing";

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

export default async function LegalListPage() {
  const ListLegalData = getListLegal();
  /*
  FeedGenerator(
  ListLegalData,
    "Titolo",
    "legal",
    "legal",
    "descrizione",
    new Date()
  );
  */
  return (
    <>
      <SimpleHero
        title="Documenti legali"
        subtitle="Prendiamo la privacy molto seriamente: scopri i nostri documenti
        legali."
      />
      <DefaultLegalListing ListLegalData={ListLegalData} />
    </>
  );
}
