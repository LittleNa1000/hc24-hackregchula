"use client";

import Select from "node_modules/react-select/dist/declarations/src/Select";
import { ActionMeta, MultiValue } from "react-select";

const optionClassName =
  "text-black ring-2 ring-white w-full p-2 placeholder:text-gray-300 text-lg rounded-lg border border-slate-400";

export function Dropdown({
  label,
  options,
  id,
  onChange,
  isMulti = false,
  showLabel = false,
  isDisabled = false,
  className,
}: {
  label: string;
  options: { value: string; label: string }[];
  id: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isMulti?: boolean;
  showLabel?: boolean;
  isDisabled?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex w-full flex-col items-start gap-2 ${className}`}>
      {showLabel && (
        <label className="text-lg font-semibold text-black" htmlFor={id}>
          {label}
        </label>
      )}

      <select
        disabled={isDisabled}
        id={id}
        className={optionClassName}
        onChange={onChange}
        // multiple={isMulti}
      >
        <option value="" selected disabled hidden>
          {!showLabel ? label : ""}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} selected={isDisabled}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
