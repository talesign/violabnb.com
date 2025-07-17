import ServiceListing from "@/components/listing/ServiceListing";
import { ServiceListingData, ServiceCollection } from "@/lib/types";

export default function DefaultServiceListing(props: {
  title: string;
  description: string;
  data: ServiceCollection[];
}) {
  return (
    <section>
      <div className="container !py-32">
        <div className="pb-6">
          <h2 className="pb-4">{props.title}</h2>
          <p className="text-2xl">{props.description}</p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-8 gap-4">
          <ServiceListing data={props.data} />
        </div>
      </div>
    </section>
  );
}
