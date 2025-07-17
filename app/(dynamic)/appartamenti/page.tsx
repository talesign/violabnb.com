import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Scopri Appartamenti Gestiti da Viola Ricci a Firenze",
  description:
    "Esplora la selezione di appartamenti gestiti da Viola Ricci a Firenze, perfetti per locazioni a breve termine e investimenti immobiliari",
  openGraph: {
    title: "Scopri Appartamenti Gestiti da Viola Ricci a Firenze",
    description:
      "Esplora la selezione di appartamenti gestiti da Viola Ricci a Firenze, perfetti per locazioni a breve termine e investimenti immobiliari",
    url: "https://" + process.env.NEXT_PUBLIC_HOST + "/appartamenti",
    siteName: "ViolaBnb",
    locale: "it_IT",
    type: "website",
  },
};

import SimpleHero from "@/components/hero/SimpleHero";
import ApartmentsGridListing from "@/components/sections/ApartmentsGridListing";
import { GetListApartments } from "@/lib/get/GetFullList";
import { ApartmentsCollection } from "@/lib/types";

export default async function ListAppartamentiPage() {
  const list_apartments = GetListApartments();

  const count_apartments = list_apartments.length; // count = apartmentsListData.length

  return (
    <>
      <SimpleHero
        title="Appartamenti"
        subtitle="Qui troverai una lista degli appartamenti che gestisco ogni giorno."
      />
      <ApartmentsGridListing
        title={
          "Al momento ho in gestione " + count_apartments + " appartamenti"
        }
        data={list_apartments}
      />
    </>
  );
}
