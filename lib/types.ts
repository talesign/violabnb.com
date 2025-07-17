export type FullListCollection = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: object[];
};

export type AxiosResponse = {
  data: FullListCollection;
};

export type CmsCollection = {
  id: string;
  updated: string;
  created: string;

  slug: string;
  title: string;
  seo_title: string;
  seo_description: string;
  featured_image: string;
};

// LEGAL

export type Legal = CmsCollection & {
  bodycopy: string;
};

export type ListLegalProps = {
  ListData: Legal[];
};

// BREADCRUMBS

export type BreadcrumbsData = {
  name: string;
  item: string;
};

export type BreadcrumbMarkupData = {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
};

export type BreadcrumbsProps = {
  data: BreadcrumbsData[];
};

// FAQS

export type FaqData = {
  question: string;
  answer: string;
};

export type FaqMarkupData = {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
};

export type FaqProps = {
  data: FaqData[];
};

// NAVIGATION

export type SimpleLink = {
  name: string;
  slug: string;
};

export type SocialItems = {
  link: string;
  icon: string;
  title: string;
};

export type ResultsData = {
  title: string;
  quantity: string;
  date: string;
};

export type ServiceListingData = {
  id: string;
  icon: string;
  title: string;
  color: string;
  link: string;
};

export type ArticleListingData = {
  link: string;
  id: string;
  image: string;
  title: string;
  description: string;
};

export type ApartmentsListingData = {
  link: string;
  id: string;
  image: string;
  title: string;
  address: string;
};

export type ServiceCollection = CmsCollection & {
  bodycopy: string;
  color: string;
  icon: string;
  subtitle: string;
  stats: JSON;
  summary: string;
};

export type ApartmentResults = {
  data: string[];
};

export type ApartmentsCollection = CmsCollection & {
  gallery: string[];
  bodycopy: string;
  results: ApartmentResults;
  listing_link: string;
  owner_name: string;
  owner_image: string;
  owner_review: string;
  clients_reviews: any;
  Archived: boolean;
};

export type ArticlesCollection = CmsCollection & {
  bodycopy: string;
  related_services?: ServiceCollection;
};
