import Link from "next/link";
import Image from "next/image";
import { ServiceCollection } from "@/lib/types";

export default function ServiceListingExt(props: {
  data: ServiceCollection[];
}) {
  return (
    <>
      {props?.data?.map((item: ServiceCollection, index: number) => (
        <article key={item?.title + "_" + index} className="">
          <Link
            href={"/servizi/" + item?.slug}
            prefetch={false}
            className="grid rounded-xl p-8 gap-4"
            style={{ background: `${item?.color}` }}
          >
            <div className="flex flex-col justify-between min-h-[8rem]">
              <Image
                src={
                  "/content/services/" +
                  item?.icon
                }
                width="25"
                height="25"
                alt="test"
                className=""
              ></Image>
              <h3 className="text-xl">{item?.title}</h3>
            </div>
            <div>
              <p>{item?.subtitle}</p>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
}
