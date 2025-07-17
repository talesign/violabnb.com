import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Conosci Viola Ricci, la property manager fiorentina che specializza nelle locazioni a breve termine, creando valore per i suoi clienti.",
  description:
    "Scopri il mio operato nel mondo del property management a Firenze",
  openGraph: {
    title: "Chi sono - Viola Ricci Property Manager",
    description:
      "Conosci Viola Ricci, la property manager fiorentina che specializza nelle locazioni a breve termine, creando valore per i suoi clienti.",
    url: "https://" + process.env.NEXT_PUBLIC_HOST + "/chi-sono",
    siteName: "ViolaBnb",
    locale: "it_IT",
    type: "website",
  },
};

import { results_data } from "@/lib/staticContent/home_content";
import Results from "@/components/sections/Results";
import HeroAbout from "@/components/hero/HeroAbout";
import AboutCollaborators from "@/components/sections/AboutCollaborators";
import HeroOwners from "@/components/hero/HeroOwners";

const collaborators_data = [
  {
    title: "Francesca Liberati",
    subtitle: "Liber, Reparto pulizie",
    image: "/images/liber-consulting.avif",
    description:
      "Francesca si occupa di pulizie turistiche a Firenze. Ha in gestione oltre 40 appartamenti",
  },
  {
    title: "Giuseppe Limonio",
    subtitle: "Accademia del pulito, Reparto pulizie",
    image: "/images/accademia-del-pulito.avif",
    description:
      "Giuseppe ha iniziato la sua attività affiancando Francesca e adesso collabora con lei per garantire pulizia e precisione.",
  },
  {
    title: "Paolo Matteoni",
    subtitle: "Fotografo",
    image: "/images/paolo-matteoni.avif",
    description:
      "Scatta dal 1985, principalmente sport ed eventi, ma anche ritratti e appartamenti.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroOwners
        title_highlight="Ciao, sono Viola:"
        title="una property manager fiorentina specializzata in locazioni turistiche a breve termine."
        description="Gestisco svariati appartamenti a Firenze, realizzando seconde entrate per i miei clienti con appartamenti inutilizzati."
        image="/images/viola-ricci.avif"
        link_label="Su di me"
        link_url="#su-di-me"
      />
      <HeroAbout
        image_url="/images/chi-sono-viola-ricci.avif"
        image_alt="test"
        paragraph="Questa città incantevole è la mia casa da sempre. Con passione e dedizione, mi sono specializzata nella gestione di proprietà, focalizzandomi sugli affitti brevi turistici. La mia esperienza inizia lontano da qui, ma è a Firenze che ho trovato la mia vocazione. Collaborando principalmente con Airbnb, ho perfezionato le mie competenze in questo campo, aiutando i proprietari di appartamenti inutilizzati a trasformarli in investimenti redditizi. Il mio approccio è un mix unico di calore umano e professionalità acquisita nel tempo, garantendo ai miei clienti un servizio di gestione immobiliare di alta qualità, che va oltre il semplice affitto di uno spazio. La mia missione è rendere ogni proprietà non solo un luogo dove soggiornare, ma un'esperienza indimenticabile per ogni ospite."
      />
      <Results data={results_data} />
      <AboutCollaborators
        title="Collaborano con me"
        collaborators={collaborators_data}
      />
    </>
  );
}
