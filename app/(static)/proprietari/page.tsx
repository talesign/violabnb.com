import HeroOwners from "@/components/hero/HeroOwners";
import DefaultCTA from "@/components/sections/DefaultCTA";
import OwnersAdvantages from "@/components/sections/OwnersAdvantages";
import OwnersComparisons from "@/components/sections/OwnersComparisons";
import OwnersFaqs from "@/components/sections/OwnersFaqs";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Proprietari: Massimizza Redditi con Viola Ricci",
  description:
    "Sei un proprietario di immobili? Scopri come Viola Ricci può aumentare i tuoi redditi con gestioni ottimizzate di locazioni a breve termine.",
  openGraph: {
    title: "Proprietari: Massimizza Redditi con Viola Ricci",
    description:
      "Sei un proprietario di immobili? Scopri come Viola Ricci può aumentare i tuoi redditi con gestioni ottimizzate di locazioni a breve termine.",
    url: "https://" + process.env.NEXT_PUBLIC_HOST + "/proprietari",
    siteName: "ViolaBnb",
    locale: "it_IT",
    type: "website",
  },
};

const booking_median = 12;
const price_median = 120;
const advantages_data = [
  {
    title: "Esperienza Locale Approfondita",
    description:
      "Conosco Firenze come le mie tasche. La mia esperienza locale ti assicura che il tuo immobile verrà valorizzato al meglio, attirando ospiti che cercano un'esperienza autenticamente fiorentina.",
  },
  {
    title: "Gestione Professionale Completa",
    description:
      "Dalla pubblicità alla manutenzione, gestisco ogni aspetto con cura e precisione. La sua gestione professionale significa meno preoccupazioni per te e standard elevati per i tuoi ospiti.",
  },
  {
    title: "Massimizzazione del Rendimento",
    description:
      "Grazie alla mia esperienza su Airbnb e nel settore degli affitti brevi, so come ottimizzare i profitti. Il mio approccio strategico garantisce rendimenti superiori per il tuo investimento immobiliare.",
  },
];

const comparison_table_data = [
  {
    title: "Allestimento dell'immobile",
    description:
      "Arredo ogni immobile con gusto e stile, valorizzandone le caratteristiche uniche. L'obiettivo è creare un ambiente accogliente e attraente che faccia sentire ogni ospite come a casa propria, aumentando così l'attrattiva dell'annuncio.",
    column_viola: "✅",
    column_competitors: "❌",
  },
  {
    title: "Gestione ottimizzata degli annunci",
    description:
      "Ottimizzo ogni annuncio per garantire massima visibilità e interesse. Dalla selezione delle foto alla redazione dei testi, ogni dettaglio è curato per evidenziare il meglio del tuo immobile e attirare l'ospite ideale",
    column_viola: "✅",
    column_competitors: "❌",
  },
  {
    title: "Pulizie ordinarie impeccabili",
    description:
      "Garantisco pulizie ordinarie impeccabili. La mia squadra di professionisti si occupa di ogni dettaglio, assicurando che l'immobile sia sempre impeccabile e pronto ad accogliere gli ospiti nel miglior modo possibile",
    column_viola: "✅",
    column_competitors: "❌",
  },

  {
    title: "Manutenzione dell'immobile",
    description:
      "Fornisco un servizio di manutenzione costante e attento per assicurare che l'immobile rimanga sempre in condizioni ottimali. Intervengo tempestivamente per risolvere qualsiasi problema, garantendo così un soggiorno senza intoppi per gli ospiti",
    column_viola: "✅",
    column_competitors: "❌",
  },
  {
    title: "Consulenza personalizzata",
    description:
      "Offro una consulenza personalizzata per ogni proprietario, ascoltando le esigenze e fornendo soluzioni su misura. Il mio obiettivo è massimizzare il rendimento dell'immobile rispettando le tue aspettative e necessità",
    column_viola: "✅",
    column_competitors: "❌",
  },
  {
    title: "Strategia di ottimizzazione dei guadagni",
    description:
      "Elaboro strategie su misura per ottimizzare i guadagni del tuo immobile. Analizzo il mercato, stabilisco tariffe competitive e sfrutto al meglio le piattaforme di affitto per massimizzare i tuoi profitti",
    column_viola: "✅",
    column_competitors: "❌",
  },
  {
    title: "Check-in e accoglienza",
    description:
      "Gestisco personalmente il check-in e l'accoglienza, facendo sentire ogni ospite speciale fin dal primo momento. La mia priorità è offrire un'esperienza positiva e indimenticabile che inizi dal loro arrivo",
    column_viola: "✅",
    column_competitors: "❌",
  },
];

const faqs_data = [
  {
    header: "Come funziona il servizio di property management offerto?",
    body: "Offro un servizio completo che include l'ottimizzazione degli annunci, la gestione delle prenotazioni, la manutenzione dell'immobile, pulizie professionali, e assistenza continua agli ospiti.",
  },
  {
    header: "Quali tipi di immobili gestisci?",
    body: "Gestisco una vasta gamma di immobili, dai piccoli appartamenti agli alloggi di lusso, specializzandomi in affitti brevi turistici a Firenze e dintorni.",
  },
  {
    header: "Come viene determinato il prezzo dell'affitto?",
    body: "Analizzo il mercato locale e utilizzo dati specifici per stabilire un prezzo competitivo che massimizzi i guadagni mantenendo un alto tasso di occupazione.",
  },
  {
    header: "Quali misure adotti per garantire la sicurezza del mio immobile?",
    body: "Applico rigorosi standard di sicurezza, inclusa la verifica degli ospiti e la manutenzione regolare, per assicurare che il tuo immobile sia sempre protetto e ben curato.",
  },
  {
    header: "Come posso monitorare le performance del mio immobile?",
    body: "Fornisco report periodici e dettagliati sulle performance del tuo immobile, inclusi tasso di occupazione, reddito generato e feedback degli ospiti.",
  },
  {
    header: "Ci sono costi nascosti nel tuo servizio di property management?",
    body: "La mia politica è la trasparenza totale: discuteremo insieme tutti i costi e le commissioni prima di iniziare la nostra collaborazione.",
  },
  {
    header: "Come gestisci le pulizie e la manutenzione?",
    body: "Collaboro con professionisti affidabili per assicurare pulizie profonde e manutenzione regolare, garantendo standard elevati per ogni soggiorno.",
  },
  {
    header: "In caso di emergenza o problemi con gli ospiti, come intervieni?",
    body: "Sono disponibile 24/7 per gestire qualsiasi emergenza o problema, assicurando una risoluzione rapida e efficace per proteggere sia il tuo immobile che la soddisfazione degli ospiti.",
  },
];

export default function OwnersPage() {
  return (
    <>
      <HeroOwners
        title_highlight="Sei un proprietario di un appartamento a Firenze?"
        title={
          "In gestione con me potresti guadagnare fino a " +
          booking_median * price_median +
          " € al mese"
        }
        description={
          "Su una media di " +
          booking_median +
          " giorni prenotati e su una spesa media a notte di " +
          price_median +
          " €."
        }
        link_label="Scopri di più"
        link_url="/contatti"
        image="/images/affitti-brevi-a-firenze.avif"
      />
      <OwnersAdvantages
        title="Unisciti ai proprietari che mi hanno già scelta per massimizzare i tuoi investimenti"
        image="/images/sei-un-proprietario-di-firenze.avif"
        advantages={advantages_data}
      />
      <OwnersComparisons
        title="Perché scegliere me come property manager?"
        table={comparison_table_data}
      />
      <OwnersFaqs title="Le risposte alle tue domande" faqs={faqs_data} />
      <DefaultCTA />
    </>
  );
}
