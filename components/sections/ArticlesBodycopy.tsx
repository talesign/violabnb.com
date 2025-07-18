import Image from "next/image";
import Link from "next/link";
import FollowOnSocial from "../elements/FollowOnSocial";

type ArticlesBodycopyProps = {
  bodycopy: string;
  id: string;
  featured_image: string;
};

export default function ArticlesBodycopy(props: ArticlesBodycopyProps) {
  return (
    <>
      <section className="container !max-w-prose">
        <Image
          unoptimized
          src={"/content/articles/" + props?.featured_image}
          width="1920"
          height="1080"
          alt="test"
          className="rounded-xl"
        ></Image>
        <div
          dangerouslySetInnerHTML={{ __html: props?.bodycopy }}
          className="bodycopy py-4"
        />
      </section>
      <section className="bg-grayscale-50">
        <div className="container !max-w-prose">
          <div className=" gap-4 py-8">
            <Image
              unoptimized
              src="/images/viola-ricci.avif"
              width="100"
              height="100"
              alt="test"
              className="rounded-full w-24 h-24 object-cover"
            ></Image>
            <div className="pt-6">
              <div>
                <Link
                  href="/chi-sono"
                  className="text-xl hover:underline font-bold"
                >
                  Viola Ricci
                </Link>
              </div>
              <div className="pb-8">
                <p className="text-sm py-3">Property Manager</p>
                <p className="text-sm">
                  Nel mio lavoro gestisco proprietà a Firenze con affittanze
                  turistiche. Sei un proprietario? Contattami per maggiori
                  informazioni
                </p>
              </div>

              <FollowOnSocial />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
