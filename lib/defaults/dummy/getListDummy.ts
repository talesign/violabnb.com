import axios from "axios";

export default async function getListDummy(page: string) {
  const items_perPage = 5;
  const res = await axios.get(
    `https://dem.talesign.com/api/collections/Dummy/records?perPage=${items_perPage}&page=${page}`
  );
  return res.data;
}
