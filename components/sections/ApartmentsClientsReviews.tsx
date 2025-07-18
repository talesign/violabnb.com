import Image from "next/image";

type ReviewProps = {
  author_name: string;
  author_image: string;
  comments: string;
  rating: number;
  localizedReview: string;
  disclaimer: string;
};

type ClientsReviewProps = {
  data: ReviewProps[];
};

function Review(props: ReviewProps) {
  // && props.comments.lenght > 300
  if (props.rating == 5) {
    return (
      <>
        <div
          key={props.rating + props.author_name}
          className="shadow-lg rounded-lg flex flex-col items-start snap-center xl:min-w-80 min-w-full p-1"
        >
          <header className="p-6 flex gap-4 items-center content-start">
            <Image
              unoptimized
              src={props?.author_image}
              height={50}
              width={50}
              alt="something"
              className="object-cover rounded-full"
            ></Image>
            <div>
              <div className="text-sm">{props?.author_name}</div>
              <div className="text-xs">{props?.disclaimer}</div>
              <div className="text-xs">Valutazione {props?.rating}/5</div>
            </div>
          </header>

          <div
            className="text-sm block text-ellipsis max-h-56 text-wrap overflow-y-scroll scrollbar-2 pb-6 px-6 w-full"
            dangerouslySetInnerHTML={{ __html: props?.localizedReview }}
          ></div>
        </div>
      </>
    );
  }
  return;
}

export default function ApartmentsClientsReviews(props: ClientsReviewProps) {
  return (
    <>
      <section className="py-24">
        <div className="container !max-w-6xl ">
          <h2 className="text-3xl ">
            Cosa dicono i clienti che soggiarnano nei miei appartamenti
          </h2>
        </div>
        <div className="scrollbar-2 overflow-x-scroll snap-x">
          <div className="container !max-w-6xl !pb-6 flex gap-6 ">
            {props.data.map((item: any, index: number) => (
              <Review
                author_image={item.author.pictureUrl}
                author_name={item.author.firstName}
                comments={item.comments}
                rating={item.rating}
                localizedReview={
                  item.localizedReview
                    ? item.localizedReview.comments
                    : item.comments
                }
                disclaimer={
                  item.localizedReview
                    ? item.localizedReview.disclaimer
                    : "Lingua originale: italiano"
                }
              ></Review>
            ))}
            {props.data.length === 0 && (
              <div>Ancora non ci sono recensioni!</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
