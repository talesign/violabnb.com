import { ApartmentsCollection } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

export default function ApartmentsListing(props: {
  data: ApartmentsCollection[];
}) {
  return (
    <>
      {props?.data?.map((item: ApartmentsCollection, index: number) => (
        <>
          {!item.Archived && (
            <article
              className="min-w-[18rem] w-full snap-center"
              key={item?.title + "_" + index}
            >
              <Link href={"/appartamenti/" + item?.slug} className=" block">
                <Image
                  src={
                    "/content/apartments/" + item.id + "/" + item?.featured_image
                  }
                  width="500"
                  height="500"
                  alt="test"
                  className="aspect-square object-cover rounded-lg"
                ></Image>
                <div className="py-4">
                  <h3 className="text-base">{item?.title}</h3>
                  <div className="text-grayscale-500 py-2">
                    <p className="text-sm">Zona: {item?.results?.data[0]}</p>
                    {/*
                       *
                                      <p className="text-sm">
                                        Tasso di prenotazione: {item?.results?.data[1]}
                                      </p>
                                    <p className="text-sm font-bold">
                                      Resa mensile: {item?.results?.data[2]}
                                    </p>
                       * */}
                  </div>
                </div>
              </Link>
            </article>
          )}
        </>
      ))}
    </>
  );
}
