import axios from "axios";
import { legal_fields } from "@/lib/fields";
import { legalData } from "@/lib/content/legal/legal";

export default function getListLegal() {
  //const filter = encodeURIComponent(
  //  `website="${process.env.NEXT_PUBLIC_HOST}"`
  //);
  //const res = await axios.get(
  //  `https://dem.talesign.com/api/collections/Policies/records?filter=${filter}&fields=${legal_fields}`
  //);
  return legalData;
}
