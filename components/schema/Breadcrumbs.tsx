import Link from "next/link";

import {
  BreadcrumbsData,
  BreadcrumbMarkupData,
  BreadcrumbsProps,
} from "@/lib/types";

export default function Breadcrumbs(props: BreadcrumbsProps) {
  let breadcrumbsListData: BreadcrumbMarkupData[] = [];
  props.data.map((element: BreadcrumbsData, index: number) =>
    breadcrumbsListData.push({
      "@type": "ListItem",
      position: index + 1,
      name: element.name,
      item: element.item,
    })
  );
  const breadcrumb_data = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbsListData,
  };

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol
          className="list-none flex rounded-full bg-slate-100"
          aria-label="breadcrumb"
        >
          {props.data.map((element: BreadcrumbsData, index: number) => (
            <li
              key={"item_" + (index + 1)}
              className="after:content-['_❯_'] last:after:content-[''] after:text-xs after:px-2 flex items-center"
            >
              <Link href={element.item} className="">
                {element.name}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb_data) }}
      />
    </>
  );
}
