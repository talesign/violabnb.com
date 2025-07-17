import Accordion from "../general/accordion/accordion";

type FaqData = {
  header: string;
  body: string;
};

type OwnersFaqsProps = {
  title: string;
  faqs: FaqData[];
};

export default function OwnersFaqs(props: OwnersFaqsProps) {
  return (
    <section className="bg-grayscale-50">
      <div className="container !max-w-6xl !py-16 grid xl:grid-cols-2">
        <h2 className="pb-12">{props?.title}</h2>
        <div>
          {props?.faqs?.map((faq: FaqData, index: number) => (
            <Accordion
              header={faq?.header}
              body={faq?.body}
              key={faq?.header + index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
