import Image from "next/image";
import ServiceListing from "../listing/ServiceListing";
import PrimaryButton from "../PrimaryButton";
import { ServiceCollection } from "@/lib/types";

type ServicesBodycopyProps = {
  id: string;
  title: string;
  subtitle: string;
  bodycopy: string;
  featured_image: string;
  icon: string;
  list_service: ServiceCollection[];
};

export default function ServicesBodycopy(props: ServicesBodycopyProps) {
  return (
    <section className="container flex flex-col xl:flex-row flex-grow gap-16 !max-w-6xl my-12">
      <div className="bodycopy max-w-prose">
        <Image
          unoptimized
          src={"/content/services/" + props?.featured_image}
          width="800"
          height="600"
          alt="test"
          className="rounded-xl"
        ></Image>
        <div
          dangerouslySetInnerHTML={{ __html: props?.bodycopy }}
          className=""
        />
        <h2>Altri servizi che ti potrebbero interessare</h2>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
          <ServiceListing data={props?.list_service} />
        </div>
      </div>

      <aside className="p-6 rounded-lg shadow self-start sticky top-6 w-full">
        <Image
          unoptimized
          src={"/content/services/" + props?.icon}
          width="25"
          height="25"
          alt="test"
          className=""
        ></Image>
        <p className="text-xl font-bold py-3">{props?.title}</p>
        <p>{props?.subtitle} Se sei interessato</p>.
        <PrimaryButton link_label="Contattami" link_url="/contatti" />
      </aside>
    </section>
  );
}
