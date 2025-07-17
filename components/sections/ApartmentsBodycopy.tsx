import PrimaryButton from "../PrimaryButton";
import { ApartmentResults } from "@/lib/types";

type ApartmentsBodycopyProps = {
  results: ApartmentResults;
  bodycopy: string;
  listing_link: string;
};

export default function ApartmentsBodycopy(props: ApartmentsBodycopyProps) {
  return (
    <section className="container flex flex-col xl:flex-row flex-grow gap-16 !max-w-6xl !my-12">
      <div
        dangerouslySetInnerHTML={{ __html: props?.bodycopy }}
        className="bodycopy xl:col-span-2 max-w-prose"
      />
      <aside className="p-6 rounded-lg shadow-lg self-start sticky top-6 w-full">
        <div className="flex justify-between border-b p-4 ">
          <span>Zona appartamento</span>
          <span className="font-bold">{props?.results?.data[0]}</span>
        </div>
        {/*<div className="flex justify-between border-b p-4 ">
          <span>Percentule notti prenotate</span>
          <span className="font-bold">{props?.results?.data[1]}</span>
        </div>
        <div className="flex justify-between border-b p-4 ">
          <span>Media ritorni mensili</span>
          <span className="font-bold">{props?.results?.data[2]}</span>
        </div>
        */}
        <PrimaryButton
          link_label="Guarda su AirBnb"
          link_url={props?.listing_link}
        />
      </aside>
    </section>
  );
}
