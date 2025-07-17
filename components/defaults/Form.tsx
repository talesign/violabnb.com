"use client";

import { useState } from "react";
import { z } from "zod";
import { useAppForm } from "../form";
import { SubmitData, submit } from "../form/actions";
import { Check, X } from "lucide-react";

// import { useState } from "react";
// import { formHandler } from "@/lib/defaults/form/formHandler";
//
// export default function Form() {
//   const [Nome, setNome] = useState("");
//   const [Cognome, setCognome] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Telefono, setTelefono] = useState("");
//   const [Informazioni, setInformazioni] = useState("");
//   const [Marketing, setMarketing] = useState(false);
//
//   const handleChangeNome = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setNome(event?.target?.value);
//   };
//   const handleChangeCognome = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCognome(event?.target?.value);
//   };
//   const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(event?.target?.value);
//   };
//   const handleChangeTelefono = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setTelefono(event?.target?.value);
//   };
//   const handleChangeInformazioni = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setInformazioni(event?.target?.value);
//   };
//
//   const handleChangeMarketing = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setMarketing(!Marketing);
//   };
//
//   return (
//     <>
//       <form
//         onSubmit={formHandler}
//         id="form"
//         className="flex flex-col gap-2 bg-white p-12 shadow rounded-xl"
//       >
//         <div>
//           <label
//             htmlFor="Nome"
//             className="uppercase text-sm tracking-wide cursor-text font-bold py-1 block"
//           >
//             Nome
//           </label>
//           <input
//             className="text-black text-sm border rounded p-2 px-4 w-full"
//             type="text"
//             id="Nome"
//             name="Nome"
//             value={Nome}
//             onChange={handleChangeNome}
//             onBlur={handleChangeNome}
//             maxLength={30}
//             required
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="Cognome"
//             className="uppercase text-sm tracking-wide cursor-text font-bold py-1 block"
//           >
//             Cognome
//           </label>
//           <input
//             className="text-black text-sm border rounded p-2 px-4 w-full"
//             type="text"
//             id="Cognome"
//             name="Cognome"
//             value={Cognome}
//             onChange={handleChangeCognome}
//             onBlur={handleChangeCognome}
//             maxLength={30}
//             required
//           />
//         </div>
//
//         <div>
//           <label
//             htmlFor="Email"
//             className="uppercase text-sm tracking-wide cursor-text font-bold py-1 block"
//           >
//             Email
//           </label>
//           <input
//             className="text-black text-sm border rounded p-2 px-4 w-full"
//             type="email"
//             id="Email"
//             name="Email"
//             value={Email}
//             onChange={handleChangeEmail}
//             onBlur={handleChangeEmail}
//             maxLength={30}
//             required
//           />
//         </div>
//
//         <div>
//           <label
//             htmlFor="Telefono"
//             className="uppercase text-sm tracking-wide cursor-text font-bold py-1 block"
//           >
//             Telefono
//           </label>
//           <input
//             className="text-black text-sm border rounded p-2 px-4 w-full"
//             type="phone"
//             id="Telefono"
//             name="Telefono"
//             value={Telefono}
//             onChange={handleChangeTelefono}
//             onBlur={handleChangeTelefono}
//             maxLength={30}
//             required
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="Informazioni"
//             className="uppercase text-sm tracking-wide cursor-text font-bold py-1 block "
//           >
//             Informazioni
//           </label>
//           <input
//             className="text-black text-sm border rounded p-2 px-4 w-full"
//             type="area"
//             id="Informazioni"
//             name="Informazioni"
//             value={Informazioni}
//             onChange={handleChangeInformazioni}
//             onBlur={handleChangeInformazioni}
//             maxLength={200}
//             required
//           />
//         </div>
//
//         <div className="flex items-center">
//           <input
//             className=""
//             type="checkbox"
//             id="Marketing"
//             name="Marketing"
//             value="true"
//             onChange={handleChangeMarketing}
//           />
//           <label
//             htmlFor="Marketing"
//             className="cursor-pointer pl-2 py-2 text-sm"
//           >
//             Sì, desidero ricevere novità e notizie sul mio operato.
//           </label>
//         </div>
//         <button
//           className="py-4 px-6 text-white bg-gradient-to-br from-full-100 to-full-200 rounded-xl font-bold block"
//           type="submit"
//         >
//           Invia
//         </button>
//         <div className="">
//           <p className="text-xs">
//             Cliccando sul pulsante "Invia" si accetta le{" "}
//             <a
//               className="underline"
//               href={
//                 "https://" + process.env.NEXT_PUBLIC_HOST + "/legal/privacy"
//               }
//             >
//               Norme sulla privacy
//             </a>{" "}
//             di questo sito.
//           </p>
//           <p className="text-xs">
//             Questo sito è protetto da reCAPTCHA. Si applicano le{" "}
//             <a className="underline" href="https://policies.google.com/privacy">
//               Norme sulla privacy
//             </a>{" "}
//             e i{" "}
//             <a className="underline" href="https://policies.google.com/terms">
//               Termini di servizio
//             </a>{" "}
//             di Google.
//           </p>
//         </div>
//       </form>
//     </>
//   );
// }

const dataSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email("Inserisci una email corretta."),
  phone: z.string(),
  body: z.string(),
  cf_turnstile_response: z.string(),
});
type DataType = z.infer<typeof dataSchema>;
const defaultData: DataType = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  body: "",
  cf_turnstile_response: "",
};

export default function Form() {
  const [success, setSuccess] = useState<boolean | undefined>();
  const form = useAppForm({
    defaultValues: defaultData,
    validators: {
      onSubmit: dataSchema,
    },
    onSubmit: async ({ value }) => {
      const submitData: SubmitData = {
        data: {
          Nome: value.name,
          Cognome: value.surname,
          Email: value.email,
          Telefono: value.phone,
          Informazioni: value.body,
        },
        options: {
          timestamp: new Date().toISOString(),
          form_id: "default_contact_form",
          documents: [],
          evidences: [],
        },
        token: value.cf_turnstile_response,
      };
      const response = await submit(submitData);

      if (response.success) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    },
  });

    return (
    <form
className="flex flex-col gap-4 bg-white p-12 shadow rounded-xl"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
        <form.AppField
          name="name"
          children={(field) => (
            <field.TextField
              label="Nome"
              placeholder="Inserisci il tuo nome"
            />
          )}
        />

        <form.AppField
          name="surname"
          children={(field) => (
            <field.TextField
              label="Cognome"
              placeholder="Inserisci il tuo cognome"
            />
          )}
        />
        <form.AppField
          name="email"
          children={(field) => (
            <field.TextField
              label="Email"
              placeholder="La tua email..."
            />
          )}
        />
        <form.AppField
          name="phone"
          children={(field) => (
            <field.TextField
              label="Telefono"
              placeholder="Inserisci il tuo telefono"
            />
          )}
        />
      <form.AppField
        name="body"
        children={(field) => (
          <field.TextField label="Informationi" placeholder="Di cosa hai bisogno?" />
        )}
      />
      <form.AppField
        name="cf_turnstile_response"
        children={(field) => <field.Turnstile />}
      />
      <form.AppForm>
        <form.SubmitButton>Invia</form.SubmitButton>
      </form.AppForm>
      {success !== undefined && success === true && (
        <div className="bg-green-100 p-4 rounded-2xl flex flex-col text-center items-center gap-4">
          <Check className="text-green-500 h-4 w-4" />
          <span>Form inviato con successo!</span>
        </div>
      )}
      {success !== undefined && success === false && (
        <div className="bg-red-100 p-4 rounded-2xl flex flex-col text-center items-center gap-4">
          <X className="text-red-500 h-4 w-4" />
          <span>Errore nell'invio del form. Utilizza un altro metodo per contattarmi.</span>
        </div>
      )}
    </form>
  );

}
