import { ApartmentsCollection } from "@/lib/types";
import { GetSingleApartment } from "@/lib/get/GetSingleItem";
import HeroApartments from "@/components/hero/HeroApartments";
import ApartentsGallery from "@/components/sections/ApartmentsGallery";
import ApartmentsBodycopy from "@/components/sections/ApartmentsBodycopy";
import ApartmentsOwnerReview from "@/components/sections/ApartmentsOwnerReview";
import DefaultCTA from "@/components/sections/DefaultCTA";
import { GetListApartments } from "@/lib/get/GetFullList";
import ApartmentsClientsReviews from "@/components/sections/ApartmentsClientsReviews";

export default async function SingleAppartamentiPage({
  params,
}: {
  params: { slug: string };
}) {
  const single_apartment = GetSingleApartment(params.slug);
  return (
    <>
      <HeroApartments
        title={single_apartment?.title}
        slug={single_apartment?.slug}
      />
      <ApartentsGallery
        gallery={single_apartment?.gallery}
        id={single_apartment?.id}
      />
      <ApartmentsBodycopy
        bodycopy={single_apartment?.bodycopy}
        results={single_apartment?.results}
        listing_link={single_apartment?.listing_link}
      />
      {/** 
         * 
      <ApartmentsOwnerReview
        owner_image={single_apartment?.owner_image}
        owner_name={single_apartment?.owner_name}
        owner_review={single_apartment?.owner_review}
        id={single_apartment?.id}
      />
         * 
      <ApartmentsClientsReviews
        data={single_apartment?.clients_reviews.reviews}
      />
        */}
      <DefaultCTA />
    </>
  );
}

export async function generateStaticParams() {
  const page_list = GetListApartments();
  //const [page_list] = await Promise.all([await_page_list]);
  return page_list.map((page: any) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: any) {
  const single_apartment = GetSingleApartment(params.slug);

  return {
    title: single_apartment.seo_title,
    description: single_apartment.seo_description,

    openGraph: {
      title: single_apartment.seo_title,
      description: single_apartment.seo_description,
      url: "/" + single_apartment.slug,
      siteName: "ViolaBnb",
      images: [
        {
          url:
            "/content/apartments/" +
            single_apartment.id +
            "/" +
            single_apartment?.featured_image,
          width: 1200,
          height: 800,
        },
      ],
      locale: "it_IT",
      type: "website",
    },
  };
}
