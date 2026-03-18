import React from "react";

type Props = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
};

function TextArea({ label, value, onChange, placeholder }: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <textarea
        className="border p-2 rounded"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default TextArea;
