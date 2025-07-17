import ListLegal from "../defaults/ListLegal";
import { Legal } from "@/lib/types";

type DefaultLegalListingProps = { ListLegalData: Legal[] };

export default function DefaultLegalListing(props: DefaultLegalListingProps) {
  return (
    <section className="container !py-16">
      <h2 className="pb-6">Tutti i documenti</h2>
      <ListLegal ListData={props?.ListLegalData}></ListLegal>
    </section>
  );
}
