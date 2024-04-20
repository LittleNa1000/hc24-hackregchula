"use client";

const optionClassName =
  "text-black ring-2 ring-white w-full p-2 placeholder:text-gray-300 text-lg rounded-lg border border-slate-400";

export function Input({
  label,
  type,
  placeholder,
  id,
  onChange,
  showLabel = false,
  className,
}: {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showLabel?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex w-full flex-col items-start gap-2 ${className}`}>
      {showLabel && (
        <label className="text-lg font-semibold text-black" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={optionClassName}
        onChange={onChange}
      />
    </div>
  );
}
