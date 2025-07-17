"use client";

import Link from "next/link";
import { resetCookiePreferences } from "@/lib/defaults/cookies/cookiesBanner";

export default function Credits() {
  return (
    <div id="credits" className="container !max-w-6xl">
      <ul className="flex flex-col xl:flex-row gap-4 text-sm list-none border-t border-grayscale-200 pt-6">
        <li>
          <Link href="https://talesign.com" className="hover:underline">
            Made with ❤️ by Talesign
          </Link>
        </li>
        <li>
          <Link href="/legal/privacy" className="hover:underline">
            Privacy policy
          </Link>
        </li>
        <li>
          <Link href="/legal/cookie" className="hover:underline">
            Cookie policy
          </Link>
        </li>
        <li>
          <button onClick={resetCookiePreferences} className="hover:underline">
            Cambia le tue preferenze
          </button>
        </li>
      </ul>
    </div>
  );
}
