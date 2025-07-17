import React from "react";
import { useFieldContext } from "../";
import { FieldErrors } from "./field-errors";

type TextFieldProps = {
  label: string;
  tooltip?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextField = ({
  label,
  tooltip,
  ...inputProps
}: TextFieldProps) => {
  const field = useFieldContext<string>();

  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <label
          className="uppercase text-sm tracking-wide cursor-text font-bold py-1 block "
          htmlFor={field.name}
        >
          {label}
        </label>
        <input
          className="text-black text-sm border rounded p-2 px-4 w-full"
          id={field.name}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          {...inputProps}
        />
      </div>
      <FieldErrors meta={field.state.meta} />
    </div>
  );
};
