import Image from "next/image";
type ApartmentsOwnerReviewProps = {
  id: string;
  owner_image: string;
  owner_name: string;
  owner_review: string;
};

export default function ApartmentsOwnerReview(
  props: ApartmentsOwnerReviewProps
) {
  return (
    <section className="container !max-w-6xl !py-24">
      <div className="shadow-lg p-12 rounded-lg flex flex-col items-start gap-12">
        <h2 className="self-start text-3xl">Cosa dice il proprietario</h2>
        <p className=" text-xl italic">{props?.owner_review}</p>
        <div className="flex gap-4 items-center">
          <Image
            src={
              "https://" +
              process.env.NEXT_PUBLIC_PB_HOST +
              "/api/files/Appartamenti/" +
              props?.id +
              "/" +
              props?.owner_image
            }
            width="75"
            height="75"
            alt="test"
            className="block rounded-full object-cover w-16 h-16"
          ></Image>
          <div>{props?.owner_name}</div>
        </div>
      </div>
    </section>
  );
}
