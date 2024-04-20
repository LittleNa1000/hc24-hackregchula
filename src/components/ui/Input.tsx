"use client";

import { useState } from "react";
import { DownloadIcon, UploadIcon } from "./Icon";

const inputClassName =
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
        className={inputClassName}
        onChange={onChange}
      />
    </div>
  );
}

export function FileInput({
  label,
  download,
  onChange = () => {},
  isDisabled = false,
}: {
  label: string;
  download?: true;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
}) {
  const [file, setFile] = useState<File | undefined>(undefined);
  return (
    <label
      htmlFor={label}
      className={`border-gray col-span-2 flex w-full flex-col items-center justify-center rounded-2xl border-[2px] bg-transparent lg:border-2 ${isDisabled ? "cursor-default opacity-60" : "cursor-pointer hover:opacity-80 active:opacity-60"}`}
    >
      <div className="flex flex-col items-center justify-center gap-2 p-3 lg:p-12">
        <div className="mt-2 flex h-[24px] items-center justify-center">
          <span className="text-xl font-bold text-pink">{label}</span>
        </div>
        {download ? (
          <DownloadIcon className="h-6 w-6" />
        ) : (
          <UploadIcon className="h-6 w-6" />
        )}
        {file && (
          <div className="flex w-full justify-center rounded-md bg-slate-100 p-2">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[12px] font-semibold text-slate-500">
                {file.name}
              </p>
              <p className="text-[12px] text-slate-400">
                {(file.size / 1024 / 1024).toFixed(1)} MB
              </p>
            </div>
          </div>
        )}
      </div>
      {!download && (
        <input
          id={label}
          type="file"
          name={label}
          accept=".pdf, .jpg, .png"
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
            onChange(e);
          }}
          onClick={(e) => {
            const target = e.target as HTMLInputElement;
            target.value = "";
          }}
          className="hidden"
        />
      )}
    </label>
  );
}
