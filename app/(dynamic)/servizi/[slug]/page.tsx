import { GetListServices } from "@/lib/get/GetFullList";
import { GetSingleService } from "@/lib/get/GetSingleItem";
// import { ArticlesCollection, ServiceCollection } from "@/lib/types";
// import { GetFilterArticles } from "@/lib/get/GetFilteredList";

import HeroServices from "@/components/hero/HeroServices";
import ServicesParagraph from "@/components/sections/ServicesParagraph";
import ServicesBodycopy from "@/components/sections/ServicesBodycopy";
import DefaultCTA from "@/components/sections/DefaultCTA";
// import ServicesRelatedArticles from "@/components/sections/ServicesRelatedArticles";

export default async function SingleServiziPage({
  params,
}: {
  params: { slug: string };
}) {
  const single_service_data = GetSingleService(params.slug);
  const list_service = GetListServices();
  // const filter_articles = GetFilterArticles(params.slug);

  //const [single_service_data, list_service, filter_articles] =
  //  await Promise.all([
  //    await_single_service_data,
  //    await_list_service,
  //    await_filter_articles,
  //  ]);

  return (
    <>
      <HeroServices
        title={single_service_data?.title}
        subtitle={single_service_data?.subtitle}
        color={single_service_data?.color}
        id={single_service_data?.id}
        icon={single_service_data?.icon}
      />
      <ServicesParagraph
        summary={single_service_data?.summary}
        id={single_service_data?.id}
        featured_image={single_service_data?.featured_image}
      />
      <ServicesBodycopy
        title={single_service_data?.title}
        id={single_service_data?.id}
        subtitle={single_service_data?.subtitle}
        icon={single_service_data?.icon}
        featured_image={single_service_data?.featured_image}
        bodycopy={single_service_data?.bodycopy}
        list_service={list_service}
      />
      {/* <ServicesRelatedArticles filter_articles={filter_articles} /> */}
      <DefaultCTA />
    </>
  );
}

export async function generateStaticParams() {
  const page_list = GetListServices();
  //const [page_list] = await Promise.all([await_page_list]);
  return page_list.map((page: any) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: any) {
  const single_item = GetSingleService(params.slug);

  if (!single_item) {
    return {
      title: "",
      description: ""
    }
  }

  return {
    title: single_item.seo_title ?? "",
    description: single_item.seo_description,

    openGraph: {
      title: single_item.seo_title ?? "",
      description: single_item.seo_description,
      url: "/" + single_item.slug,
      siteName: "ViolaBnb",
      images: [
        {
          url:
            "/content/apartments/" +
            single_item.id +
            "/" +
            single_item?.featured_image,
          width: 1200,
          height: 800,
        },
      ],
      locale: "it_IT",
      type: "website",
    },
  };
}
