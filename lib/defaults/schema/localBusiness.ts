export const LocalBusinessMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shukram by GGE Italia S.r.l.",
  image: "https://shukram.it/images/Shukram-Logo.webp",
  "@id": "https://shukram.it/images/Shukram-Logo.webp#logo",
  url: "https://shukram.it",
  telephone: "+39 055 903 2051",
  priceRange:
    "Prezzi variabili a seconda dell'impianto da installare. Contattaci per un preventivo dettagliato.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Pruneto, 2/a",
    addressLocality: "San Giovanni Valdarno",
    postalCode: "52027",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.548156,
    longitude: 11.543442,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday", "Thursday"],
    opens: "08:30",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/shukramitalia",
    "https://twitter.com/shukramitalia",
    "https://www.youtube.com/channel/UCtOB9cMQhxLtjbzDx8QNf5Q",
    "https://shukram.it",
    "https://it.linkedin.com/in/shukram-italia-srl-47b7b8b3",
  ],
};
