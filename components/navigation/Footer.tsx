import {
  services_list,
  about_list,
  social_list,
} from "@/lib/staticContent/footer_content";
import FooterColumn from "./FooterColumn";
import Credits from "../defaults/Credits";

export default function Footer() {
  return (
    <footer className="bg-grayscale-50 border-t border-gray-200">
      <div className="container grid xl:grid-cols-3 col-span-8 !pb-0 !pt-12 !max-w-6xl">
        <FooterColumn list={services_list} title="I Servizi" />
        <FooterColumn list={about_list} title="Su di me" />
        <FooterColumn list={social_list} title="Seguimi su" />
      </div>
      <Credits />
    </footer>
  );
}
