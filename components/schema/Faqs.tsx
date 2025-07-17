import { FaqData, FaqMarkupData, FaqProps } from "@/lib/types";

export default function Faqs(props: FaqProps) {
  let faq_list_data: FaqMarkupData[] = [];
  props.data.map((element: FaqData) =>
    faq_list_data.push({
      "@type": "Question",
      name: element.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: element.answer,
      },
    })
  );
  const faqs_data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq_list_data,
  };

  return (
    <>
      {props.data.map((element: FaqData, index: number) => (
        <details key={"FAQ_" + (index + 1)} className="border-b py-4">
          <summary className="cursor-pointer list-none flex items-center justify-between after:content-['_+_'] after:text-md after:flex after:justify-center after:items-center after:w-8 after:h-8 after:rounded-full after:bg-slate-100">
            {element.question}
          </summary>
          <p>{element.answer}</p>
        </details>
      ))}
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs_data) }}
      />
    </>
  );
}
