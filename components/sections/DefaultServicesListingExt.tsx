import { ServiceListingData, ServiceCollection } from "@/lib/types";
import ServiceListingExt from "../listing/ServicesListingExt";

export default function DefaultServicesListingExt(props: {
  title: string;
  data: ServiceCollection[];
}) {
  return (
    <section>
      <div className="container !py-16">
        <h2 className="pb-6">{props.title}</h2>

        <div className="grid xl:grid-cols-2 gap-4">
          <ServiceListingExt data={props.data} />
        </div>
      </div>
    </section>
  );
}
