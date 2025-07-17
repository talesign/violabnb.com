import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Servizi di Property Management di Viola Ricci",
  description:
    "Scopri i servizi offerti da Viola Ricci: gestione completa di appartamenti a Firenze per locazioni brevi e rendite sicure.",
  openGraph: {
    title: "Servizi di Property Management di Viola Ricci",
    description:
      "Scopri i servizi offerti da Viola Ricci: gestione completa di appartamenti a Firenze per locazioni brevi e rendite sicure.",
    url: "https://" + process.env.NEXT_PUBLIC_HOST + "/servizi",
    siteName: "ViolaBnb",
    locale: "it_IT",
    type: "website",
  },
};

import SimpleHero from "@/components/hero/SimpleHero";
import DefaultServicesListingExt from "@/components/sections/DefaultServicesListingExt";
import { GetListServices } from "@/lib/get/GetFullList";

export default async function ListServiziPage() {
  const ListServiziData = GetListServices();
  //const [ListServiziData] = await Promise.all([awaitListServiziData]);

  return (
    <>
      <SimpleHero
        title="Servizi"
        subtitle="Qui troverai una lista di tutti i servizi che offro ai miei clienti."
      />
      <DefaultServicesListingExt
        title="I miei servizi"
        data={ListServiziData}
      />
    </>
  );
}
