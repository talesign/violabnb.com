type TableRow = {
  title: string;
  description: string;
  column_viola: string;
  column_competitors: string;
};

type OwnerComparisonsProps = {
  title: string;
  table: TableRow[];
};

export default function OwnersComparisons(props: OwnerComparisonsProps) {
  return (
    <section className="container !max-w-6xl !py-16">
      <h2 className="text-center">{props?.title}</h2>
      <div className="overflow-auto py-16">
        <div className="grid grid-cols-[200px_1fr_1fr] md:grid-cols-3 gap-6 pt-16 max-w-max relative">
          <div className="sticky left-0 bg-white"></div>
          <div className="xl:text-xl text-center">Viola</div>
          <div className="xl:text-xl text-center">Concorrenti</div>
          <div className="col-span-3 border-t"></div>
          {props?.table?.map((row: TableRow, index: number) => (
            <div
              key={row.title + index}
              className="grid grid-cols-[200px_1fr_1fr] md:grid-cols-3 gap-6 pt-16 col-span-3"
            >
              <div className="sticky left-0 bg-white">
                <h3 className="text-base pb-6">{row?.title}</h3>
                <p className="text-xs xl:text-sm">{row?.description}</p>
              </div>
              <div className="text-xl text-center">{row?.column_viola}</div>
              <div className="text-xl text-center">
                {row?.column_competitors}
              </div>
              <div className="col-span-3 border-t"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
