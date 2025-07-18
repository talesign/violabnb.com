import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton";

export default function DefaultCTA() {
  return (
    <section className="py-16 bg-grayscale-50">
      <div className="container !max-w-6xl">
        <div className="grid xl:grid-cols-2 gap-4 bg-white rounded-lg shadow">
          <Image
            unoptimized
            src="/images/call-to-action-image.avif"
            width="500"
            height="500"
            alt="test"
            className="aspect-video object-cover rounded-lg"
          ></Image>
          <div className="flex flex-col justify-center items-start gap-4 p-8">
            <h2>Interessato ai miei servizi?</h2>
            <p className="text-grayscale-600">
              Contattami per avere maggiori informazioni, fissare un sopralluogo
              e ricevere un preventivo personalizzato.
            </p>
            <PrimaryButton link_label="Contattami" link_url="/contatti" />
          </div>
        </div>
      </div>
    </section>
  );
}
