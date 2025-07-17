"use client";

import {
  acceptCookies,
  refuseCookies,
  setPreferencesCookies,
} from "@/lib/defaults/cookies/cookiesBanner";
import { hasCookie } from "cookies-next";
import { useState, useEffect } from "react";

export default function Cookies() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    if (!hasCookie("consent")) {
      setShowBanner(true);
      document.body.classList.add("overflow-y-hidden");
    } else {
      setShowBanner(false);
      document.body.classList.remove("overflow-y-hidden");
    }
  }, []);

  return (
    <>
      {showBanner && (
        <>
          <div
            id="banner"
            className="fixed bottom-0 left-0 pt-16 w-screen h-screen bg-black bg-opacity-50 z-20 grid items-end cookies"
          >
            <div className="xl:m-4 xl:max-w-2xl bg-white p-8 xl:rounded-lg col-start-1 row-start-1">
              <p className="text-xs xl:text-sm">
                Non stiamo parlando di quelli buoni e croccanti. Questi cookie
                ci aiutano a mantenere il nostro sito sicuro, regalarti
                un'esperienza migliore e mostrarti annunci più pertinenti. Non
                li attiveremo se non accetti. Vuoi saperne di più o modificare
                le tue preferenze? Clicca su Personalizza cookie Questo sito
                utilizza i cookie per misurare e migliorare la tua esperienza.
                Puoi decidere a quali cookie (divisi per categoria) prestare,
                rifiutare o revocare il tuo consenso in qualsiasi momento
                accedendo all'apposita sezione, cliccando su "Personalizza
                cookie". Cliccando su “Accetta”, accetti di memorizzare tutti i
                cookie sul tuo dispositivo. Il tasto “Rifiuta” chiude il banner,
                continuerai la navigazione in assenza di cookie o altri
                strumenti di tracciamento diversi da quelli tecnici. Negando il
                consenso alcune funzionalità del sito verranno disattivate. Per
                ulteriori informazioni sui cookie consulta la nostra Cookie
                policy.
              </p>
              <div className="flex flex-col-reverse items-center justify-between gap-2 mt-8">
                <button
                  className="cookies-secondary-button"
                  onClick={() => setShowPreferences(true)}
                >
                  Personalizza cookie
                </button>
                <div className="flex items-center justify-between gap-2 w-full">
                  <button
                    className="cookies-primary-button"
                    onClick={async () => {
                      const res = await refuseCookies();
                      setShowBanner(false);
                      setShowPreferences(false);
                      document.body.classList.remove("overflow-y-hidden");
                      if (res === 200) {
                        console.log("Cookie salvati correttamente.");
                      } else {
                        console.log(
                          "Errore. I cookie non sono stati salvati nel server."
                        );
                      }
                    }}
                  >
                    Rifiuta
                  </button>
                  <button
                    className="cookies-primary-button"
                    onClick={async () => {
                      const res = await acceptCookies();
                      setShowBanner(false);
                      setShowPreferences(false);
                      document.body.classList.remove("overflow-y-hidden");
                      if (res === 200) {
                        console.log("Cookie salvati correttamente.");
                      } else {
                        console.log(
                          "Errore. I cookie non sono stati salvati nel server."
                        );
                      }
                    }}
                  >
                    Accetta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {showPreferences && (
        <div
          id="banner"
          className=" fixed bottom-0 left-0 pt-16 w-screen h-screen xl:m-4 z-20 grid items-end overflow-scroll xl:overflow-auto cookies"
        >
          <div
            id="preferenze"
            className=" xl:max-w-2xl bg-white p-8 xl:rounded-lg col-start-1 row-start-1"
          >
            <div className="">
              <div>
                <div>
                  <button
                    className="cookies-secondary-button !w-auto"
                    onClick={() => setShowPreferences(false)}
                  >
                    Indietro
                  </button>
                  <p className="text-xl font-bold my-4">
                    Le tue preferenze relative alla privacy
                  </p>
                  <p className="text-xs xl:text-sm">
                    Questo pannello ti permette di esprimere alcune preferenze
                    relative al trattamento delle tue informazioni personali.
                    Puoi rivedere e modificare le tue scelte in qualsiasi
                    momento accedendo al presente pannello tramite l’apposito
                    link presente nel footer del sito. Per rifiutare il tuo
                    consenso alle attività di trattamento descritte di seguito,
                    disattiva i singoli comandi o utilizza il pulsante “Rifiuta
                    tutto” e conferma di voler salvare le scelte effettuate.
                  </p>
                  <div className="flex items-center justify-between gap-2 w-full mt-4 mb-16">
                    <button
                      className="cookies-primary-button"
                      onClick={async () => {
                        const res = await refuseCookies();
                        setShowBanner(false);
                        setShowPreferences(false);
                        document.body.classList.remove("overflow-y-hidden");
                        if (res === 200) {
                          console.log("Cookie salvati correttamente.");
                        } else {
                          console.log(
                            "Errore. I cookie non sono stati salvati nel server."
                          );
                        }
                      }}
                    >
                      Rifiuta
                    </button>
                    <button
                      className="cookies-primary-button"
                      onClick={async () => {
                        const res = await acceptCookies();
                        setShowBanner(false);
                        setShowPreferences(false);
                        document.body.classList.remove("overflow-y-hidden");
                        if (res === 200) {
                          console.log("Cookie salvati correttamente.");
                        } else {
                          console.log(
                            "Errore. I cookie non sono stati salvati nel server."
                          );
                        }
                      }}
                    >
                      Accetta
                    </button>
                  </div>
                  <p className="text-xl font-bold mb-4">
                    Le tue preferenze relative al tracciamento
                  </p>
                  <div className="text-xs xl:text-sm">
                    Questo pannello ti permette di esprimere alcune preferenze
                    relative al trattamento delle tue informazioni personali.
                    Puoi rivedere e modificare le tue scelte in qualsiasi
                    momento accedendo al presente pannello tramite l’apposito
                    link presente nel footer del sito. Per rifiutare il tuo
                    consenso alle attività di trattamento descritte di seguito,
                    disattiva i singoli comandi o utilizza il pulsante “Rifiuta
                    tutto” e conferma di voler salvare le scelte effettuate.
                    <div className="my-4">
                      {/* NECESSARY */}
                      <div className="py-4 border-y border-g900">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-sm">Necessari</p>
                          <div className="flex items-center gap-4 text-xs">
                            <button
                              className="cookies-preferences-button"
                              onClick={() =>
                                document
                                  .getElementById("desc-nec")
                                  ?.classList.toggle("hidden")
                              }
                            >
                              Mostra descrizione ▾
                            </button>

                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked
                                disabled
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-g500 peer-focus:outline-none peer-focus:ring-2 rounded-full peer  peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:border-g100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-opacity-50 cookies-preferences-toggle-off"></div>
                            </label>
                          </div>
                        </div>
                        <div>
                          <p id="desc-nec" className="text-xs my-2 hidden">
                            Questi strumenti di tracciamento sono strettamente
                            necessari per garantire il funzionamento e la
                            fornitura del servizio che ci hai richiesto e,
                            pertanto, non richiedono il tuo consenso.
                          </p>
                        </div>
                      </div>

                      {/* ANALYTICS ANON */}
                      <div className=" py-4 border-y border-g900">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-sm">
                            Misurazione (in forma anonima e aggregata)
                          </p>
                          <div className="flex items-center gap-4 text-xs">
                            <button
                              className="cookies-preferences-button"
                              onClick={() =>
                                document
                                  .getElementById("desc-ana-anon")
                                  ?.classList.toggle("hidden")
                              }
                            >
                              Mostra descrizione ▾
                            </button>

                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked
                                disabled
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-g500 peer-focus:outline-none peer-focus:ring-2 rounded-full peer  peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:border-g100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-opacity-50 cookies-preferences-toggle-off"></div>
                            </label>
                          </div>
                        </div>
                        <div>
                          <p id="desc-ana-anon" className="text-xs my-2 hidden">
                            Utilizzati unicamente in forma aggregata e anonima
                            per ottenere dati statistici in merito alle visite
                            al nostro sito. In particolare, l’indirizzo IP
                            raccolto tramite questi Cookie viene opportunamente
                            anonimizzato, in modo da escluderne la
                            riconducibilità al singolo utente. Questi tipi di
                            Cookie sono equiparabili ai Cookie tecnici e
                            pertanto non è necessario il previo consenso da
                            parte dell’utente.
                          </p>
                        </div>
                      </div>

                      {/* EXPERIENCE */}
                      <div className="py-4 border-b border-g900">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-sm">Esperienza</p>
                          <div className="flex items-center gap-4 text-xs">
                            <button
                              className="cookies-preferences-button"
                              onClick={() =>
                                document
                                  .getElementById("desc-esp")
                                  ?.classList.toggle("hidden")
                              }
                            >
                              Mostra descrizione ▾
                            </button>

                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                id="experience"
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-g500 peer-focus:outline-none peer-focus:ring-2 rounded-full peer  peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:border-g100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all cookies-preferences-toggle"></div>
                            </label>
                          </div>
                        </div>
                        <div>
                          <p id="desc-esp" className="text-xs my-2 hidden">
                            Questi strumenti di tracciamento ci permettono di
                            migliorare la qualità della tua esperienza utente e
                            consentono le interazioni con piattaforme, reti e
                            contenuti esterni.
                          </p>
                        </div>
                      </div>

                      {/* ANALYTIC */}
                      <div className="py-4 border-b border-g900">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-sm">Misurazione</p>
                          <div className="flex items-center gap-4 text-xs">
                            <button
                              className="cookies-preferences-button"
                              onClick={() =>
                                document
                                  .getElementById("desc-mis")
                                  ?.classList.toggle("hidden")
                              }
                            >
                              Mostra descrizione ▾
                            </button>

                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                id="analytics"
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-g500 peer-focus:outline-none peer-focus:ring-2 rounded-full peer  peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:border-g100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all cookies-preferences-toggle"></div>
                            </label>
                          </div>
                        </div>
                        <div>
                          <p id="desc-mis" className="text-xs my-2 hidden">
                            Questi strumenti di tracciamento ci permettono di
                            misurare il traffico e analizzare il tuo
                            comportamento per migliorare il nostro servizio.
                          </p>
                        </div>
                      </div>

                      {/* MARKETING */}
                      <div className="py-4 border-b border-g900">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-sm">Marketing</p>
                          <div className="flex items-center gap-4 text-xs">
                            <button
                              className="cookies-preferences-button"
                              onClick={() =>
                                document
                                  .getElementById("desc-mar")
                                  ?.classList.toggle("hidden")
                              }
                            >
                              Mostra descrizione ▾
                            </button>

                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                id="marketing"
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-g500 peer-focus:outline-none peer-focus:ring-2 rounded-full peer  peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:border-g100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all cookies-preferences-toggle"></div>
                            </label>
                          </div>
                        </div>
                        <div>
                          <p id="desc-mar" className="text-xs my-2 hidden">
                            Questi strumenti di tracciamento ci permettono di
                            misurare il traffico e analizzare il tuo
                            comportamento per migliorare il nostro servizio.
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      className="cookies-primary-button"
                      onClick={async () => {
                        const ana = document.getElementById(
                          "analytics"
                        ) as HTMLInputElement;
                        const exp = document.getElementById(
                          "experience"
                        ) as HTMLInputElement;
                        const mar = document.getElementById(
                          "marketing"
                        ) as HTMLInputElement;
                        const res = await setPreferencesCookies(
                          ana?.checked,
                          exp?.checked,
                          mar?.checked
                        );
                        setShowBanner(false);
                        setShowPreferences(false);
                        document.body.classList.remove("overflow-y-hidden");
                        if (res === 200) {
                          console.log("Cookie salvati correttamente.");
                        } else {
                          console.log(
                            "Errore. I cookie non sono stati salvati nel server."
                          );
                        }
                      }}
                    >
                      Conferma le tue preferenze
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
