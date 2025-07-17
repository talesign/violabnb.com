export default function SimpleHero(props: { title: string; subtitle: string }) {
  return (
    <header className="bg-grayscale-50">
      <div className="container !py-32 ">
        <h1 className="pb-6">{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </header>
  );
}
