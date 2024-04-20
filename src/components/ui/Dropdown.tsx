"use client";

import Select from "node_modules/react-select/dist/declarations/src/Select";
import { ActionMeta, MultiValue } from "react-select";

const className =
  "text-black ring-2 ring-white w-full p-2 placeholder:text-gray-300 text-lg rounded-lg border border-slate-400";

export function Dropdown({
  label,
  options,
  id,
  onChange,
  isMulti = false,
  showLabel = false,
}: {
  label: string;
  options: { value: string; label: string }[];
  id: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isMulti?: boolean;
  showLabel?: boolean;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      {showLabel && (
        <label className="text-md font-semibold" htmlFor={id}>
          {label}
        </label>
      )}

      <select
        id={id}
        className={className}
        onChange={onChange}
        // multiple={isMulti}
      >
        <option value="" selected disabled hidden>
          {label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
