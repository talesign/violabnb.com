import { ApartmentsCollection } from "@/lib/types";
import ApartmentsListing from "../listing/ApartmentsListing";

export default function ApartmentsGridListing(props: {
  title: string;
  data: ApartmentsCollection[];
}) {
  return (
    <section>
      <div className="container !py-16">
        <h2 className="pb-6">{props.title}</h2>
        <div className="grid xl:grid-cols-4 gap-6">
          <ApartmentsListing data={props.data} />
        </div>
      </div>
    </section>
  );
}
