import { apartments } from "../content/apartments/apartments";
import { ResultsData } from "../types";

export const results_data: ResultsData[] = [
  {
    quantity: apartments.length.toString(),
    title: "Appartamenti in gestione",
    date: "23 Gennaio 2023",
  },
  {
    quantity: "341",
    title: "Prenotazioni nell'anno corrente",
    date: "23 Gennaio 2023",
  },
];

/*
  {
    quantity: "4.243€",
    title: "Media reddito dei miei clienti",
    date: "13 Agosto 2023",
  },
  {
    quantity: "4.6",
    title: "Votazioni medie su AirBnb",
    date: "13 Agosto 2023",
  },
*/
