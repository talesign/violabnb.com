import getListLegal from "@/lib/defaults/legal/getListLegal";
import getSingleLegal from "@/lib/defaults/legal/getSingleLegal";
import { Legal } from "@/lib/types";
import Link from "next/link";

export default async function LegalSinglePage({
  params,
}: {
  params: { slug: string };
}) {
  const SingleLegalData = getSingleLegal(params.slug);
  return (
    <>
      <header className="">
        <div className="container !max-w-prose !pb-0">
          <Link href="/legal" className="underline">
            ← Torna alla lista
          </Link>
          <h1 className="text-4xl pt-8">{SingleLegalData.title}</h1>
          <div className="flex gap-4 py-8">
            <div>
              <div>
                <span className="text-xs">
                  Pubblicato il{" "}
                  {new Date(SingleLegalData.created).toLocaleString()} ·
                  Aggiornato il{" "}
                  {new Date(SingleLegalData.updated).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="container !max-w-prose !pt-0">
        <div
          dangerouslySetInnerHTML={{ __html: SingleLegalData.bodycopy }}
          className="bodycopy pb-4"
        />
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const ListLegalData = getListLegal();

  return ListLegalData.map((Item: Legal) => ({ slug: Item.slug, }));
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const awaitSingleLegalData: Promise<Legal> = getSingleLegal(params.slug);
  const [SingleLegalData] = await Promise.all([awaitSingleLegalData]);

  return {
    title: SingleLegalData.seo_title,
    description: SingleLegalData.seo_description,

    openGraph: {
      title: SingleLegalData.seo_title,
      description: SingleLegalData.seo_description,
      url: "/legal/" + params.slug,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME,
      locale: "it_IT",
      type: "website",
    },
  };
}
