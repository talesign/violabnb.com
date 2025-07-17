import { useFormContext } from "../";
import { useStore } from "@tanstack/react-store";

type SubmitButtonProps = {
  children: React.ReactNode;
};

export const SubmitButton = ({ children }: SubmitButtonProps) => {
  const form = useFormContext();

  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);
  const canSubmit = useStore(form.store, (state) => state.canSubmit);

  return (
    <button
      className="py-4 px-6 text-white bg-gradient-to-br from-full-100 to-full-200 rounded-xl font-bold block"
      type="submit"
      // disabled={isSubmitting || !canSubmit}
    >
      {isSubmitting ? "Un secondo..." : children}
    </button>
  );
};
