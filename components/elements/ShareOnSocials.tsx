"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ShareOnSocials() {
  const [windowLocation, setWindowLocation] = useState("");

  useEffect(() => {
    setWindowLocation(window.location.pathname as string);
  }, []);
  return (
    <div className="py-4 border-y border-grayscale-100 flex justify-between gap-4 items-center">
      <span className="text-xs uppercase tracking-wider">Condividi su:</span>
      <div className="flex gap-4">
        <Link
          href={
            "https://www.facebook.com/sharer/sharer.php?u=https://" +
            process.env.NEXT_PUBLIC_HOST +
            windowLocation
          }
          target="_blank"
          title="Condividi su Facebook"
        >
          <Image
            unoptimized
            src="/images/facebook_logo.webp"
            width="50"
            height="50"
            alt="Facebook"
            className="w-8 h-8 grayscale hover:grayscale-0"
          ></Image>
        </Link>
        <Link
          href={
            "https://twitter.com/intent/tweet?url=https://" +
            process.env.NEXT_PUBLIC_HOST +
            windowLocation
          }
          target="_blank"
          title="Condividi su X"
        >
          <Image
            unoptimized
            src="/images/twitter-x_logo.webp"
            width="50"
            height="50"
            alt="test"
            className="w-8 h-8 grayscale hover:grayscale-0"
          ></Image>
        </Link>
        <Link
          href={
            "https://www.linkedin.com/shareArticle?mini=true&url=https://" +
            process.env.NEXT_PUBLIC_HOST +
            windowLocation
          }
          target="_blank"
          title="Condividi su LinkedIn"
        >
          <Image
            unoptimized
            src="/images/linkedin_logo.webp"
            width="50"
            height="50"
            alt="Linkedin"
            className="w-8 h-8 grayscale hover:grayscale-0"
          ></Image>
        </Link>
      </div>
    </div>
  );
}
