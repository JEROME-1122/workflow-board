import React from "react";
type Props = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};
function TextInput({ label, value, onChange, placeholder }: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        className="border p-2 rounded"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
