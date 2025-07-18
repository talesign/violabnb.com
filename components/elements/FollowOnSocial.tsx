import Link from "next/link";
import Image from "next/image";
import { navbar_social } from "@/lib/staticContent/navbar_content";
import { SocialItems } from "@/lib/types";

export default function FollowOnSocial() {
  return (
    <div className="py-4 border-y border-grayscale-200 flex justify-between gap-4 items-center">
      <span className="text-xs uppercase tracking-wider">Seguimi su:</span>
      <div className="flex gap-4">
        {navbar_social.map((social_item: SocialItems) => (
          <Link
            href={social_item.link}
            target="_blank"
            title={social_item.title}
          >
            <Image
              unoptimized
              src={social_item.icon}
              width="40"
              height="40"
              alt={social_item.title}
              className="w-8 h-8 p-2 rounded-xl bg-grayscale-100 grayscale hover:grayscale-0"
            ></Image>
          </Link>
        ))}
      </div>
    </div>
  );
}
