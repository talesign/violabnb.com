import Image from "next/image";
import Link from "next/link";
import ShareOnSocials from "../elements/ShareOnSocials";

type HeroArticlesProps = {
  title: string;
  updated: string;
  bodycopy: string;
};

export default function HeroArticles(props: HeroArticlesProps) {
  return (
    <header className="">
      <div className="container !max-w-prose ">
        <h1 className="text-4xl pt-8">{props?.title}</h1>
        <div className="flex gap-4 py-8">
          <Image
            unoptimized
            src="/images/viola-ricci.avif"
            width="100"
            height="100"
            alt="test"
            className="rounded-full w-12 h-12 object-cover"
          ></Image>
          <div>
            <div>
              <Link href="/chi-sono" className="text-sm hover:underline">
                Viola Ricci
              </Link>
            </div>
            <div>
              <span className="text-xs">
                Pubblicato il {new Date(props?.updated).toLocaleString()} ·{" "}
                {Math.round(props?.bodycopy.split(" ").length / 250)} minuti di
                lettura
              </span>
            </div>
          </div>
        </div>
        <ShareOnSocials />
      </div>
    </header>
  );
}
