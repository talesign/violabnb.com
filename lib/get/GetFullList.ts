import axios from "axios";
import { services } from "../content/services/services";

import {
  ServiceCollection,
  ApartmentsCollection,
  AxiosResponse,
  ArticlesCollection,
} from "@/lib/types";
import { apartments } from "../content/apartments/apartments";
import { articles } from "../content/articles/articles";

export function GetListServices() {
  //const list: AxiosResponse = await axios.get(
  //  `https://${process.env.NEXT_PUBLIC_PB_HOST}/api/collections/Servizi/records?requestKey=null&sort=order`
  //);
  //return list.data.items as ServiceCollection[];
  return services;
}

export function GetListApartments() {
  //const list: AxiosResponse = await axios.get(
  //  `https://${process.env.NEXT_PUBLIC_PB_HOST}/api/collections/Appartamenti/records?requestKey=null`
  //);
  //return list.data.items as ApartmentsCollection[];
  return apartments;
}


export function GetListArticles() {
  //const list: AxiosResponse = await axios.get(
  //  `https://${process.env.NEXT_PUBLIC_PB_HOST}/api/collections/Articoli/records?requestKey=null`
  //);
  //return list.data.items as ArticlesCollection[];
  return articles;
}
