import Image from "next/image";

type Collaborator = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
};

type AboutCollaboratorsProps = {
  title: string;
  collaborators: Collaborator[];
};

export default function AboutCollaborators(props: AboutCollaboratorsProps) {
  return (
    <section className="" id="collaboratori">
      <div className="container !py-32">
        <h2 className="pb-6">{props?.title}</h2>
        <div className="grid xl:grid-cols-4 gap-8">
          {props?.collaborators.map(
            (collaborator: Collaborator, index: number) => (
              <article key={"collaborators" + index}>
                <Image
                  src={collaborator?.image}
                  width="500"
                  height="500"
                  alt={collaborator?.title}
                  title={collaborator?.title}
                  className="aspect-square object-cover rounded-xl shadow-xl"
                ></Image>
                <h3 className="pt-6 text-xl">{collaborator?.title}</h3>
                <p className="pb-2">{collaborator?.subtitle}</p>
                <p className="text-sm">{collaborator?.description}</p>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
