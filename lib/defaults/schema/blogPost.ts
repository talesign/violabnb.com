const ArticleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://" + process.env.NEXT_PUBLIC_HOST + "link_articolo",
  },
  headline: "title",
  description: "seo_description",
  image: "link_image",
  author: {
    "@type": "Person",
    name: "autore",
    url: "https://" + process.env.NEXT_PUBLIC_HOST + "link_autore",
  },
  publisher: {
    "@type": "Organization",
    name: process.env.NEXT_PUBLIC_SITE_NAME,
    logo: {
      "@type": "ImageObject",
      url: "link_logo",
    },
  },
  datePublished: ".created",
  dateModified: ".updated",
};
