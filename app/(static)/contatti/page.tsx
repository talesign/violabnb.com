import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contatta Viola Ricci - Esperta Immobiliare a Firenze",
  description:
    "Hai domande sulla gestione di immobili a Firenze? Contatta Viola Ricci per soluzioni personalizzate nelle locazioni a breve termine.",
  openGraph: {
    title: "Contatta Viola Ricci - Esperta Immobiliare a Firenze",
    description:
      "Hai domande sulla gestione di immobili a Firenze? Contatta Viola Ricci per soluzioni personalizzate nelle locazioni a breve termine.",
    url: "https://" + process.env.NEXT_PUBLIC_HOST + "/contatti",
    siteName: "ViolaBnb",
    locale: "it_IT",
    type: "website",
  },
};

import Form from "@/components/defaults/Form";

export default function ContactPage() {
  return (
    <>
      <section className="bg-grayscale-50 py-16 min-h-[70vh] grid items-center">
        <div className="container !max-w-6xl grid xl:grid-cols-2 gap-16 items-center">
          <div className="col-span-1">
            <h1 className="text-4xl">
              Preventivo? Sopralluogo? Contattami e mettiamoci daccordo
            </h1>
            <p className="py-8 text-xl border-b">
              Contattami per ricevere velocemente un appuntamento, un preventivo
              o semplicemente informazioni su quello che posso fare per te.
            </p>
            <div className="py-8 border-b">
              <p className="text-xl font-bold">Chiamami al 392 364 3830</p>
            </div>
            <div className="py-8 border-b">
              <p className="text-xl font-bold">Scrivimi a info@violabnb.com</p>
            </div>
          </div>
          <Form />
        </div>
      </section>
    </>
  );
}
