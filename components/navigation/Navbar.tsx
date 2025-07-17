"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SimpleLink, SocialItems } from "@/lib/types";
import {
  navbar_items,
  navbar_social,
} from "@/lib/staticContent/navbar_content";
import PrimaryButton from "../PrimaryButton";

function openNavbar() {
  document.getElementById("nav")?.classList.remove("hidden");
  document.getElementById("body")?.classList.add("h-screen");
  document.getElementById("body")?.classList.add("overflow-hidden");
}

function closeNavbar() {
  document.getElementById("nav")?.classList.add("hidden");
  document.getElementById("body")?.classList.remove("h-screen");
  document.getElementById("body")?.classList.remove("overflow-hidden");
}

export default function Navbar() {
  const currentRoute = usePathname();

  return (
    <header className="border-b border-gray-200 !z-50 relative">
      <nav className="container text-sm grid grid-cols-2 items-center relative !py-4 xl:!py-0 px-6">
        <Link href="/" className="">
          <Image
            src="/images/violabnb-logo.avif"
            width={100}
            height={50}
            alt="Logo Viola Ricci"
            className=""
          ></Image>
        </Link>
        <Image
          onClick={openNavbar}
          src="/images/hamburger-close.svg"
          width={25}
          height={25}
          alt="Open menu"
          className="justify-self-end xl:hidden"
        ></Image>
        <div
          id="nav"
          className="hidden xl:block justify-self-end col-span-2 xl:col-span-1 px-6 xl:px-0 py-4 xl:py-0 bg-white w-full xl:w-auto h-screen xl:h-auto absolute xl:static top-0 left-0"
        >
          <Image
            onClick={closeNavbar}
            src="/images/hamburger-open.svg"
            width={25}
            height={50}
            alt="Open menu"
            className="justify-self-end xl:hidden ml-auto"
          ></Image>
          <ul className="xl:flex flex-col xl:flex-row items-center gap-6 list-none border-b xl:border-b-0 pb-6 xl:pb-0">
            {navbar_items.map((item: SimpleLink, index: number) => (
              <li
                key={"navbar" + index}
                className={
                  currentRoute === item.slug
                    ? "xl:border-b-2 border-grayscale-950 xl:p-2"
                    : "xl:border-b-2 border-white  xl:p-2"
                }
              >
                <Link
                  onClick={closeNavbar}
                  href={item.slug}
                  className={
                    currentRoute === item.slug
                      ? "p-0 xl:p-2 rounded-lg font-bold py-4 block"
                      : "p-0 xl:p-2 rounded-lg font-bold hover:bg-gray-200 py-4 block"
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li onClick={closeNavbar}>
              <PrimaryButton
                link_label="Sei un proprietario?"
                link_url="/proprietari"
              />
            </li>
          </ul>
          <ul className="flex xl:hidden gap-4 list-none pt-10">
            {navbar_social.map((social: SocialItems, index: number) => (
              <li key={"navbar_social" + index}>
                <Link href={social.link}>
                  <Image
                    src={social.icon}
                    width={25}
                    height={25}
                    alt="Open menu"
                    className="justify-self-end xl:hidden ml-auto"
                  ></Image>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
