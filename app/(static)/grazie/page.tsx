import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Grazie per Contattare Viola Ricci",
  description:
    "Grazie per averci contattato! Viola Ricci ti risponderà al più presto per discutere le tue esigenze di gestione immobiliare a Firenze.",
  openGraph: {
    title: "Grazie per Contattare Viola Ricci",
    description:
      "Grazie per averci contattato! Viola Ricci ti risponderà al più presto per discutere le tue esigenze di gestione immobiliare a Firenze.",
    url: "https://" + process.env.NEXT_PUBLIC_HOST + "/grazie",
    siteName: "ViolaBnb",
    locale: "it_IT",
    type: "website",
  },
};

import PrimaryButton from "@/components/PrimaryButton";

export default function ThankYouPage() {
  return (
    <header className="container !max-w-6xl flex flex-col items-center min-h-[50vh] justify-center gap-6">
      <h1 className="text-4xl">Grazie per avermi contattato</h1>
      <p className="text-xl">
        Appena possibile ti contatterò, per adesso però potresti guardare altri
        servizi che offro
      </p>
      <PrimaryButton link_label="Portami ai servizi" link_url="/servizi" />
    </header>
  );
}
