import Image from "next/image";

type ApartmentsGalleryProps = {
  gallery: string[];
  id: string;
};

export default function ApartentsGallery(props: ApartmentsGalleryProps) {
  return (
    <section className="xl:max-w-[1680px] xl:mx-auto px-6 !max-w-6xl">
      <div className="grid xl:grid-cols-3 grid-rows-2 gap-2">
        {props?.gallery?.map((image_id: string, index: number) => (
          <>
            <Image
              key={image_id + index}
              src={
                "/content/apartments/" + props.id + "/" + image_id
              }
              width="500"
              height="500"
              alt="test"
              className="w-full aspect-square object-cover first:col-span-2 first:row-span-2"
            ></Image>
          </>
        ))}
      </div>
    </section>
  );
}
