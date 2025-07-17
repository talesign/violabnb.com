import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { getId } from "../defaultsUtilities";
import axios from "axios";

let consent_id: string;

export function resetCookiePreferences() {
  deleteCookie("consent");
  window.location.reload();
}

export async function acceptCookies() {
  consent_id = getId();
  setCookie(
    "consent",
    `{"ID": "${consent_id}", "TECHNICAL": true, "SECURITY": true, "PERSONALIZATION": true, "ANALYTICS": true, "MARKETING": true}`,
    {
      maxAge: 60 * 60 * 24 * 365,
    }
  );
  const res = saveCookieConsent();
  return res;
}

export async function refuseCookies() {
  consent_id = getId();
  setCookie(
    "consent",
    `{"ID": "${consent_id}", "TECHNICAL": true, "SECURITY": true, "PERSONALIZATION": false, "ANALYTICS": false, "MARKETING": false}`,
    {
      maxAge: 60 * 60 * 24 * 365,
    }
  );
  const res = saveCookieConsent();
  return res;
}

export async function setPreferencesCookies(
  exp: Boolean,
  ana: Boolean,
  mar: Boolean
) {
  consent_id = getId();
  setCookie(
    "consent",
    `{"ID": "${consent_id}", "TECHNICAL": true, "SECURITY": true, "PERSONALIZATION": ${exp}, "ANALYTICS": ${ana}, "MARKETING": ${mar}}`,
    {
      maxAge: 60 * 60 * 24 * 365,
    }
  );
  const res = saveCookieConsent();
  return res;
}

async function saveCookieConsent() {
  const consent_record = JSON.stringify({
    SCOPED_ID: consent_id,
    LEGAL_NOTICES: "cookie-policy",
    PREFERENCES: JSON.parse(JSON.stringify(getCookie("consent"))),
    PROOFS: {
      CONTENT: getCookie("consent"),
      FORM_BANNER: String(document.getElementById("banner")?.outerHTML),
      FORM_PREFERENCES: String(
        document.getElementById("preferenze")?.outerHTML
      ),
      PAGE_URL: window.location,
      IP_ADDRESS: "",
      USER_AGENT: navigator.userAgent,
    },
  });

  //const res = await axios.post(
  //  `https://dem.talesign.com/api/collections/Cookies/records`,
  //  {
  //    cookie_id: consent_id,
  //    consent: consent_record,
  //    website: process.env.NEXT_PUBLIC_PB_HOST,
  //  }
  //);

  return 200;
}
