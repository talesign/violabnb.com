import { ApartmentsCollection } from "@/lib/types";
import ApartmentsListing from "../listing/ApartmentsListing";

export default function DefaultApartmentsListing(props: {
  title: string;
  data: ApartmentsCollection[];
}) {
  return (
    <section>
      <div className="xl:max-w-[1680px] xl:mx-auto py-12">
        <h2 className="p-6">{props.title}</h2>
        <div className="scrollbar flex overflow-x-scroll grid-flow-col snap-x gap-6 px-6 pb-6 mb-6">
          <ApartmentsListing data={props.data} />
        </div>
      </div>
    </section>
  );
}
