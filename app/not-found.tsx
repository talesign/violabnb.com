import PrimaryButton from "@/components/PrimaryButton";

export default function NotFound() {
  return (
    <header className="container !max-w-6xl flex flex-col items-center min-h-[50vh] justify-center gap-6">
      <h1 className="text-4xl">Errore 404</h1>
      <p className="text-xl">Non ho trovato la pagina che hai richiesto.</p>
      <PrimaryButton link_label="Torna alla home" link_url="/" />
    </header>
  );
}
