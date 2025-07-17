import axios from "axios";

export default async function formSubmit(
  request_id: any,
  request: any,
  consent: any
) {
  const res = await axios.post(
    `https://dem.talesign.com/api/collections/Requests/records`,
    {
      request_id: request_id,
      request: request,
      consent: consent,
      website: process.env.NEXT_PUBLIC_PB_HOST,
    }
  );
  return res.status;
}
