import React from "react";
import { FORMAT_CASE } from "../../utilities";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface FieldsetProps {
  legend: string;
  fields: {
    heading?: string;
    fields?: {
      label: string;
      id: string;
      type: string;
      name: string;
      value: string;
      checked: boolean;
    }[];
    label?: string;
    id?: string;
    type: string;
    name?: string;
    placeholder?: string;
  }[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const Fieldset = ({ legend, fields, register, errors }: FieldsetProps) => {
  const fieldElements = fields.map(
    (
      { type, heading, fields = [], id, name = "", placeholder, label },
      index
    ) => {
      switch (type) {
        case "text":
        case "email":
          return (
            <div
              key={id}
              className={`flex flex-col ${
                name === "address" ? "md:col-span-full" : ""
              }`}
            >
              <div className="mb-2 flex justify-between text-xs font-bold leading-4 tracking-[-0.013rem]">
                <label
                  className={errors[name] ? "text-persian-red" : ""}
                  htmlFor={id}
                >
                  {label}
                </label>
                {errors[name] && (
                  <span className="font-medium text-persian-red" role="alert">
                    {FORMAT_CASE(String(errors[name]?.message), "sentence")}
                  </span>
                )}
              </div>
              <input
                className={`${
                  errors[name]
                    ? "border-2 border-persian-red focus:border focus:border-persian-red"
                    : "focus:border-raw-sienna"
                } rounded-lg border border-solid border-alto px-6 py-[1.125rem] text-sm font-bold  focus:outline-none`}
                id={id}
                type={type}
                placeholder={placeholder}
                {...register(name, {
                  required: {
                    value: true,
                    message: `${label} is required`,
                  },
                })}
              ></input>
            </div>
          );

        case "radioGroup":
          return (
            <React.Fragment key={index}>
              <h2 className="-mb-2 text-xs font-bold leading-4 tracking-[-0.013rem]">
                {heading}
              </h2>
              <ul className="flex flex-col gap-4">
                {fields.map(({ id, type, checked, value, name, label }) => (
                  <li
                    key={id}
                    className="flex items-center gap-4 rounded-lg border border-alto px-6 py-[1.125rem] hover:border-raw-sienna"
                  >
                    <input
                      className="h-5 w-5 accent-raw-sienna"
                      id={id}
                      type={type}
                      defaultChecked={checked}
                      value={value}
                      {...register(name)}
                    ></input>
                    <label
                      className="text-sm font-bold leading-4 tracking-[-0.013rem]"
                      htmlFor={id}
                    >
                      {label}
                    </label>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          );

        default:
          return null;
      }
    }
  );

  return (
    <fieldset>
      <legend className="mb-4 text-[0.8125rem] font-bold uppercase leading-relaxed tracking-[0.058rem] text-raw-sienna">
        {legend}
      </legend>
      <div
        className={`
          flex flex-col gap-6
          md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-6`}
      >
        {fieldElements}
      </div>
    </fieldset>
  );
};

export default Fieldset;
