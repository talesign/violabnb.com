import formSubmit from "@/lib/defaults/form/formSubmit";
import { getId } from "@/lib/defaults/defaultsUtilities";
import { formNotification } from "@/lib/defaults/form/formNotification";
import { verifyCaptchaAction } from "@/lib/defaults/form/verifyCaptchaAction";

declare const grecaptcha: any;

export async function formHandler(e: any) {
  e.preventDefault();
  grecaptcha.ready(function () {
    grecaptcha
      .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
        action: "submit",
      })
      .then(function (token: any) {
        const verification = verifyCaptchaAction(token);

        verification.then((value) => {
          if (value > 0.6) {
            let marketing_consent = false;
            const form_data = new FormData(e.target);
            const request = Object.fromEntries(form_data);
            const request_id = getId();
            if (request.Marketing) marketing_consent = true;
            const consent = {
              SCOPED_ID: request_id,
              LEGAL_NOTICES: "privacy-policy",
              PREFERENCES: {
                MARKETING: marketing_consent,
              },
              PROOFS: {
                FORM: String(document.getElementById("form")?.outerHTML),
                PAGE_URL: window.location,
                IP_ADDRESS: "",
                USER_AGENT: navigator.userAgent,
              },
            };
            const res = formSubmit(request_id, request, consent);
            res.then((status) => {
              if (status === 200) {
                const notification = formNotification(
                  request,
                  window.location.href,
                  document.title
                );
                notification.then((res) => {
                  if (res == 200) {
                    window.location.href = "/grazie";
                  } else {
                    alert(
                      "La richiesta non può essere processata. Ci scusiamo per il problema."
                    );
                  }
                });
              } else {
                alert(
                  "Al momento i nostri sistemi sono offline. Ci scusiamo per il disagio. Contattaci con un metodo alternativo nella pagina contatti."
                );
              }
            });
          } else {
            alert(
              "Recaptcha fallito. Se sei umano prova un altro metodo di contatto."
            );
          }
        });
      });
  });
}
