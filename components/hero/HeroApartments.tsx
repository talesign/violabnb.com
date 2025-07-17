import Breadcrumbs from "../schema/Breadcrumbs";
import { BreadcrumbsData } from "@/lib/types";

type HeroApartmentsProps = {
  title: string;
  slug: string;
};

export default function HeroApartments(props: HeroApartmentsProps) {
  return (
    <header className="container !max-w-6xl">
      <h1 className="text-xl">{props?.title}</h1>
      <Breadcrumbs
        data={
          [
            { name: "Home", item: "/" },
            { name: "Appartamenti", item: "/appartamenti" },
            {
              name: props?.title,
              item: "/appartamenti/" + props?.slug,
            },
          ] as BreadcrumbsData[]
        }
      />
    </header>
  );
}
