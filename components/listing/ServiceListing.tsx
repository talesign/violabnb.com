import Link from "next/link";
import Image from "next/image";
import { ServiceCollection } from "@/lib/types";

export default function ServiceListing(props: { data: ServiceCollection[] }) {
  return (
    <>
      {props?.data?.map((item: ServiceCollection, index: number) => (
        <article key={item?.title + "_" + index}>
          <Link
            href={"/servizi/" + item?.slug}
            prefetch={false}
            className={`flex flex-col justify-between rounded-xl aspect-square p-6 !bg-[${item?.color}]`}
            style={{ background: `${item?.color}` }}
          >
            <Image
              src={
                "/content/services/" + item?.icon
              }
              width="25"
              height="25"
              alt="test"
              className=""
            ></Image>
            <h3 className="!text-base xl:text-xl">{item?.title}</h3>
          </Link>
        </article>
      ))}
    </>
  );
}
