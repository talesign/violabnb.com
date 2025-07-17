import { ResultsData } from "@/lib/types";

type ResultsProps = {
  data: ResultsData[];
};

export default function Results(props: ResultsProps) {
  return (
    <section className=" bg-gray-50">
      <div className="container !py-32">
        <h2 className="pb-6">I miei risultati</h2>
        <div className="grid xl:grid-cols-4 gap-4">
          {props.data.map((item: ResultsData, index: number) => (
            <div
              key={"results" + index}
              className="flex flex-col justify-between aspect-[5/3] p-8 rounded-xl bg-white"
            >
              <div>
                <div className="text-4xl xl:text-6xl py-3 font-bold">
                  {item.quantity}
                </div>
                <div className="">{item.title}</div>
              </div>

              <span className="text-xs">Aggiornato il {item.date}</span>
            </div>
          ))}

          <div className="flex flex-col justify-between flex-wrap content-start aspect-[5/3] p-8 rounded-xl bg-white">
            <div>
              <div className="text-4xl xl:text-6xl py-3 font-bold mr-auto">
                <div className="w-[92%]">
                  <div className="bg-grayscale-950  text-grayscale-950 text-opacity-50 bg-clip-text ">
                    ★★★★★
                  </div>
                </div>
              </div>
              <div className="">Valutazione su AirBnb</div>
            </div>

            <span className="text-xs">Aggiornato il 13 Agosto 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
}
